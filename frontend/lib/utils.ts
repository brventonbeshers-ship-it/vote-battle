
export function objectPick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((acc, k) => { if (k in obj) acc[k] = obj[k]; return acc; }, {} as Pick<T, K>);
}

export function isValidStacksAddress(addr: string): boolean {
  return /^S[PM][A-Z0-9]{38,}$/.test(addr);
}

export function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export const randomBetween = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

export function unique<T>(arr: T[]): T[] { return [...new Set(arr)]; }

export const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms));

export function memoize<T>(fn: (key: string) => T): (key: string) => T {
  const cache = new Map<string, T>();
  return (key: string) => { if (!cache.has(key)) cache.set(key, fn(key)); return cache.get(key)!; };
}
