import { ReactNode } from 'react';

interface InfoBoxProps {
  type: 'info' | 'warning' | 'success';
  icon: ReactNode;
  title?: string;
  children: ReactNode;
}

export default function InfoBox({ type, icon, title, children }: InfoBoxProps) {
  const colors = {
    info: 'border-cyan-500 bg-cyan-950/20',
    warning: 'border-orange-500 bg-orange-950/20',
    success: 'border-green-500 bg-green-950/20',
  };

  const iconColors = {
    info: 'text-cyan-400 w-6 h-6',
    warning: 'text-orange-400 w-6 h-6',
    success: 'text-green-400 w-6 h-6',
  };

  return (
    <div className={`arcade-box-inner ${colors[type]} p-4 mb-6 border-4`}>
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 ${iconColors[type]} mt-1`}>
          {icon}
        </div>
        <div className="flex-1">
          {title && <h4 className="font-bold mb-2 text-lg">{title}</h4>}
          <div className="text-gray-100">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}