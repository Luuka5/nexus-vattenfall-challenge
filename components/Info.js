import useStore from "../lib/store";
import styles from '../styles/BulletPoints.module.css'

export default function BulletPoints() {
  const bulletPoints = useStore(state => state.info);

  return (
    <ul className={styles.list}>
      {bulletPoints.map((point, i) => <li key={i} >{point}</li>)}
    </ul>
  );
}