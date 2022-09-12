import useStore from "../lib/store";

export default function CountVisual() {
  const count = useStore(state => state.count);

  return (
    <div style={{
      width: '40rem',
      height: '3rem',
      display: 'flex',
    }}>
      <p>Count: {count}</p>
      <div style={{
        width: (count * 10) + '%',
        height: '100%',
        backgroundColor: '#fff',
      }} />
    </div>
  )
}