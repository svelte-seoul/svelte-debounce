# Svelte-Debounce
Easy debouncing with Svelte action.

## Getting Started

1. Install this package in your project using:

```sh
// pnpm, npm, or yarn
pnpm install svelte-debounce
```

2. Prepare config.

```js
const config = {
  delay: 800, // Default = 750
  callback: (value) => { ... }
}
```

3. Use it! 🎉

```jsx
<input use:debounce={config}/>
``` 
