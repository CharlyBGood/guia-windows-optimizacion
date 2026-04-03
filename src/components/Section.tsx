import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function Section({ id, title, icon, children }: SectionProps) {
  return (
    <section id={`section-${id}`} className="arcade-box mb-8 p-6 scroll-mt-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 text-cyan-400 w-8 h-8 mt-1">
          {icon}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl mb-2 font-bold text-cyan-300">
            <span className="text-yellow-400">{id})</span> {title}
          </h2>
          <div className="h-1 bg-gradient-to-r from-cyan-400 to-transparent"></div>
        </div>
      </div>

      <div className="ml-0 md:ml-12">
        {children}
      </div>
    </section>
  );
}