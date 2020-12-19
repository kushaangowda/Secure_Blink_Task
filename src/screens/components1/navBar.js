import React from "react";

function NavBar() {
	return (
		<div className="navBar">
			<a href="#" className="logo">
				Logo
			</a>
			<div className="navlinks">
				<a href="#about" className="links">
					About
				</a>
				<a href="#services" className="links">
					Services
				</a>
				<a href="#caseStudies" className="links">
					Case Studies
				</a>
				<a href="#testimonials" className="links">
					Testimonials
				</a>
				<a href="#contact" className="links">
					Contact
				</a>
				<a href="#" className="links">
					Login
				</a>
			</div>
		</div>
	);
}

export default NavBar;
