"use client";

import { useStacks } from "@/hooks/useStacks";

export default function ConnectWallet() {
  const { address, connected, connect, disconnect } = useStacks();

  if (connected && address) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-secondary font-mono hidden sm:inline bg-primary/10 px-3 py-1 rounded-lg border border-primary/20">
          {address.slice(0, 5)}...{address.slice(-5)}
        </span>
        <button
          onClick={disconnect}
          className="px-4 py-2 rounded-xl bg-white/5 border border-accent/20 text-sm font-medium hover:bg-accent/15 hover:border-accent/40 hover:shadow-glow-sm transition-all duration-300"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={connect}
      className="px-5 py-2 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm shadow-glow hover:shadow-glow hover:brightness-110 active:scale-95 transition-all duration-300"
    >
      Connect Wallet
    </button>
  );
}
