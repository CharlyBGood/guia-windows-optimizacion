import { ReactNode } from 'react';

interface InfoBoxProps {
  type: 'info' | 'warning' | 'success';
  icon: ReactNode;
  title?: string;
  children: ReactNode;
}

export default function InfoBox({ type, icon, title, children }: InfoBoxProps) {
  const styles = {
    info: {
      box: 'border-blue-500/40 bg-blue-500/5',
      icon: 'text-blue-400',
    },
    warning: {
      box: 'border-portfolio-orange/50 bg-portfolio-orange/5',
      icon: 'text-portfolio-orange',
    },
    success: {
      box: 'border-emerald-500/40 bg-emerald-500/5',
      icon: 'text-emerald-400',
    },
  } as const;

  const s = styles[type];

  return (
    <div className={`panel-inner ${s.box} p-4 mb-6 border`}>
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 w-6 h-6 mt-0.5 ${s.icon}`}>
          {icon}
        </div>
        <div className="flex-1">
          {title && <h4 className="font-semibold mb-2 text-base text-portfolio-text-light">{title}</h4>}
          <div className="text-portfolio-text-light/90 text-sm md:text-base leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
