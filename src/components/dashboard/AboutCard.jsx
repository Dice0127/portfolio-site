import { AboutIcon, TechStackIcon, CertIcon } from '../../icons';
import { CardHeader, TechCategoryList } from './DashboardParts';

function AboutCard({
  aboutText,
  techStackByCategory,
  techIconByName,
  techPreviewCount,
  previewCerts,
  onViewAllTech,
  onViewAllCerts,
  onSelectCert,
}) {
  return (
    <div className="dcol-left">
      <div id="about" className="dcard dcard-about reveal">
        <CardHeader icon={<AboutIcon />} title="About" />
        {aboutText.map((p, i) => (
          <p className="dcard-text" key={i}>{p}</p>
        ))}
      </div>

      <div id="skills" className="dcard dcard-techstack reveal">
        <CardHeader icon={<TechStackIcon />} title="Tech Stack" onViewAll={onViewAllTech} />
        <TechCategoryList
          categories={techStackByCategory}
          techIconByName={techIconByName}
          limitPerCategory={techPreviewCount}
        />
      </div>

      <div className="dcard dcard-certs reveal">
        <CardHeader icon={<CertIcon />} title="Recent Certifications" onViewAll={onViewAllCerts} />
        <div className="cert-list">
          {previewCerts.map((c, i) => (
            <button className="cert-row" key={i} onClick={() => onSelectCert(c)}>
              <p className="cert-row-title">{c.title}</p>
              <p className="cert-row-sub">{c.issuer} · {c.date}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
