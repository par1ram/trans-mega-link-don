import Item from '../Item/Item'
import './Items.css'

const Items = ({ items }) => {
  return (
    <main>
      {items.map(el => (
        <Item key={el.id} item={el} />
      ))}
    </main>
  )
}

export default Items
