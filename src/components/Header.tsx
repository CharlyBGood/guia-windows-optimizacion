import { Wrench } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-portfolio-deep border-b border-portfolio-accent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 opacity-80"></div>

      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between gap-4 relative z-10">
        <a
          href="https://sinapsialab.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
          aria-label="SinapsiaLab"
        >
          <img
            src="https://res.cloudinary.com/dr8pwzxzn/image/upload/v1751256447/SinapsiaLabThinn8_lehxp5.png"
            alt="SinapsiaLab"
            className="h-9 md:h-10 w-auto object-contain"
            loading="eager"
            width="180"
            height="60"
          />
          <span className="hidden sm:inline text-sm text-portfolio-text group-hover:text-portfolio-orange transition-colors">
            tutoriales
          </span>
        </a>

        <a
          href="https://sinapsialab.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-portfolio-text hover:text-portfolio-orange transition-colors hidden md:inline"
        >
          sinapsialab.com →
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-12 pt-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-3 mb-5 px-4 py-1.5 rounded-full border border-portfolio-accent text-xs uppercase tracking-widest text-portfolio-text">
          <Wrench className="w-3.5 h-3.5 text-portfolio-orange" />
          Tutorial · Windows 10 / 11
        </div>

        <h1 className="gradient-glow inline-block text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          <span className="gradient-text">Optimizá y repará</span>{' '}
          <span className="text-portfolio-text-light">tu Windows</span>
        </h1>

        <p className="text-portfolio-text text-base md:text-lg max-w-2xl mx-auto">
          Guía práctica para limpiar, acelerar y mantener tu PC sin miedo a romper nada.
        </p>

        <div className="mt-8 flex justify-center gap-2 flex-wrap">
          <span className="px-3 py-1 rounded-full border border-portfolio-accent text-xs text-portfolio-text-light">Limpieza</span>
          <span className="px-3 py-1 rounded-full border border-portfolio-accent text-xs text-portfolio-text-light">Rendimiento</span>
          <span className="px-3 py-1 rounded-full border border-portfolio-accent text-xs text-portfolio-text-light">Reparación</span>
          <span className="px-3 py-1 rounded-full border border-portfolio-accent text-xs text-portfolio-text-light">Mantenimiento</span>
        </div>
      </div>
    </header>
  );
}
