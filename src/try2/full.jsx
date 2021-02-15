import React, { Component } from 'react';
import Slider from './slider';
import './full.css';

class Sample extends Component {
    state = {  }
    render() { 
        return (  
            <div className='container'>
                <div className='item'>Hello</div>
                <Slider/>
            </div>
        );
    }
}
 
export default Sample;