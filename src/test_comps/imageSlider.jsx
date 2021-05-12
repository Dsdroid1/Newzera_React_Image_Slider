import React, { Component } from 'react'
import './imageSlider.css';

class ImageSlider extends Component {
    
    constructor(props){
        super(props);
        this.state = { index:1 } ;
        
    }

    

    handlePrev = () =>{
        let curr = this.state.index;
        console.log(this.state.index);
        curr = (curr === 0) ? this.props.imgUrls.length-1 : curr-1 ; 
        console.log(curr);
        this.setState({index:curr}); 
        console.log(this.state.index);
    }

    handleNext = () =>{
        let curr = this.state.index;
        console.log(this.state.index);
        curr = (curr === this.props.imgUrls.length-1) ? 0 : curr+1 ; 
        console.log(curr);
        this.setState({index:curr}); 
        console.log(this.state.index);
    }

    render() { 
        
        let length = this.props.imgUrls.length;
        return (  
            <React.Fragment>
            <div className='slider-cont'>
                <div className='container'>
                {this.props.imgUrls.map( (url,index) => {
                    if (index===this.state.index)
                    {
                        return <div className='slider active' style={{ backgroundImage: `url(${url})`}}>
                            
                        </div>
                        return <img key={index} className="slider active" src={url} alt=" something" />
                    }
                    else{
                        return <div className='slider inactive' style={{ backgroundImage: `url(${url})`}}></div>
                        return <img key={index} className="slider inactive" src={url} alt="something" />
                    }
                } )}
                </div>
                <div className='progress'>
                                Circles:
                                {
                                    [...Array(length)].map((e,i)=>  {
                                        if(i===this.state.index)
                                            return <span className='dotfill' key={i}></span>
                                        else
                                            return <span className='dot' key={i}></span>
                                    })
                                }
                            </div>
            </div>
            <button onClick={this.handlePrev} className="Prev">Previous</button>
            <button onClick={this.handleNext} className='Next'>Next</button>
            <div>
                Circles:
                {
                    [...Array(length)].map((e,i)=>  {
                        if(i===this.state.index)
                            return <span className='dotfill' key={i}></span>
                        else
                            return <span className='dot' key={i}></span>
                    })
                }
            </div>
            </React.Fragment>
        );
    }
}
 
export default ImageSlider;