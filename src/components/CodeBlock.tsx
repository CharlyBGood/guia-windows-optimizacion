interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'text' }: CodeBlockProps) {
  return (
    <div className="bg-slate-900 border-3 border-green-600 p-4 mb-4 overflow-x-auto rounded">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        <span className="ml-2 text-xs text-green-400 font-mono">{language}</span>
      </div>
      <pre className="font-mono text-green-300 text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}