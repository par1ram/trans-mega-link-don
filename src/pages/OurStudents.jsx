import Header from "../components/Header/Header";
import PrintStudents from "../components/PrintStudents/PrintStudents";

const OurStudents = () => {
  const students = [
    {
      id: 1,
      firstname: "asd",
      lastbane: "asd",
      patronomic: "asd",
      email: "email@gmail.com",
      direction: "Фундоментальная информатика",
      group: "БФИ2205",
    },
    {
        id: 2,
        firstname: "John",
        lastName: "Doe",
        patronomic: "Smith",
        email: "johndoe@example.com",
        direction: "Computer Science",
        group: "CS2023",
      },
      {
        id: 3,
        firstname: "Emma",
        lastName: "Johnson",
        patronomic: "Brown",
        email: "emmaj@example.com",
        direction: "Software Engineering",
        group: "SE2101",
      },
  ]
  
  return (
    <div className="wrapper">
      <Header />
      <PrintStudents students={students}/>
    </div>
  );
};

export default OurStudents;
