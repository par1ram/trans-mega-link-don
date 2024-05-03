import "./Student.css";
import Table from "react-bootstrap/Table";

const Student = ({ students }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Отчество</th>
          <th>Направление</th>
          <th>Группа</th>
        </tr>
      </thead>
      <tbody>
        {students.map((el) => (
          <tr>
            <td>{el.id}</td>
            <td>{el.firstname}</td>
            <td>{el.lastname}</td>
            <td>{el.patronomic}</td>
            <td>{el.direction}</td>
            <td>{el.group}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Student;
