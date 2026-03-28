export default function Spinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const s = { sm: 'w-4 h-4', md: 'w-7 h-7', lg: 'w-10 h-10' }[size];
  return (
    <div
      className={`${s} rounded-full border-2 border-purple-900 border-t-purple-400 animate-spin`}
      role="status"
      aria-label="Loading"
    />
  );
}