"use client";

import { useEffect, useState } from "react";
import { Poll } from "@/lib/polls";
import { getPollResults, PollResults } from "@/lib/contracts";
import VoteButton from "./VoteButton";

interface PollCardProps {
  poll: Poll;
}

export default function PollCard({ poll }: PollCardProps) {
  const [results, setResults] = useState<PollResults | null>(null);

  useEffect(() => {
    getPollResults(poll.id).then(setResults);
  }, [poll.id]);

  const totalVotes = results ? results.optionA + results.optionB : 0;
  const percentA =
    totalVotes > 0 ? Math.round((results!.optionA / totalVotes) * 100) : 50;
  const percentB = 100 - percentA;

  return (
    <div className="poll-card group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[rgba(30,15,50,0.8)] to-[rgba(15,8,30,0.9)] backdrop-blur-sm border border-primary/15 shadow-card">
      {/* Split image */}
      <div className="relative h-44 overflow-hidden">
        <div className="absolute inset-0 flex">
          <div
            className="w-1/2 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${poll.imageA})` }}
          />
          <div
            className="w-1/2 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${poll.imageB})` }}
          />
        </div>
        {/* Diagonal split line */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        </div>
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,5,25,0.95)] via-[rgba(15,5,25,0.3)] to-transparent" />
        {/* Option names on image */}
        <div className="absolute bottom-0 inset-x-0 flex justify-between px-3 pb-2">
          <span className="text-xs font-bold text-primary drop-shadow-lg">{poll.optionA}</span>
          <span className="text-xs font-bold text-accent drop-shadow-lg">{poll.optionB}</span>
        </div>
        {/* VS label */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="bg-gradient-to-br from-primary/80 to-accent/80 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-glow border border-white/20">
            VS
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-bold text-white mb-3 text-center drop-shadow-md">
          {poll.optionA}{" "}
          <span className="text-primary/60">vs</span>{" "}
          {poll.optionB}
        </h3>

        {/* Progress bar */}
        <div className="relative h-1.5 rounded-full bg-white/5 mb-2 overflow-hidden border border-white/5">
          <div
            className="absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out progress-shimmer"
            style={{
              width: `${percentA}%`,
              background: "linear-gradient(90deg, #6C5CE7, #A29BFE, #6C5CE7)",
            }}
          />
          <div
            className="absolute inset-y-0 right-0 rounded-full transition-all duration-700 ease-out progress-shimmer"
            style={{
              width: `${percentB}%`,
              background: "linear-gradient(90deg, #FD79A8, #E84393, #FD79A8)",
            }}
          />
        </div>

        {/* Percentages */}
        <div className="flex justify-between text-xs mb-3">
          <span className="text-primary font-bold">{percentA}%</span>
          <span className="text-gray-500 font-medium">{totalVotes} votes</span>
          <span className="text-accent font-bold">{percentB}%</span>
        </div>

        {/* Vote buttons */}
        <div className="flex gap-2">
          <VoteButton
            pollId={poll.id}
            option={1}
            label={poll.optionA}
            side="A"
          />
          <VoteButton
            pollId={poll.id}
            option={2}
            label={poll.optionB}
            side="B"
          />
        </div>
      </div>

      {/* Tags */}
      <div className="px-4 pb-3 flex gap-1.5 flex-wrap">
        {poll.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2.5 py-0.5 rounded-full bg-primary/10 text-primary/70 border border-primary/10 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
