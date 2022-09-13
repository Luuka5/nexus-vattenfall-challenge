import styles from '../styles/MultipleChoice.module.css';


export default function MultipleChoise({ buttons, setValue, value }) {
  return (
    <div className={styles.container}>
      {buttons.map(button => (
        <button
          key={button.value}
          className={styles.button +' '+ (value == button.value ? styles.selected : '')}
          onClick={() => setValue?.(button.value)}
        >{button.text}</button>
      ))}
    </div>
  )
}