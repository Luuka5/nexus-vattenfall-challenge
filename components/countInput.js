import useStore from "../lib/store";

export default function CountInput() {
  const count = useStore(state => state.count);
  const setCount = useStore(state => state.setCount);

  return (
    <div style={{
      width: '40rem',
      height: '3rem',
      display: 'flex',
    }}>
      <button onClick={() => setCount(count -1)}>decrease</button>
      <button onClick={() => setCount(count +1)}>increase</button>
    </div>
  )
}