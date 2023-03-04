
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Home() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div>
        <Carousel responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}      
        >
        <div>
            <img src='http://loremflickr.com/1800/1600/Food'/>
        </div>
        <div>
            <img src='http://loremflickr.com/1800/1600/Food'/>
        </div>
        <div>
            <img src='http://loremflickr.com/1800/1600/Food'/>
        </div>
        <div>
            <img src='http://loremflickr.com/1800/1600/Food'/>
        </div>
      </Carousel>;


      
        </div>
    );
}

export default Home;