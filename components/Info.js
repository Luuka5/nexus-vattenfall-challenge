import useStore from "../lib/store";
import styles from '../styles/BulletPoints.module.css'

export default function BulletPoints() {
  const bulletPoints = useStore(state => state.info);
  const energyType = useStore(state => state.energyType);

  return (<>
    <ul className={styles.list}>
      <h2>Facts about {energyType} power:</h2>
      {bulletPoints.map((point, i) => <li key={i} >{point}</li>)}
    </ul>
  </>);
}