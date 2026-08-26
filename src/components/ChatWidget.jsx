// src/components/ChatWidget.jsx
import { useState, useRef, useEffect } from 'react';
import './ChatWidget.css';

const GREETING = "Hi there! 👋 Thanks for visiting my website. Feel free to ask me anything about my projects, skills, background, or my experiences in tech. Let me know what I can help with!";

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: GREETING, time: new Date() },
  ]);
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

    const userMsg = { role: 'user', text, time: new Date() };
    const nextMessages = [...messages, userMsg];
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
          history: nextMessages.slice(1, -1).map(({ role, text }) => ({ role, text })),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Something went wrong.');
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'model', text: data.reply, time: new Date() }]);
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-panel" role="dialog" aria-label="Chat with Jade">
          <div className="chat-header">
            <img src="/profile.jpg" alt="Jade" className="chat-avatar" />
            <div className="chat-header-info">
              <span className="chat-header-name">Jade Guevarra</span>
              <span className="chat-header-status">
                <span className="status-dot" /> Online · Powered by Google Gemini
              </span>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
              ✕
            </button>
          </div>

          <div className="chat-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={`chat-row ${m.role === 'user' ? 'chat-row--user' : 'chat-row--bot'}`}
              >
                {m.role === 'model' && <img src="/profile.jpg" alt="" className="chat-bubble-avatar" />}
                <div className="chat-bubble-col">
                  <div className={`chat-bubble ${m.role === 'user' ? 'chat-bubble--user' : 'chat-bubble--bot'}`}>
                    {m.text}
                  </div>
                  <span className={`chat-time ${m.role === 'user' ? 'chat-time--user' : ''}`}>
                    {formatTime(m.time)}
                  </span>
                </div>
              </div>
            ))}
            {loading && (
              <div className="chat-row chat-row--bot">
                <img src="/profile.jpg" alt="" className="chat-bubble-avatar" />
                <div className="chat-bubble chat-bubble--bot chat-bubble--typing">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
              </div>
            )}
            {error && <div className="chat-error">{error}</div>}
          </div>

          <form className="chat-input-row" onSubmit={sendMessage}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              maxLength={2000}
              disabled={loading}
            />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Send">
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