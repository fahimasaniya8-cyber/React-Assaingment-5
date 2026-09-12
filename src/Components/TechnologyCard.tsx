import type { Technology } from '../data/technology';

type TechnologyCardProps = {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
};

const TechnologyCard = ({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) => {
  const Icon = technology.icon;

  return (
    <div className="technology-card">
      <div className="card-top">
        <div className="technology-icon">
          <Icon />
        </div>

        <span className="badge">{technology.badge}</span>
      </div>

      <h3>{technology.name}</h3>

      <p className="description">{technology.description}</p>

      <div className="card-info">
        <span>{technology.category}</span>

        <span>{technology.difficulty}</span>

        <span>⭐ {technology.rating}</span>
      </div>

      <button
        className={isAdded ? 'add-button added' : 'add-button'}
        onClick={() => onAdd(technology)}
      >
        {isAdded ? 'Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechnologyCard;
