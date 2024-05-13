import React, {useState} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Items from './components/Items/Items'
import Prezentation from './components/Prezentation/Prezentation'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const App = () => {
  const [items, setItems] = useState([])
  axios("http://localhost:4000/allDirections")
    .then(r => {
      setItems(r)
    })

  return (
    <>
      <div className="wrapper">
        <Header />
        <Prezentation />
        <Items items={items} />
        <Footer />
      </div>
    </>
  );
}

export default App;
