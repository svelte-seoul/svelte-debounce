type Config = {delay: number, callback: (s: string) => void}

declare module 'svelte-debounce' {
  const debounce: (node: Node, config: Config) => void
}
