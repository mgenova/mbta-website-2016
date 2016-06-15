import React from 'react';
import Radium from 'radium';
import Navbar from 'react-bootstrap/lib/Navbar';

const styles = {



	bg: {
		backgroundImage: 'url(/images/footer-bg2.png)',
		width: '100%',
		height:'200px',
		overflow: 'hidden',

	}




};

@Radium
class Footer extends React.Component{
	constructor(props){
		super();
		this.state = {

		}
	}


	render() {
    	return (


			<footer className="navbar-fixed-bottom" style={styles.bg}>

			</footer>

		)
	}

}

export default Footer
