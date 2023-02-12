import { createSignal } from 'solid-js'

export default function Home() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <h2>Home page</h2>
      <button
        onclick={() => setCount(count() + 1)}
      >
        {count()}
      </button>
    </>
  )
}
