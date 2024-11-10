import styles from './InfoBlock.module.scss'
import Modal from '../Modal/Modal.jsx'
import { useState } from 'react'

export default function InfoBlock({ item }) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    if (!open) {
      setOpen(true)
    }
    if (open) {
      setOpen(false)
    }
  }

  return (
    <>
      <div className={styles.item} onClick={() => handleClick()}>
        <div className={styles.icon}>{item.icon}</div>
        <div className={styles.content}>{item.content}</div>
        <button onClick={() => handleClick()}>Подробнее</button>
        <Modal open={open}>
          <h1>{item.header}</h1>
          <ul>
            <li>{item.li1}</li>
            <li>{item.li2}</li>
            <li>{item.li3}</li>
          </ul>
          <button className={styles.close} onClick={() => handleClick()}>
            Закрыть
          </button>
        </Modal>
      </div>
    </>
  )
}
