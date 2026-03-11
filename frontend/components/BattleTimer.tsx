'use client';
import { useState, useEffect } from 'react';

interface BattleTimerProps { endsAt: number }

export default function BattleTimer({ endsAt }: BattleTimerProps) {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    const tick = () => setLeft(Math.max(0, endsAt - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [endsAt]);

  const h = Math.floor(left / 3_600_000);
  const m = Math.floor((left % 3_600_000) / 60_000);
  const s = Math.floor((left % 60_000) / 1000);

  return (
    <div className="flex gap-2 text-center">
      {[['h', h], ['m', m], ['s', s]].map(([u, v]) => (
        <div key={u} className="bg-white/5 rounded-lg px-3 py-2">
          <div className="text-lg font-mono font-bold text-purple-400">{String(v).padStart(2, '0')}</div>
          <div className="text-xs text-white/40">{u}</div>
        </div>
      ))}
    </div>
  );
}
