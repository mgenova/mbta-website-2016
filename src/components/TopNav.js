import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Button from 'react-bootstrap/lib/Button';


const styles = {
	logotext: {
		fontFamily: 'Satisfy, cursive',
		fontSize: '30px'

	}

};


export default class TopNav extends React.Component{
	constructor(props){
		super();
		this.state = {

		}
	}

	render() {
    	return (
			<div>
			<Navbar inverse fixedTop fluid>
			   <Navbar.Header>
				 <Navbar.Brand>
				   <a href="#" style={styles.logotext}>Myron B. Thompson Academy</a>
				 </Navbar.Brand>
				 <Navbar.Toggle />
			   </Navbar.Header>
			   <Navbar.Collapse>
				 <Nav>
				   <NavItem eventKey={1} href="#">HOME</NavItem>
				   <NavItem eventKey={2} href="#">WHAT&#39;S HAPPENING</NavItem>
				   <NavItem eventKey={1} href="#">CALENDAR</NavItem>
				   <NavItem eventKey={2} href="#">CONTACT US</NavItem>

				 </Nav>
				 <Nav pullRight>

						<NavItem><Button href="#" bsStyle="success" >LOGIN</Button></NavItem>
				   		<NavItem><Button href="#" bsStyle="primary" >APPLY</Button></NavItem>
					
				 </Nav>
			   </Navbar.Collapse>
			 </Navbar>

			 </div>
			/*
			<header id="header" className="navbar navbar-inverse navbar-fixed-top" role="banner">
			<div className="container" id="logomenu">
				<div className="navbar-header">
					<button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a href="../" className="navbar-brand" id="logotext">Myron B. Thompson Academy</a>
				</div>
				<nav className="collapse navbar-collapse bs-navbar-collapse navbar-right" id="nav-collapse"role="navigation">
					<ul className="nav navbar-nav">
					    <li><a href="#" title="Home">HOME</a></li>
					    <li><a href="#" title="Happenings">WHAT&#39;S HAPPENING</a></li>
					    <li><a href="#" title="Calendar">CALENDAR</a></li>
						<li><a href="#" title="Contact">CONTACT US</a></li>
				  	</ul>
					<ul className="nav navbar-nav navbar-right header-button">
						<li><button type="button" className="btn btn-success" id="nav-btn" ui-sref="Login">LOGIN</button></li>
						<li><button type="button" className="btn btn-primary" id="nav-btn" ui-sref="Apply">APPLY</button></li>
					</ul>
				</nav>
			</div>
			</header>
			*/





		)
  	}
}
