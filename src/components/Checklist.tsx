import { useState } from 'react';
import { Square, CheckSquare } from 'lucide-react';

interface ChecklistProps {
  items: string[];
}

export default function Checklist({ items }: ChecklistProps) {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newChecked = new Set(checked);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setChecked(newChecked);
  };

  return (
    <div className="panel-inner p-5">
      <ul className="space-y-2">
        {items.map((item, index) => {
          const isDone = checked.has(index);
          return (
            <li key={index}>
              <button
                onClick={() => toggleItem(index)}
                className="flex items-start gap-3 w-full text-left p-2 rounded-md hover:bg-portfolio-medium/40 transition-colors"
              >
                {isDone ? (
                  <CheckSquare className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-5 h-5 text-portfolio-text flex-shrink-0 mt-0.5" />
                )}
                <span className={isDone ? 'line-through text-portfolio-text/60' : 'text-portfolio-text-light'}>
                  {item}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
