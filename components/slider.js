
import { useEffect } from 'react';
import styles from '../styles/slider.module.css';

export default function Slider({ setRangevalue, max }) {

    useEffect(() => {
        setRangevalue(15);
    }, []);

    return (
        <div className={styles.container}>
            <input className={styles.slider} type="range" min={15} defaultValue={15} max={max} onInput={(event) => setRangevalue(event.target.value)} />
        </div>
    );
};