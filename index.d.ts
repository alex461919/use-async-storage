declare module '@alex461919/useAsyncStorage' {
    export function useAsyncStorage<S>(key: string, defaultValue: S): [S, (arg: S) => void, () => void];
    export function useAsyncStorage<S = undefined>(key: string): [S | undefined, (arg: S | undefined) => void, () => void];
}
