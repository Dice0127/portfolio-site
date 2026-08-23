import { ConnectIcon } from '../../icons';
import { CardHeader } from './DashboardParts';

function ConnectCard({ contactEmail, contactPhone, onOpenContactForm }) {
  return (
    <div id="contact" className="dcard dcard-connect reveal">
      <CardHeader icon={<ConnectIcon />} title="Connect" />
      <div className="connect-grid">
        <div className="connect-col">
          <p className="dcard-text">Open to collaborations, freelance work, and new opportunities.</p>
          <div className="connect-social-row">
            <a href="https://github.com/Dice0127" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src="/github-icon.png" alt="GitHub" className="icon-invert" />
            </a>
            <a href="https://www.linkedin.com/in/jade-guevarra-791724424/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <rect width="24" height="24" rx="4" fill="#0A66C2" />
                <path fill="#fff" d="M7.12 9.5H4.42V19.5H7.12V9.5ZM5.77 8.35C6.68 8.35 7.42 7.61 7.42 6.7C7.42 5.78 6.68 5.05 5.77 5.05C4.86 5.05 4.12 5.78 4.12 6.7C4.12 7.61 4.86 8.35 5.77 8.35ZM19.5 19.5V13.9C19.5 11.15 18.31 9.5 15.85 9.5C14.31 9.5 13.36 10.34 12.94 11.13H12.9V9.5H10.2V19.5H12.9V14.6C12.9 13.4 13.12 12.24 14.6 12.24C16.06 12.24 16.08 13.6 16.08 14.68V19.5H19.5Z" />
              </svg>
            </a>
            <a href={`mailto:${contactEmail}`} aria-label="Gmail">
              <img src="/gmail-icon.png" alt="Gmail" />
            </a>
          </div>
        </div>

        <div className="connect-col">
          <p className="connect-label">Get In Touch</p>
          <button type="button" className="connect-row connect-row-btn" onClick={onOpenContactForm}>
            <span className="connect-row-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </span>
            <span>
              <span className="connect-row-title">Send a Message</span>
              <span className="connect-row-sub">Fill out a quick form</span>
            </span>
          </button>
          <a className="connect-row" href={`tel:${contactPhone}`}>
            <span className="connect-row-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span>
              <span className="connect-row-title">Let's Talk</span>
              <span className="connect-row-sub">{contactPhone}</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ConnectCard;
