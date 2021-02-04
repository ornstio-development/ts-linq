export type valueOf<T> = T[keyof T];
export function nameof<T, V extends T[keyof T]>(
  f: (x: T) => V
): valueOf<{ [K in keyof T]: T[K] extends V ? K : never }>;
export function nameof(f: (x: any) => any): keyof any {
  const p = new Proxy(
    {},
    {
      get: (_, key) => key,
    }
  );
  return f(p);
}
