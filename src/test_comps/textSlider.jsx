import React, { Component } from 'react';
import ImageSlider from './imageSlider';

class TextSlider extends Component {
    state = {
        imgUrls: [
            'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
            'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
            'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
            'https://homepages.cae.wisc.edu/~ece533/images/boat.png'
        ]
    };



    render() { 
        
        return (
        <div >
            <ImageSlider imgUrls={this.state.imgUrls}/>
        </div>
        );
    }
}
 
export default TextSlider;