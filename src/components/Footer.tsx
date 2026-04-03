import { Sparkles, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 mb-8">
      <div className="arcade-box bg-gradient-to-br from-slate-800 to-slate-700 border-3 border-cyan-500 p-8 text-center">
        <div className="flex justify-center mb-4">
          <Sparkles className="w-10 h-10 text-yellow-400" />
        </div>

        <h3 className="text-2xl mb-4 text-cyan-300 font-bold">
          Artículo ofrecido por SinapsiaLab
        </h3>

        <p className="text-lg mb-6 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          ¿Necesitas un sitio web, una herramienta informática a medida o algún tipo de solución digital creativa, simple y eficaz?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://sinapsialab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="arcade-button bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500"
          >
            Visitá sinapsialab.com
          </a>

          <a
            href="mailto:hola@sinapsialab.com"
            className="arcade-button bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            hola@sinapsialab.com
          </a>
        </div>

        <div className="mt-8 pt-6 border-t-2 border-cyan-400/30">
          <p className="text-sm text-gray-400 font-mono">
            INSERT COIN TO CONTINUE • PRESS START
          </p>
        </div>
      </div>
    </footer>
  );
}