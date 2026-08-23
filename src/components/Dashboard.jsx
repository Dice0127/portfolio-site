import { useState } from 'react';
import './Dashboard.css';
import {
  aboutText,
  experience,
  techStack,
  techStackByCategory,
  projects,
  certifications,
  beyondCoding,
} from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import AboutCard from './dashboard/AboutCard';
import ExperienceProjectsCard from './dashboard/ExperienceProjectsCard';
import BeyondCodingCard from './dashboard/BeyondCodingCard';
import ConnectCard from './dashboard/ConnectCard';
import {
  AllProjectsModal,
  AllCertsModal,
  AllTechModal,
  CertModal,
  ProjectModal,
  ContactFormModal,
} from './dashboard/DashboardModals';

// Look up icon/solid info for a tech name (shared with the Hero marquee list).
const techIconByName = Object.fromEntries(techStack.map((t) => [t.name, t]));

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL;
const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE;

// How many items show in the dashboard preview before a "View All" button appears.
const PROJECTS_PREVIEW_COUNT = 4;
const CERTS_PREVIEW_COUNT = 3;
const TECH_PREVIEW_COUNT = 9; // covers current largest category (Frontend); extra items beyond this go behind "View All"

function Dashboard() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | sent | error

  const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;
  const revealRef = useScrollReveal('.reveal');

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setFormStatus('sent');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const previewProjects = projects.slice(0, PROJECTS_PREVIEW_COUNT);
  const previewCerts = certifications.slice(0, CERTS_PREVIEW_COUNT);

  return (
    <section id="dashboard" className="dashboard" ref={revealRef}>
      <div className="dashboard-top-row">
        <AboutCard
          aboutText={aboutText}
          techStackByCategory={techStackByCategory}
          techIconByName={techIconByName}
          techPreviewCount={TECH_PREVIEW_COUNT}
          previewCerts={previewCerts}
          onViewAllTech={() => setShowAllTech(true)}
          onViewAllCerts={() => setShowAllCerts(true)}
          onSelectCert={setSelectedCert}
        />
        <ExperienceProjectsCard
          experience={experience}
          previewProjects={previewProjects}
          onExpandProject={setExpandedProject}
          onViewAllProjects={() => setShowAllProjects(true)}
        />
      </div>

      {/* Beyond Coding + Connect, side by side */}
      <div className="dashboard-equal-row">
        <BeyondCodingCard beyondCoding={beyondCoding} />
        <ConnectCard
          contactEmail={CONTACT_EMAIL}
          contactPhone={CONTACT_PHONE}
          onOpenContactForm={() => {
            setShowContactForm(true);
            setFormStatus('idle');
          }}
        />
      </div>

      {showAllProjects && (
        <AllProjectsModal
          projects={projects}
          onClose={() => setShowAllProjects(false)}
          onExpandProject={setExpandedProject}
        />
      )}

      {showAllCerts && (
        <AllCertsModal
          certifications={certifications}
          onClose={() => setShowAllCerts(false)}
          onSelectCert={setSelectedCert}
        />
      )}

      {showAllTech && (
        <AllTechModal
          techStackByCategory={techStackByCategory}
          techIconByName={techIconByName}
          onClose={() => setShowAllTech(false)}
        />
      )}

      {selectedCert && <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}

      {expandedProject && (
        <ProjectModal project={expandedProject} onClose={() => setExpandedProject(null)} />
      )}

      {showContactForm && (
        <ContactFormModal
          onClose={() => setShowContactForm(false)}
          formStatus={formStatus}
          onSubmit={handleContactSubmit}
        />
      )}
    </section>
  );
}

export default Dashboard;
