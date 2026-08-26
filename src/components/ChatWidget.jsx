// src/components/ChatWidget.jsx
import { useState, useRef, useEffect } from 'react';
import './ChatWidget.css';

const GREETING = "Hey! I'm Jade's portfolio assistant — ask me about his projects, skills, or background 👋";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'model', text: GREETING }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function sendMessage(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages = [...messages, { role: 'user', text }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          // Send prior turns (excluding the greeting) so the model has context.
          history: nextMessages.slice(1, -1),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Something went wrong.');
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'model', text: data.reply }]);
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-panel" role="dialog" aria-label="Chat with Jade's portfolio assistant">
          <div className="chat-header">
            <span>💬 Ask Jade's Assistant</span>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
              ✕
            </button>
          </div>

          <div className="chat-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chat-bubble ${m.role === 'user' ? 'chat-bubble--user' : 'chat-bubble--bot'}`}>
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="chat-bubble chat-bubble--bot chat-bubble--typing">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
            )}
            {error && <div className="chat-error">{error}</div>}
          </div>

          <form className="chat-input-row" onSubmit={sendMessage}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my projects, skills..."
              maxLength={2000}
              disabled={loading}
            />
            <button type="submit" disabled={loading || !input.trim()}>
              ➤
            </button>
          </form>
        </div>
      )}

      <button
        className="chat-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? '✕' : '💬'}
      </button>
    </div>
  );
}