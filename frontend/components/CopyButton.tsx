'use client';
import { useState } from 'react';

export default function CopyButton({ text, className = '' }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} className={`text-xs px-2 py-1 rounded bg-purple-500/20 hover:bg-purple-500/30 transition ${className}`}>
      {copied ? '✓ Copied' : 'Copy address'}
    </button>
  );
}
