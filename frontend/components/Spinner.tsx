export default function Spinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const s = { sm: 'w-3 h-3', md: 'w-6 h-6', lg: 'w-9 h-9' }[size];
  return (
    <div
      className={`${s} rounded-full border-2 border-purple-900 border-t-purple-400 animate-spin`}
      role="status"
      aria-label="Loading"
    />
  );
}