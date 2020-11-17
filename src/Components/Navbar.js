import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css';
import logo from '../images/logo-png.png'; 

function Navbar(){

	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return(
		<div className="navbar">
			<div className="navbar-container container">
				<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
					<img className="logo" src={logo} alt="San Design logo"/>
				</Link>
				
				<div className = "menu-icon" onClick={handleClick}>
					{click ? <FaTimes /> : <FaBars />}
				</div>

				<ul className={click ? 'nav-menu active' :'nav-menu'}>
					<li className="nav-item">
						<Link to='/docs' className="nav-links" onClick={closeMobileMenu}> 
							Docs 
						</Link>
					</li>
				
					<li className="nav-item">
						<Link to="/starterkits" className="nav-links" onClick={closeMobileMenu}>
							Starter Kits
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/components" className="nav-links" onClick={closeMobileMenu}>
							Components
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}


export default Navbar;