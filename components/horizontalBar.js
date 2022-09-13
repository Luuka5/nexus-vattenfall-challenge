import styles from '../styles/HorizontalBar.module.css';

export default function HorizontalBar({ label, sliderValue, max, unit }) {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.label}>{label}: {sliderValue} {unit}</p>
      </div>
      <div className={styles.barBackground}>
        <div className={styles.bar} style={{
          width: ((sliderValue * 100.0) / max)+'%'
        }} />
      </div>
    </div>
  )
}