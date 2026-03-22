"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative max-w-md mx-auto mb-10">
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/60"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        placeholder="Type to filter polls..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/5 backdrop-blur-sm border border-primary/15 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:shadow-glow-sm focus:bg-white/8 transition-all duration-300"
      />
    </div>
  );
}
