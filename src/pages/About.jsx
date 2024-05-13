import Header from "../components/Header/Header";
import {Direction} from '../components/Direction/Direction.jsx'
import styles from '../components/Direction/direction.module.css'
import axios from 'axios'
import {useState} from 'react'
const About = () => {

  const [items, setItems] = useState([])
  axios("http://localhost:4000/allDirections")
    .then(r => {
      setItems(r)
    })

  return (
    <div className="wrapper">
      <Header />
      <div className={styles.about}>
        Кафедра информационной безопасности является ведущим академическим и исследовательским центром в области информационной безопасности. Наша миссия заключается в предоставлении высококачественного образования, проведении инновационных исследований и разработке практических решений для обеспечения конфиденциальности, целостности и доступности информационных систем и сетей.
      </div>
      {items.map(el => (
        <Direction key={el.id} name={el.name} description={el.description} />
      ))}
    </div>
  );
};

export default About;