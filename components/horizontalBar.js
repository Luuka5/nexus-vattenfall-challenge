import styles from '../styles/HorizontalBar.module.css';

export default function HorizontalBar({ label, value, max, unit }) {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.label}>{label}: {value} {unit}</p>
      </div>
      <div className={styles.barBackground}>
        <div className={styles.bar} style={{
          width: (Math.min(value * 100.0, 100) / max)+'%'
        }} />
      </div>
    </div>
  )
}