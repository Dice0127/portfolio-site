import { ExperienceIcon, ProjectsIcon } from '../../icons';
import { CardHeader, ProjectCard } from './DashboardParts';

function ExperienceProjectsCard({ experience, previewProjects, onExpandProject, onViewAllProjects }) {
  return (
    <div className="dcol-right">
      <div className="dcard dcard-experience reveal">
        <CardHeader icon={<ExperienceIcon />} title="Experience" />
        <div className="exp-list">
          {experience.map((item, i) => (
            <div className={`exp-item ${item.active ? 'active' : ''}`} key={i}>
              <span className="exp-dot" />
              <div className="exp-body">
                <div className="exp-top">
                  <p className="exp-title">{item.title}</p>
                  <span className="exp-date">{item.date}</span>
                </div>
                <p className="exp-org">{item.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="projects" className="dcard dcard-projects reveal">
        <CardHeader icon={<ProjectsIcon />} title="Recent Projects" onViewAll={onViewAllProjects} />
        <div className="mini-grid mini-grid-compact">
          {previewProjects.map((p, i) => (
            <ProjectCard p={p} key={i} onExpand={onExpandProject} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceProjectsCard;
