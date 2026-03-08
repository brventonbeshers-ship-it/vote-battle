import React from 'react';

interface NotificationDotProps { count?: number; children: React.ReactNode }

export default function NotificationDot({ count, children }: NotificationDotProps) {
  return (
    <div className="relative inline-flex">
      {children}
      {count !== undefined && count > 0 && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-[10px] font-bold text-white">
          {count > 9 ? '9+' : count}
        </span>
      )}
    </div>
  );
}
