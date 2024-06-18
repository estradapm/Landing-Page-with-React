import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="d-flex justify-content-between bg-body-tertiary" style={{ backgroundColor: 'black', color: 'white' }}>
			<nav className="navbar">
				<div className="container-fluid">
					<a className="navbar-brand" href="#" style={{ color: 'white' }}>
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/640px-Bootstrap_logo.svg.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
						Start Bootstrap
					</a>
				</div>
			</nav>

			<nav className="navbar navbar-expand-lg" style={{ color: 'white' }}>
				<div className="container-fluid">
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#" style={{ color: 'white' }}>About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#" style={{ color: 'white' }}>Services</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#" style={{ color: 'white' }}>Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Home;