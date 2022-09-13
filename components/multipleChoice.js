import styles from '../styles/MultipleChoice.module.css';


export default function MultipleChoise({ buttons, setValue }) {
  return (
    <div className={styles.container}>
      {buttons.map(button => (
        <button className={styles.button} onClick={() => setValue?.(button.value)}>{button.text}</button>
      ))}
    </div>
  )
}