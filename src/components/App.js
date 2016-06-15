import React from 'react';

export default class App extends React.Component{
	constructor(props){
		super();
		this.state = {

		}
	}

	render() {
    	return (
			<div>
				
				{this.props.children}
			</div>
		)
  	}
}
