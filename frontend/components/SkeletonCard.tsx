import React from 'react';

export default function SkeletonCard() {
  return (
    <div className="rounded-2xl bg-white/5 p-6 space-y-3 animate-pulse">
      <div className="h-4 bg-white/10 rounded w-3/4" />
      <div className="h-3 bg-white/10 rounded w-1/2" />
      <div className="h-3 bg-white/10 rounded w-5/6" />
      <div className="h-8 bg-purple-500/10 rounded mt-4" />
    </div>
  );
}
