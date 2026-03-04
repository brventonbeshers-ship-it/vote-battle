import {
  callReadOnlyFunction,
  uintCV,
  principalCV,
  cvToJSON,
} from "@stacks/transactions";
import { StacksMainnet, StacksTestnet } from "@stacks/network";
import {
  VoteBattleConfig,
  PollResults,
  VoterStats,
  VoterPollStats,
  POLLS,
} from "./types";

export class VoteBattleClient {
  private contractAddress: string;
  private contractName: string;
  private network: StacksMainnet | StacksTestnet;

  constructor(config: VoteBattleConfig) {
    this.contractAddress = config.contractAddress;
    this.contractName = config.contractName;
    this.network =
      config.network === "testnet" ? new StacksTestnet() : new StacksMainnet();
  }

  /**
   * Get vote results for a specific poll (1-20).
   */
  async getPollResults(pollId: number): Promise<PollResults> {
    if (pollId < 1 || pollId > 20) {
      throw new Error("Poll ID must be between 1 and 20");
    }

    try {
      const result = await callReadOnlyFunction({
        network: this.network,
        contractAddress: this.contractAddress,
        contractName: this.contractName,
        functionName: "get-poll-results",
        functionArgs: [uintCV(pollId)],
        senderAddress: this.contractAddress,
      });

      const json = cvToJSON(result);
      if (json.success && json.value) {
        const val = json.value.value;
        const optionA = parseInt(val["option-a"].value);
        const optionB = parseInt(val["option-b"].value);
        return { pollId, optionA, optionB, total: optionA + optionB };
      }
    } catch {
      // Fall through to default
    }

    return { pollId, optionA: 0, optionB: 0, total: 0 };
  }

  /**
   * Get results for all 20 polls in parallel.
   */
  async getAllPollResults(): Promise<PollResults[]> {
    const promises = Array.from({ length: 20 }, (_, i) =>
      this.getPollResults(i + 1)
    );
    return Promise.all(promises);
  }

  /**
   * Get total vote count for a specific voter address.
   */
  async getVoterStats(address: string): Promise<VoterStats> {
    try {
      const result = await callReadOnlyFunction({
        network: this.network,
        contractAddress: this.contractAddress,
        contractName: this.contractName,
        functionName: "get-voter-stats",
        functionArgs: [principalCV(address)],
        senderAddress: this.contractAddress,
      });

      const json = cvToJSON(result);
      if (json.success && json.value) {
        return {
          totalVotes: parseInt(json.value.value["total-votes"].value),
        };
      }
    } catch {
      // Fall through to default
    }

    return { totalVotes: 0 };
  }

  /**
   * Get a voter's stats for a specific poll.
   */
  async getVoterPollStats(
    address: string,
    pollId: number
  ): Promise<VoterPollStats> {
    if (pollId < 1 || pollId > 20) {
      throw new Error("Poll ID must be between 1 and 20");
    }

    try {
      const result = await callReadOnlyFunction({
        network: this.network,
        contractAddress: this.contractAddress,
        contractName: this.contractName,
        functionName: "get-voter-poll-stats",
        functionArgs: [principalCV(address), uintCV(pollId)],
        senderAddress: this.contractAddress,
      });

      const json = cvToJSON(result);
      if (json.success && json.value) {
        const val = json.value.value;
        return {
          pollId,
          votesA: parseInt(val["votes-a"].value),
          votesB: parseInt(val["votes-b"].value),
        };
      }
    } catch {
      // Fall through to default
    }

    return { pollId, votesA: 0, votesB: 0 };
  }

  /**
   * Get the leaderboard — polls sorted by total votes (descending).
   */
  async getLeaderboard(): Promise<
    (PollResults & { name: string })[]
  > {
    const results = await this.getAllPollResults();
    return results
      .map((r) => {
        const poll = POLLS.find((p) => p.id === r.pollId);
        return {
          ...r,
          name: poll ? `${poll.optionA} vs ${poll.optionB}` : `Poll #${r.pollId}`,
        };
      })
      .sort((a, b) => b.total - a.total);
  }

  /**
   * Build the function args needed for a vote transaction.
   * Use with @stacks/connect openContractCall().
   */
  getVoteArgs(pollId: number, option: 1 | 2) {
    if (pollId < 1 || pollId > 20) {
      throw new Error("Poll ID must be between 1 and 20");
    }
    if (option !== 1 && option !== 2) {
      throw new Error("Option must be 1 (A) or 2 (B)");
    }

    return {
      contractAddress: this.contractAddress,
      contractName: this.contractName,
      functionName: "vote",
      functionArgs: [uintCV(pollId), uintCV(option)],
    };
  }
}
