
import styles from '../styles/slider.module.css';

export default function({ setRangevalue }) {

    return (
        <div className={styles.container}>
            <input className={styles.slider} type="range" min={0} onInput={(event) => setRangevalue(event.target.value)} />
        </div>
    );
};