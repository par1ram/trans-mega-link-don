import { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header>
			<div>
				<img className="icon" src="../../antenna.svg" alt="" />
				<span className="logo">ТрансМегаЛинкДон</span>
			</div>
			<div className="menu">
				<ul className="nav">
					<Link to="/" className="rLink">
						<li className="home">Домашняя страница</li>
					</Link>
					<Link to="/about" className="rLink">
						<li className="about">Про нас</li>
					</Link>
					<Link to="/contact" className="rLink">
						<li className="contacts">Связаться с нами</li>
					</Link>
				</ul>
			</div>

			<div className="mobileMenu" onClick={() => setIsOpen((prev) => !prev)}>
				<div>Меню</div>
				<div>{isOpen ? <ChevronUp /> : <ChevronDown />}</div>
			</div>

			{isOpen && (
				<div className="dropdown">
					<Link to="/" className="RLink">
						Домашняя страница
					</Link>
					<Link to="/about" className="RLink">
						Про нас
					</Link>
					<Link to="/contact" className="RLink">
						Связаться с нами
					</Link>
				</div>
			)}
		</header>
	)
}

export default Header
