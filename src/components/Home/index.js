
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
    
    const foodList = [
        {id: 1,
         name: 'Food 1',
         pic: 'http://loremflickr.com/1800/1800/Food'
        },
        {id: 2,
            name: 'Food 2',
            pic: 'http://loremflickr.com/1800/1800/Food'
        },
        {id: 3,
            name: 'Food 3',
            pic: 'http://loremflickr.com/1800/1800/Food'
           }

    ]


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
      </Carousel>

      <div>
      <p className='p-4'>All Items</p>

        <select onChange={(e) => console.log(e.target.value)} id='select' className='px-4 py-2 border border-2 rounded mx-4'>
            <option value='Food'>Food</option>
            <option value='two'>Coo2</option>
            <option value='three'>Coo3</option>
        </select>

      </div>

        <div className='flex flex-row justify-around px-6 mb-20'>
      {foodList.map((eachitem) => 
        <div key={eachitem.id} className='mt-6 grid grid-cols-3 gap-1'>
            <div>
            <img src={eachitem.pic} className='w-max'/>
            <p>{eachitem.name}</p>
            <p>{eachitem.price}</p>
            </div>
        </div>
        )}
        </div>

      
        </div>
    );
}

export default Home;