import Button from "../Button/Button";
import { useState } from "react";
import "./Item.css";

const Item = ({ item }) => {
  const [email, setMail] = useState("");

  return (
    <div className="item">
      <img src={"./img/" + item.photoName} />
      <div className="info">
        <h2>{item.lastName} {item.firstName} {item.patronymic}</h2>
        <p>{item.academicDegrees.name}</p>
        <Button mail={email} setMail={setMail} item={item.email} />
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Item;
