import React from 'react';
import Radium from 'radium';

var styles = {
  base: {
    border: 0,
    borderRadius: 4,
    color: 'white',
    padding: '1.5em',

    ':hover': {
      backgroundColor: 'red'
    },

    ':focus': {
      backgroundColor: 'green'
    },

    ':active': {
      backgroundColor: 'yellow'
    },
  },

  block: {
    display: 'block',

    ':hover': {
      boxShadow: '0 3px 0 rgba(0,0,0,0.2)'
    }
  },
};

@Radium
class Button extends React.Component {
	constructor(props){
		super();
		this.state = {

		}
	}

  render() {
    return (
      <button style={styles.base}>
        {this.props.children} Hover me!
      </button>
    );
  }


}

export default Button
