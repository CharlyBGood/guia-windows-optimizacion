import { Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 mb-8">
      <div className="panel panel-glow p-8 md:p-10 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          <span className="gradient-text">Tutorial ofrecido por SinapsiaLab</span>
        </h3>

        <p className="text-base md:text-lg mb-8 text-portfolio-text max-w-2xl mx-auto leading-relaxed">
          ¿Necesitás un sitio web, una herramienta a medida o una solución digital simple, creativa y eficaz?
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="https://sinapsialab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="sinapsia-button"
          >
            Visitá sinapsialab.com
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href="mailto:hola@sinapsialab.com"
            className="sinapsia-button-outline"
          >
            <Mail className="w-4 h-4" />
            hola@sinapsialab.com
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-portfolio-text mt-6">
        © {new Date().getFullYear()} ·{' '}
        <a
          href="https://sinapsialab.com"
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-link"
        >
          SinapsiaLab
        </a>
      </p>
    </footer>
  );
}
