import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'text' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <div className="panel-inner mb-4 overflow-hidden">
      <div className="flex items-center justify-between gap-2 px-4 py-2 border-b border-portfolio-accent bg-portfolio-deep/60">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-pink-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500/80"></div>
          <span className="ml-2 text-xs text-portfolio-text font-mono uppercase tracking-wider">{language}</span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="text-xs text-portfolio-text hover:text-portfolio-orange transition-colors flex items-center gap-1.5"
          aria-label="Copiar código"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Copiado' : 'Copiar'}
        </button>
      </div>
      <pre className="font-mono text-sm text-portfolio-text-light p-4 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}
