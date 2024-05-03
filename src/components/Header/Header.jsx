import "./Header.css";
import { BsMortarboardFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <span className="icon"><BsMortarboardFill size="40px"/></span>
        <span className="logo">Кафедра информационной безопастности</span>
        <ul className="nav">
          <Link to='/' className="rLink"><li className="home">Домашняя страница</li></Link>
          <Link to='/about'  className="rLink"><li className="about">Про нас</li></Link>
          <Link to='/students' className="rLink"><li className="students">Наши студенты</li></Link>
          <Link to='/contact' className="rLink"><li className="contacts">Связаться с нами</li></Link>
        </ul>
      </div>
    </header>
  );
}

export default Header
