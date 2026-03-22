"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import PollGrid from "@/components/PollGrid";
import LeaderboardModal from "@/components/LeaderboardModal";
import { POLLS } from "@/lib/polls";

export default function Home() {
  const [search, setSearch] = useState("");
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);

  const filteredPolls = useMemo(() => {
    if (!search.trim()) return POLLS;
    const q = search.toLowerCase();
    return POLLS.filter(
      (poll) =>
        poll.optionA.toLowerCase().includes(q) ||
        poll.optionB.toLowerCase().includes(q) ||
        poll.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }, [search]);

  return (
    <div className="min-h-screen relative z-10">
      <Header onOpenLeaderboard={() => setLeaderboardOpen(true)} />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 text-glow">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-primary via-pink to-accent bg-clip-text text-transparent">
              Side
            </span>
          </h2>
          <p className="text-lg text-gray-400 drop-shadow-lg">
            20 battles. Your vote. On-chain forever.
          </p>
        </div>
        <SearchBar value={search} onChange={setSearch} />
        <PollGrid polls={filteredPolls} />
      </main>
      <LeaderboardModal
        open={leaderboardOpen}
        onClose={() => setLeaderboardOpen(false)}
      />
    </div>
  );
}
