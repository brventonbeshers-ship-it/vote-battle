"use client";

import { useEffect, useState } from "react";
import { getAllPollResults, getTopVoters, PollResults } from "@/lib/contracts";
import { POLLS } from "@/lib/polls";

interface LeaderboardModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LeaderboardModal({
  open,
  onClose,
}: LeaderboardModalProps) {
  const [pollResults, setPollResults] = useState<PollResults[]>([]);
  const [topVoters, setTopVoters] = useState<
    { address: string; votes: number }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    Promise.all([getAllPollResults(), getTopVoters()])
      .then(([polls, voters]) => {
        setPollResults(polls);
        setTopVoters(voters);
      })
      .finally(() => setLoading(false));
  }, [open]);

  if (!open) return null;

  const sortedPolls = [...pollResults]
    .map((r) => ({
      ...r,
      total: r.optionA + r.optionB,
      name:
        POLLS.find((p) => p.id === r.pollId)?.optionA +
        " vs " +
        POLLS.find((p) => p.id === r.pollId)?.optionB,
    }))
    .sort((a, b) => b.total - a.total);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-[rgba(30,15,50,0.95)] to-[rgba(15,8,30,0.98)] backdrop-blur-xl border border-primary/20 rounded-3xl max-w-3xl w-full mx-4 max-h-[80vh] overflow-auto shadow-glow"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-extrabold bg-gradient-to-r from-primary via-pink to-accent bg-clip-text text-transparent">
              Leaderboard
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-white hover:rotate-90 transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {loading ? (
            <div className="text-center py-10 text-gray-500">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Top Polls */}
              <div>
                <h3 className="text-sm font-bold text-primary mb-3 uppercase tracking-wider drop-shadow-md">
                  Popular Polls
                </h3>
                <div className="space-y-1.5">
                  {sortedPolls.slice(0, 10).map((poll, i) => (
                    <div
                      key={poll.pollId}
                      className="lb-row flex items-center gap-3 p-2.5 rounded-xl bg-white/3 border border-white/5"
                    >
                      <span className="text-xs font-extrabold text-primary/50 w-5">
                        #{i + 1}
                      </span>
                      <span className="text-sm text-white flex-1 truncate font-medium">
                        {poll.name}
                      </span>
                      <span className="text-sm font-mono font-bold text-primary">
                        {poll.total}
                      </span>
                    </div>
                  ))}
                  {sortedPolls.length === 0 && (
                    <p className="text-sm text-gray-500">No votes yet</p>
                  )}
                </div>
              </div>

              {/* Voter Rankings */}
              <div>
                <h3 className="text-sm font-bold text-accent mb-3 uppercase tracking-wider drop-shadow-md">
                  Voter Rankings
                </h3>
                <div className="space-y-1.5">
                  {topVoters.slice(0, 10).map((voter, i) => (
                    <div
                      key={voter.address}
                      className="lb-row flex items-center gap-3 p-2.5 rounded-xl bg-white/3 border border-white/5"
                    >
                      <span className="text-xs font-extrabold text-accent/50 w-5">
                        #{i + 1}
                      </span>
                      <span className="text-sm text-white flex-1 font-mono truncate">
                        {voter.address.slice(0, 8)}...{voter.address.slice(-4)}
                      </span>
                      <span className="text-sm font-mono font-bold text-accent">
                        {voter.votes}
                      </span>
                    </div>
                  ))}
                  {topVoters.length === 0 && (
                    <p className="text-sm text-gray-500">No voters yet</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
