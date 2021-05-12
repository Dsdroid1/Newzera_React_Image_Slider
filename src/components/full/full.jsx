import React, { Component } from 'react';
import Slider from '../slider/slider';
import './full.css';
import Left from '../left/left';

class Sample extends Component {
  state = {};
  render() {
    return (
      <div className='container'>
        {/* Container is a flex container, which will display the 2 parts of our application,
            The left part containing text and app download links,
            and the right part,having the image slider and nav bars.
        */}
        <div className='item'>
          <Left />
        </div>
        <div className='item'>
          <Slider />
        </div>
      </div>
    );
  }
}

export default Sample;
