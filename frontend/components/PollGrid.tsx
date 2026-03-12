"use client";

import { Poll } from "@/lib/polls";
import PollCard from "./PollCard";

interface PollGridProps {
  polls: Poll[];
}

export default function PollGrid({ polls }: PollGridProps) {
  if (polls.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        No matching polls found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
      {polls.map((poll) => (
        <PollCard key={poll.id} poll={poll} />
      ))}
    </div>
  );
}
