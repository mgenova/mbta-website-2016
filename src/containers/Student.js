import React from 'react';

export default class Student extends React.Component{
	constructor(props){
		super();
		this.state = {

		}
	}

	render() {
    	return (
			<div>
				<h1>Student</h1>
				{this.props.children}
			</div>
		)
  	}
}
