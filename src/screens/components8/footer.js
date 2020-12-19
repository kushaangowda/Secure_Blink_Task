import React from "react";
import fbk from "../../assets/Group 34322.svg";
import twi from "../../assets/Group 34323.svg";
import loc from "../../assets/Path 36465.svg";
import pho from "../../assets/Group 35689.svg";
import mail from "../../assets/Group 35688.svg";

function Footer() {
	return (
		<div className="footer">
			<div className="col1">
				<p>
					Lorem Finaldream rure dolor in reprehenderit in voluptate velit esse cillum dolore e uis nostrud exercitation isi ut aliquip ex ea commodo
					consequat.
				</p>
				<img src={fbk} className="socicon" alt="" />
				<img src={twi} className="socicon" alt="" />
				<img src={fbk} className="socicon" alt="" />
			</div>
			<div className="col2">
				<p className="footerHeading">Our Services</p>
				<div className="underline"></div>
				<p className="footerList">Web Development</p>
				<p className="footerList">Mobile Development</p>
				<p className="footerList">Cloud Technology</p>
				<p className="footerList">UI/UX Designs</p>
			</div>
			<div className="col3">
				<p className="footerHeading">Our Links</p>
				<div className="underline"></div>
				<p className="footerList">Terms & Condition</p>
				<p className="footerList">Privacy Policy</p>
				<p className="footerList">Imprint</p>
				<p className="footerList">Legal</p>
			</div>
			<div className="col4">
				<p className="footerHeading">Contact Us</p>
				<div className="underline"></div>
				<p className="footerList">
					<img src={loc} className="conicon" />
					<span className="conText">Al. Dummyodl 124/23 floor 123 Banswara Street, 02-577 India.</span>
				</p>
				<p className="footerList">
					<img src={pho} className="conicon" />
					<span className="conText">00 1800 245 453</span>
				</p>
				<p className="footerList">
					<img src={mail} className="conicon" />
					<span className="conText">hello@inkyy.com</span>
				</p>
			</div>
		</div>
	);
}

export default Footer;
