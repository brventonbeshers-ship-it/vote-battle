import React from 'react';

interface LeaderboardRowProps { rank: number; address: string; score: number }

const medals: Record<number, string> = { 1: '🥇', 2: '🥈', 3: '🥉' };

export default function LeaderboardRow({ rank, address, score }: LeaderboardRowProps) {
  return (
    <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/5 hover:bg-white/8 transition">
      <div className="flex items-center gap-3">
        <span className="text-lg w-8 text-center">{medals[rank] ?? `#${rank}`}</span>
        <span className="font-mono text-sm text-white/70">{address.slice(0,8)}…{address.slice(-6)}</span>
      </div>
      <span className="font-bold text-purple-300">{score.toLocaleString()}</span>
    </div>
  );
}
