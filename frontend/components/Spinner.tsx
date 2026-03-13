export default function Spinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const s = { sm: 'w-3 h-3', md: 'w-5 h-5', lg: 'w-7 h-7' }[size];
  return (
    <div
      className={`${s} rounded-full border-2 border-purple-900 border-t-purple-400 animate-spin`}
      role="status"
      aria-label="Loading"
    />
  );
}