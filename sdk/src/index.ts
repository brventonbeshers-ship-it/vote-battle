// sdk-rev: 2
import type { VoteBattleClient } from "./client";
export { VoteBattleClient } from "./client";
export {
  PollResults,
  VoterStats,
  VoterPollStats,
  PollInfo,
  VoteBattleConfig,
  POLLS,
} from "./types";

export type VoteResult = Awaited<ReturnType<VoteBattleClient['getPollResults']>>;
