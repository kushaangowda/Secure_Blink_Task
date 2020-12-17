import React from "react";

function NavBar() {
	return (
		<div className="navBar">
			<a href="#" className="logo">
				Logo
			</a>
			<div className="navlinks">
				<a href="#" className="links">
					About
				</a>
				<a href="#" className="links">
					Services
				</a>
				<a href="#" className="links">
					Case Studies
				</a>
				<a href="#" className="links">
					Testimonials
				</a>
				<a href="#" className="links">
					Contact
				</a>
				<a href="#" className="links active">
					Login
				</a>
			</div>
		</div>
	);
}

export default NavBar;
