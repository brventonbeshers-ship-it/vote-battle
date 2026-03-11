// updated: 2026-03-11



import { StacksMainnet } from "@stacks/network";

export const NETWORK = new StacksMainnet();

export const CONTRACT_ADDRESS = "SP1Q7YR67R6WGP28NXDJD1WZ11REPAAXRJJ3V6RKM";
export const CONTRACT_NAME = "vote-dapp-stacks";

export const HIRO_API_BASE = "https://api.mainnet.hiro.so";


export function shortenAddress(addr: string, head = 6, tail = 4): string {
  if (!addr || addr.length < head + tail + 3) return addr;
  return `${addr.slice(0, head)}…${addr.slice(-tail)}`;
}


export function formatNumber(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000)     return (n / 1_000).toFixed(1) + 'K';
  return n.toLocaleString();
}


export function calcVotePercent(votes: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((votes / total) * 100);
}


export function pluralize(n: number, word: string, plural?: string): string {
  return `${n} ${n === 1 ? word : (plural ?? word + 's')}`;
}


export function timeAgo(date: Date): string {
  const diff = Date.now() - date.getTime();
  const mins  = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days  = Math.floor(diff / 86400000);
  if (days  > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (mins  > 0) return `${mins}m ago`;
  return 'just now';
}


export function formatSTX(microStx: number): string {
  return (microStx / 1_000_000).toFixed(2) + ' STX';
}
