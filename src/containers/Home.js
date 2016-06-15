import React from 'react';
import TopNav from '../components/TopNav';
import Slider from '../components/Slider';

import SubMenu from '../components/SubMenu';
import Footer from '../components/Footer';

const styles =  {
	container: {

		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
		justifyContent: 'space-between'

	},

	TopNav: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
		justifyContent: 'space-between'
	}


};

export default class Home extends React.Component{
	constructor(props){
		super();
		this.state = {

		}
	}

	render() {
    	return (
			<div className="container" style={styles.wrapper}>

				<SubMenu/>
			
			</div>



		)
  	}
}
