import styles from '../styles/graph.module.css'

function Grid({ verticalLines, horizontalLines, range }) {
  const lineWidth = 0.03;
  return (<> 
    {new Array(verticalLines - 1).fill(<div/>).map((_, i) => (
      <rect className={styles.grid} key={i} x={((range.maxX - range.minX * 1.0) / (verticalLines)) * (i + 1) + range.minX - lineWidth / 2} y={range.minY} width={lineWidth} height={range.maxY - range.minY} fill="#235" />
    ))}
    {new Array(horizontalLines - 1).fill(<div/>).map((_, i) => (
      <rect className={styles.grid} key={i} y={((range.maxY - range.minY * 1.0) / (horizontalLines)) * (i + 1) + range.minY - lineWidth / 2} x={range.minX} height={lineWidth} width={range.maxX - range.minX} fill="#235" />
    ))}
  </>)
}

function Polyline({ points, scale }) {
  return (
    <path
      strokeWidth={0.1}
      stroke='#fff'
      fill='none'
      d={'M '+ points.map((point, i) => `${i * scale.scaleX} ${point * scale.scaleY}`).join(' ')}
    />
  )
}

export default function Graph({ lines, range }) {

  return (
    <div className={styles.container}>
      <div className={styles.graph}>
        <svg className={styles.graph} viewBox={[range.minX, range.minY, range.maxX, range.maxY].join(' ')}>
          <Grid verticalLines={8} horizontalLines={4} range={range} />
          {lines.map((line, i) => <Polyline key={i} points={line} scale={range} />)}
        </svg>
        <p style={{
          bottom: '0',
          right: '100%',
        }}>0 kWh</p>
        <p style={{
          top: '0',
          right: '100%', 
        }}>12000 kWh</p>
        <p style={{
          top: '100%',
          right: '0', 
        }}>300 m<sup>2</sup></p>
        <p style={{
          top: '100%',
          left: '0', 
        }}>0 m<sup>2</sup></p>
      </div>
    </div>
  )
}