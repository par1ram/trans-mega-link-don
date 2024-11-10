import styles from './InfoBlock.module.scss'
import InfoBlock from './InfoBlock'

export default function PrintBlocks({ data }) {
  return (
    <div className={styles.group}>
      {data.map((element) => {
        return <InfoBlock key={element.id} item={element} />
      })}
    </div>
  )
}
