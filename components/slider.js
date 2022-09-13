
import styles from '../styles/slider.module.css';

export default function Slider({ setRangevalue, max }) {
    return (
        <div className={styles.container}>
            <input className={styles.slider} type="range" min={15} max={max} onInput={(event) => setRangevalue(event.target.value)} />
        </div>
    );
};