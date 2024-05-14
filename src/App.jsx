import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Items from './components/Items/Items'
import Prezentation from './components/Prezentation/Prezentation'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const App = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    axios('http://localhost:4000/allTeachers')
      .then(r => {
        setItems(r.data)
      })
  }, [items])

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
