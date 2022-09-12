import styles from '../styles/graph.module.css'


function Grid({ verticalLines, horizontalLines, range }) {
  const lineWidth = 0.03;
  return (<> 
    {new Array(verticalLines - 1).fill(<div/>).map((_, i) => (
      <rect className={styles.grid} key={i} x={((range.maxX - range.minX * 1.0) / (verticalLines)) * (i + 1) + range.minX - lineWidth / 2} y={range.minY} width={lineWidth} height={range.maxY - range.minY} fill="#fff" />
    ))}
    {new Array(horizontalLines - 1).fill(<div/>).map((_, i) => (
      <rect className={styles.grid} key={i} y={((range.maxY - range.minY * 1.0) / (horizontalLines)) * (i + 1) + range.minY - lineWidth / 2} x={range.minX} height={lineWidth} width={range.maxX - range.minX} fill="#fff" />
    ))}
  </>)
}

function Polyline({ points, scale }) {
  return (
    <path
      strokeWidth={0.5}
      stroke='#fff'
      fill='none'
      d={'M '+ points.map((point, i) => `${i * scale.scaleX} ${point * scale.scaleY}`).join(' ')}
    />
  )
}

export default function Graph({ lines, range }) {

  return (
    <div>
      <svg className={styles.graph} viewBox={[range.minX, range.minY, range.maxX, range.maxY].join(' ')}>
        {lines.map((line, i) => <Polyline key={i} points={line} scale={range} />)}
        <Grid verticalLines={15} horizontalLines={9} range={range} />
      </svg>
      
    </div>
  )
}