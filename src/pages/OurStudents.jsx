import Header from "../components/Header/Header";
import PrintStudents from "../components/Student/PrintStudents";
import { useState, useEffect } from "react";
import axios from "axios";

const OurStudents = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios("http://localhost:4000/allStudents").then((r) => {
      setStudents(r.data);
    });
  },)

  return (
    <div className="wrapper">
      <Header />
      <PrintStudents students={students} />
    </div>
  );
};

export default OurStudents;
