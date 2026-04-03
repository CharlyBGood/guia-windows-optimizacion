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
    <div className="bg-slate-800/50 border-3 border-yellow-500 p-6 rounded">
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => toggleItem(index)}
              className="flex items-start gap-3 w-full text-left group hover:bg-yellow-500/10 p-2 rounded transition-colors"
            >
              {checked.has(index) ? (
                <CheckSquare className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              ) : (
                <Square className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5 group-hover:text-green-400" />
              )}
              <span className={checked.has(index) ? 'line-through text-gray-400' : 'text-gray-100'}>
                {item}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}