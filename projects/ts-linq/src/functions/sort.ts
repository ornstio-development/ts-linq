function sortAlphabetical(a: string, b: string): number {
  return new Intl.Collator().compare(a, b);
}

function sortNumerical(a: number, b: number): number {
  return a < b ? -1 : a > b ? 1 : 0;
}

export function sort(a: string | number, b: string | number): number {
  if (typeof a === 'string' && typeof b === 'string') {
    return sortAlphabetical(a, b);
  }
  if (typeof a === 'number' && typeof b === 'number') {
    return sortNumerical(a, b);
  }
  return 0;
}
