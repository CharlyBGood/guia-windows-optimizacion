import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function Section({ id, title, icon, children }: SectionProps) {
  return (
    <section id={`section-${id}`} className="panel mb-8 p-6 md:p-8 scroll-mt-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 text-portfolio-orange w-8 h-8 mt-1">
          {icon}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-portfolio-text-light mb-2">
            <span className="gradient-text mr-2">{id})</span>
            {title}
          </h2>
          <div className="h-px bg-gradient-to-r from-pink-500/60 via-yellow-400/60 to-blue-500/0"></div>
        </div>
      </div>

      <div className="ml-0 md:ml-12 text-portfolio-text-light">
        {children}
      </div>
    </section>
  );
}
