import { Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 border-b-4 border-cyan-500 shadow-lg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-10 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Terminal className="w-14 h-14 text-yellow-400" />
          <h1 className="text-4xl md:text-5xl text-center text-yellow-400 font-bold">
            WINDOWS REPAIR ARCADE
          </h1>
        </div>

        <p className="text-center text-lg font-semibold text-gray-100">
          GUÍA PRÁCTICA: OPTIMIZAR WINDOWS
        </p>

        <div className="mt-6 flex justify-center gap-3 flex-wrap">
          <span className="px-4 py-2 bg-cyan-600 text-white rounded border-2 border-cyan-400 font-bold text-sm">LIMPIEZA</span>
          <span className="px-4 py-2 bg-green-600 text-white rounded border-2 border-green-400 font-bold text-sm">RENDIMIENTO</span>
          <span className="px-4 py-2 bg-orange-600 text-white rounded border-2 border-orange-400 font-bold text-sm">REPARACIÓN</span>
          <span className="px-4 py-2 bg-red-600 text-white rounded border-2 border-red-400 font-bold text-sm">MANTENIMIENTO</span>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-yellow-400 to-orange-400"></div>
    </header>
  );
}