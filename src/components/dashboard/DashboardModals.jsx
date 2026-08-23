import ImageWithFallback from './ImageWithFallback';
import { ProjectCard, TechCategoryList } from './DashboardParts';

export function AllProjectsModal({ projects, onClose, onExpandProject }) {
  return (
    <div className="list-modal-backdrop" onClick={onClose}>
      <div className="list-modal" onClick={(e) => e.stopPropagation()}>
        <div className="list-modal-header">
          <h3>All Projects</h3>
          <button className="list-modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="list-modal-body">
          <div className="mini-grid mini-grid-full">
            {projects.map((p, i) => (
              <ProjectCard p={p} key={i} onExpand={onExpandProject} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AllCertsModal({ certifications, onClose, onSelectCert }) {
  return (
    <div className="list-modal-backdrop" onClick={onClose}>
      <div className="list-modal" onClick={(e) => e.stopPropagation()}>
        <div className="list-modal-header">
          <h3>All Certifications</h3>
          <button className="list-modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="list-modal-body">
          <div className="cert-list">
            {certifications.map((c, i) => (
              <button className="cert-row" key={i} onClick={() => onSelectCert(c)}>
                <p className="cert-row-title">{c.title}</p>
                <p className="cert-row-sub">{c.issuer} · {c.date}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AllTechModal({ techStackByCategory, techIconByName, onClose }) {
  return (
    <div className="list-modal-backdrop" onClick={onClose}>
      <div className="list-modal" onClick={(e) => e.stopPropagation()}>
        <div className="list-modal-header">
          <h3>Full Tech Stack</h3>
          <button className="list-modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="list-modal-body">
          <TechCategoryList categories={techStackByCategory} techIconByName={techIconByName} />
        </div>
      </div>
    </div>
  );
}

export function CertModal({ cert, onClose }) {
  return (
    <div className="cert-modal-backdrop" onClick={onClose}>
      <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cert-modal-close" onClick={onClose} aria-label="Close">✕</button>
        <ImageWithFallback src={cert.image} alt={cert.title} className="cert-modal-image" />
        <p className="cert-modal-title">{cert.title}</p>
      </div>
    </div>
  );
}

export function ProjectModal({ project, onClose }) {
  return (
    <div className="cert-modal-backdrop" onClick={onClose}>
      <div className="cert-modal project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cert-modal-close" onClick={onClose} aria-label="Close">✕</button>
        {project.image && (
          <ImageWithFallback src={project.image} alt={project.title} className="cert-modal-image" />
        )}
        <p className="cert-modal-title">{project.title}</p>
        <p className="project-modal-desc">{project.desc}</p>
      </div>
    </div>
  );
}

export function ContactFormModal({ onClose, formStatus, onSubmit }) {
  return (
    <div className="cert-modal-backdrop" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <div className="contact-modal-header">
          <div className="contact-modal-heading">
            <span className="contact-modal-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </span>
            <div>
              <p className="contact-modal-title">Send a Message</p>
              <p className="contact-modal-subtitle">I usually reply within a day or two.</p>
            </div>
          </div>
          <button className="contact-modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {formStatus === 'sent' ? (
          <div className="contact-form-success">
            <span className="contact-form-success-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <p className="dcard-text">Thanks for reaching out! I'll get back to you soon.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={onSubmit}>
            <label className="contact-form-field">
              <span>Name</span>
              <input type="text" name="name" required placeholder="Your name" />
            </label>
            <label className="contact-form-field">
              <span>Email</span>
              <input type="email" name="email" required placeholder="your@email.com" />
            </label>
            <label className="contact-form-field">
              <span>Message</span>
              <textarea name="message" required rows="4" placeholder="What would you like to talk about?" />
            </label>
            <button type="submit" className="btn-solid contact-form-submit" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            {formStatus === 'error' && (
              <p className="contact-form-error">Something went wrong — please try again or email me directly.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
