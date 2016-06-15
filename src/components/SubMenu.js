import React from 'react';
import Radium from 'radium';
import Box from './Box';


const styles = {

	submenu: {
		display: 'flex',
	  	flexDirection: 'row',
	  	flexWrap: 'wrap'
  	},
  	box1: {
		backgroundImage: 'url(/images/student-bg.png)',
		borderRadius: '25px',
	  	width: '230px',
	  	height:'330px',
	  	margin: '5px',
		color: 'white'
	},
	box2: {
		backgroundImage: 'url(/images/academics-bg.png)',
		borderRadius: '25px',
	  	width: '230px',
	  	height:'330px',
	  	margin: '5px',
		color: 'white'
	},
	box3: {
		backgroundImage: 'url(/images/community-bg.png)',
		borderRadius: '25px',
	  	width: '230px',
	  	height:'330px',
	  	margin: '5px',
		color: 'white'
	},
	box4: {
		backgroundImage: 'url(/images/quicklinks-bg.png)',
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

const imgUrl = ['url(/images/student-bg.png)', 'url(/images/academics-bg.png)', 'url(/images/community-bg.png)', 'url(/images/quicklinks-bg.png)'];
const menuTitle = ['STUDENT', 'ACADEMICS', 'COMMUNITY', 'QUICKLINKS'];

const menu1 = [
	{ id: 0, link:'#', title: 'Secondary', box:1 },
	{ id: 1, link:'#', title: 'Elementary', box:1 },
	{ id: 2, link:'#', title: 'TEA', box:1 },
	{ id: 3, link:'#', title: 'Summer', box:1 },
	{ id: 4, link:'#', title: 'College & Career', box:1 },
	{ id: 5, link:'#', title: 'Forms', box:1 },
	{ id: 6, link:'#', title: 'Portal', box:1 }
]

const menu2 = [
	{ id: 10, link:'#', title: 'Curriculum', box:2 },
	{ id: 11, link:'#', title: 'Student HandBook', box:2 },
	{ id: 12, link:'#', title: 'Courses', box:2 },
	{ id: 13, link:'#', title: 'Portal', box:2 }
]

const menu3 = [
	{ id: 20, link:'#', title: 'Board', box:3 },
	{ id: 21, link:'#', title: 'Calendar', box:3 },
	{ id: 22, link:'#', title: 'About Us', box:3 },
	{ id: 23, link:'#', title: 'Alumni', box:3 },
	{ id: 24, link:'#', title: 'Achievements', box:3 },
	{ id: 25, link:'#', title: 'FAQs', box:3 },
	{ id: 26, link:'#', title: 'Faculty', box:3 },
	{ id: 27, link:'#', title: 'Staff', box:3 }
]
const menu4 = [
	{ id: 30, link:'#', title: 'Important Information', box:2 },
	{ id: 31, link:'#', title: 'Careers', box:2 }
]


@Radium
class SubMenu extends React.Component{
	constructor(props){
		super();
		this.state = {

		}
	}
	renderMenu1(){
		return menu1.map(function(item){
			return (
					<div>
						<a href={item.link}  key={item.id} style={[styles.bglist, styles.one]}>{item.title}</a>
					</div>
				)
		});
	}
	renderMenu2(){
		return menu2.map(function(item){
			return (
					<div>
						<a href={item.link}  key={item.id+20} style={[styles.bglist, styles.one]}>{item.title}</a>
					</div>
				)
		});
	}
	renderMenu3(){
		return menu3.map(function(item){
			return (
					<div>
						<a href={item.link}  key={item.id+30} style={[styles.bglist, styles.one]}>{item.title}</a>
					</div>
				)
		});
	}
	renderMenu4(){
		return menu4.map(function(item){
			return (
					<div>
						<a href={item.link}  key={item.id+40} style={[styles.bglist, styles.one]}>{item.title}</a>
					</div>
				)
		});
	}
	render() {
    	return (

			<div className="submenu" style={styles.submenu}>
				<Box menu={menu1} menuTitles={menuTitle[0]} bgImage={imgUrl[0] } />
				<Box menu={menu2} menuTitles={menuTitle[1]} bgImage={imgUrl[1]} />
				<Box menu={menu3} menuTitles={menuTitle[2]} bgImage={imgUrl[2]} />
				<Box menu={menu4} menuTitles={menuTitle[3]} bgImage={imgUrl[3]} />
			</div>

		)
  	}
}

export default SubMenu
