import { openContractCall } from "@stacks/connect";
import { uintCV } from "@stacks/transactions";
import { VoteBattleClient } from "vote-battle-sdk";
import { CONTRACT_ADDRESS, CONTRACT_NAME, NETWORK } from "./stacks";

export type { PollResults, VoterStats } from "vote-battle-sdk";

const client = new VoteBattleClient({
  contractAddress: CONTRACT_ADDRESS,
  contractName: CONTRACT_NAME,
});

export async function vote(pollId: number, option: number): Promise<void> {
  const args = client.getVoteArgs(pollId, option as 1 | 2);
  await openContractCall({
    network: NETWORK,
    ...args,
    onFinish: (data) => {
      console.log("Vote tx:", data.txId);
    },
    onCancel: () => {
      console.log("Vote cancelled");
    },
  });
}

export const getPollResults = (pollId: number) => client.getPollResults(pollId);

export const getVoterStats = (address: string) => client.getVoterStats(address);

export const getAllPollResults = () => client.getAllPollResults();

export async function getTopVoters(): Promise<
  { address: string; votes: number }[]
> {
  try {
    const url = `https://api.mainnet.hiro.so/extended/v1/address/${CONTRACT_ADDRESS}.${CONTRACT_NAME}/transactions?limit=50`;
    const res = await fetch(url);
    const data = await res.json();

    const voterMap = new Map<string, number>();
    for (const tx of data.results || []) {
      if (tx.tx_type === "contract_call" && tx.tx_status === "success") {
        const sender = tx.sender_address;
        voterMap.set(sender, (voterMap.get(sender) || 0) + 1);
      }
    }

    return Array.from(voterMap.entries())
      .map(([address, votes]) => ({ address, votes }))
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 10);
  } catch {
    return [];
  }
}
