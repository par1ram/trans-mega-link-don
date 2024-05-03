import Button from "../Button/Button"
import { useState } from "react"
import "./Item.css"

const Item = ({ item }) => {
  const [mail, setMail] = useState('')

  return (
    <div className="item">
      <img src={"./img/" + item.img} />
      <div className="info">
        <h2>{item.name}</h2>
        <p>{item.rank}</p>
        <Button mail={mail} setMail={setMail} item={item}/>
        <p>{mail}</p>
        <b>{item.category}</b>
      </div>
    </div>
  );
}

export default Item
