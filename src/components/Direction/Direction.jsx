import styles from './direction.module.css'

export const Direction = ({name, description}) => {
  return (
    <div className={styles.department}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
