
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
