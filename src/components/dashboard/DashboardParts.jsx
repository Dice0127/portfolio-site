import ImageWithFallback from './ImageWithFallback';

export function CardHeader({ icon, title, onViewAll, viewAllLabel = 'View All' }) {
  return (
    <div className="dcard-header">
      <span className="dcard-icon">{icon}</span>
      <h2>{title}</h2>
      {onViewAll && (
        <button type="button" className="view-all-btn" onClick={onViewAll}>
          {viewAllLabel} →
        </button>
      )}
    </div>
  );
}

export function ProjectCard({ p, onExpand }) {
  return (
    <div className="mini-card">
      <button type="button" className="mini-card-expand" onClick={() => onExpand(p)}>
        {p.image && (
          <div className="mini-card-image">
            <ImageWithFallback src={p.image} alt={p.title} />
          </div>
        )}
        <div className="mini-card-body">
          <p className="mini-card-title">{p.title}</p>
          <p className="mini-card-desc">{p.desc}</p>
        </div>
      </button>
      <div className="mini-card-links">
        {p.link && p.link !== '#' && (
          <a
            className="mini-card-btn"
            href={p.link}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            {p.linkLabel || 'Live Demo'}
          </a>
        )}
        {p.github && (
          <a
            className="mini-card-btn mini-card-btn-outline"
            href={p.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
}

export function TechCategoryList({ categories, techIconByName, limitPerCategory }) {
  return Object.entries(categories).map(([category, items]) => {
    const shown = limitPerCategory ? items.slice(0, limitPerCategory) : items;
    return (
      <div className="tech-category" key={category}>
        <p className="tech-category-title">{category}</p>
        <div className="tech-chip-row">
          {shown.map((item) => {
            const t = techIconByName[item];
            return (
              <span className="tech-chip" key={item}>
                {t && (
                  <span
                    className="tech-chip-icon-badge"
                    style={{ background: t.solid ? '#ffffff' : 'transparent' }}
                  >
                    <ImageWithFallback src={t.icon} alt="" className="tech-chip-icon" />
                  </span>
                )}
                {item}
              </span>
            );
          })}
        </div>
      </div>
    );
  });
}
