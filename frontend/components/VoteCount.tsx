import React from 'react';

interface VoteCountProps { votes: number; label?: string }

export default function VoteCount({ votes, label = 'votes' }: VoteCountProps) {
  return (
    <div className="flex items-baseline gap-1">
      <span className="text-2xl font-bold text-white">{votes.toLocaleString()}</span>
      <span className="text-sm text-white/50">{label}</span>
    </div>
  );
}
