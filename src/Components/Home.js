import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Button} from './Button';
import illustration from '../images/illustration1.png'; 
import {FaGithub, FaLongArrowAltRight} from "react-icons/fa";
import './Home.css';

class Home extends Component{
	
	render(){
		return (
			<div className='home__hero-section'>
				<div className="container">
					<div className="row home__hero-row" style={{display:'flex', flexDirection: 'row'}}>
						<div className="col">
							<div className="home__hero-text-wrapper">
								<div className="top-line">Develop</div>
								<h1 className = 'heading dark'>React Web Apps</h1>
								<p className='home__hero-subtitle dark'>with pace using San Design</p>
								<Link to="/">
									<Button buttonStyle="btn--rounded" buttonColor="darkblack">Get Started <span class="fafaicon"><FaLongArrowAltRight/></span></Button>
								</Link>

								<Link to="/">
									<Button buttonStyle="btn--rounded" buttonColor="white">Github <span class="fafaicon"><FaGithub/></span></Button>
								</Link>
							</div>
						</div>

						<div>
							<div className="col">
								<div className="home__hero-img-wrapper">
									<img src={illustration} alt="Illustration" className="home__hero-img"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;