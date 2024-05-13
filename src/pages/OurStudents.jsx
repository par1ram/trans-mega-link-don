import Header from "../components/Header/Header";
import PrintStudents from "../components/Student/PrintStudents";
import {useState} from 'react'
import axios from 'axios'

const OurStudents = () => {
  const [students, setStudents] = useState([])
  axios("http://localhost:4000/allDirections")
    .then(r => {
      setStudents(r)
    })
  
  return (
    <div className="wrapper">
      <Header />
      <PrintStudents students={students}/>
    </div>
  );
};

export default OurStudents;
