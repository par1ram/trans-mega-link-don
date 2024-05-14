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
          <tr key={el.id}>
            <td>{el.id}</td>
            <td>{el.firstName}</td>
            <td>{el.lastName}</td>
            <td>{el.patronymic}</td>
            <td>{el.direction.name}</td>
            <td>{el.group.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Student;
