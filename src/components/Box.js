import React from 'react';
import Radium from 'radium';


const styles = {
  	box: {
		borderRadius: '25px',
	  	width: '230px',
	  	height:'330px',
	  	margin: '5px',
		color: 'white'
	},
  	paneltitle: {
		fontWeight: 'bold',
		color: 'white',
		lineHeight: '2',
		textAlign: 'center',
		borderBottom: 'white solid 1px'
	},
  	bglist: {
		color: 'white',
		fontSize: '18px',
		fontWeight: '300',
		marginLeft: '15px'
	},
	one: {
    ':hover': {
		color: 'white',
		fontWeight: 'bold',
    	textShadow: '2px 2px 2px #34495e'
    }
  }
};

@Radium
class Box extends React.Component{
	constructor(props){
		super(props);
	}
	renderBox(){
		return this.props.menu.map(function(item){
			return (
					<div>
						<a href={item.link}  key={item.id} style={[styles.bglist, styles.one]}> {item.title}</a>
					</div>
				)
		});
	}
	render() {
		let that = this;
    	return (
			<div className="box" style={[styles.box, {backgroundImage: that.props.bgImage}]}>
		    	<h3 style={styles.paneltitle}> {that.props.menuTitles} </h3>

				{this.renderBox()}
			</div>
		)
  	}
}

export default Box
