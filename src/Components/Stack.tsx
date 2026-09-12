import type { Technology } from '../data/technology';

type StackProps = {
  stack: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
};

const Stack = ({ stack, onRemove, onRemoveAll }: StackProps) => {
  return (
    <aside className="stack-box">
      <div className="stack-heading">
        <div>
          <h3>Your Stack</h3>

          <p>
            {stack.length} Technology
            {stack.length !== 1 ? 'ies' : 'y'} Selected
          </p>
        </div>

        
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <p className="empty-stack-border">Your stock is empty.</p>
          
        </div>
      ) : (
        <>
          <div className="selected-list">
            {stack.map(technology => {
              const Icon = technology.icon;

              return (
                <div className="selected-item" key={technology.id}>
                  <div className="selected-name">
                    <Icon />
                    <span>{technology.name}</span>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() => onRemove(technology.id)}
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>

          <button className="remove-all" onClick={onRemoveAll}>
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default Stack;