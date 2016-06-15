import React from 'react';
import Radium from 'radium';
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselCaption from 'react-bootstrap/lib/CarouselCaption';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';



const styles = {
	Caption: {
		fontFamily: 'Satisfy, cursive',
		fontSize: '30px'

	}

};
@Radium
class Slider extends React.Component{
	constructor(props){
		super();
		this.state = {

		}
	}


	render() {
    	return (
			<div>
			<Carousel>
			    <Carousel.Item>
			      <img width={900} height={500} alt="900x500" src="/images/image0.png"/>
			      <Carousel.Caption>
			        <h3>First slide label</h3>
			        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img width={900} height={500} alt="900x500" src="/images/image1.png"/>
			      <Carousel.Caption>
			        <h3>Second slide label</h3>
			        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img width={900} height={500} alt="900x500" src="/images/image2.png"/>
			      <Carousel.Caption>
			        <h3>Third slide label</h3>
			        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			  </Carousel>
			 </div>
		)
	}

}

export default Slider
