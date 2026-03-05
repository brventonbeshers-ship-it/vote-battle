'use client';
interface Props { totalVotes: number; totalPolls: number; }
export default function VoteStats({ totalVotes, totalPolls }: Props) {
  return (
    <div className="flex gap-6 justify-center">
      {[
        { label: 'Total Polls',  value: totalPolls,  icon: '🗳️' },
        { label: 'Total Votes',  value: totalVotes,  icon: '⚡' },
      ].map(s => (
        <div key={s.label} className="text-center">
          <p className="text-2xl font-black text-white">{s.icon} {s.value.toLocaleString()}</p>
          <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
        </div>
      ))}
    </div>
  );
}