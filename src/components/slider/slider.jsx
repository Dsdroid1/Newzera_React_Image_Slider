import React, { useState, useRef, useEffect } from 'react';
import './slider.css';
import Overlay from '../overlay/overlay'; //To display navbar etc on top of slider

function Slider() {
  const [index, setIndex] = useState(0);
  //Keeps track of which image to display as background
  let x_displace = -index * 50;
  /*
  HOW DOES THE SLIDER WORK?
  Reference: https://betterprogramming.pub/build-an-image-slider-with-react-es6-264368de68e4
  The hierarchy of components for display is as follows
  We have a window of say fixed width.Then we have a flex container of double the previous width
  (as we have to display 2 images in the slider).The outer container has its overflow as hidden
  and thus only half of the flex is visible.
  Now, the flex container has 2 div of the width same as that of the outer container,each div
  having one of the image as its background.
  Thus, initially only the first image is available.
  When the index changes, we displace the flex container is negative x-direction, so that the 
  other image can now be displayed.Thus, be controlling the x-displacement of the flex, we can create
  a smooth transitioning effect.
  This x_displace parameter calculates the required displacement(according to active index)[0 or -50% for our case]
   */
  //50 as we have 2 images,and the flex container is size 2*img,so displace accordingly
  const styles = {
    transform: `translate(${x_displace}%, 0px)`,
    transition: `transform ease-out 1s`
  };
  //Styles to create transitioning for the slider
  const autoplayref = useRef();
  //To keep track of most up-to-date function for next image in slider

  useEffect(() => {
    autoplayref.current = () => {
      return setIndex(index === 1 ? 0 : 1);
    };
  });
  //At every re-render, updates the autoplayref function reference

  useEffect(() => {
    const play = () => {
      return autoplayref.current();
    };

    const interval = setInterval(play, 10 * 1000);
    return () => clearInterval(interval);
  }, []);
  //useEffect hook to only execute once, initially i.e. to start the timer interval
  //Then for every re-render, this does not change,and executes the index change logic on timer intervals.

  return (
    <React.Fragment>
      <div className='slider-container'>
        {/* Component structure is as described above.*/}
        <div className='slider-flex' style={styles}>
          <div className='image_cont img1'></div>
          <div className='image_cont img2'></div>
        </div>
        <div className='overlay_data'>
          <Overlay />
        </div>
        <div className='progress'>
          {/* This displays the progress bar for the slider, i.e. the dots to keep track of current image visually */}
          {[...Array(2)].map((e, i) => {
            if (i === index) return <span className='dotfill' key={i}></span>;
            else return <span className='dot' key={i}></span>;
          })}
        </div>
      </div>
      {/* 
        <button onClick={ () => setIndex(index===1?0:1)}>Next</button>
        <p>Current Image {index}</p>
      */}
    </React.Fragment>
  );
}

export default Slider;
