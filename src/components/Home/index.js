
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import { Button, IconButton } from '@material-ui/core';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';


import Food from '../Food';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    padding: theme.spacing(2),
  },
  image: {
    height: 300,
    width: '100%',
    objectFit: 'cover',
  },
}));

const images = [
  {
    src:
      'https://images.unsplash.com/photo-1504639725597-78f6ec6b5383?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFwZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    alt: 'Image 1',
  },
  {
    src:
      'https://images.unsplash.com/photo-1559548331-6fca8e7d7e63?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcGVyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    alt: 'Image 2',
  },
  {
    src:
      'https://images.unsplash.com/photo-1593642530411-ebd57fc37c59?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBhcGVyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    alt: 'Image 3',
  },
];

function Home() {
  const classes = useStyles();

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
         pic: 'http://loremflickr.com/1800/1800/Food',
         price: 10,
        },
        {id: 2,
            name: 'Food 2',
            pic: 'http://loremflickr.com/1800/1800/Food',
            price: 20,
        },
        {id: 3,
            name: 'Food 3',
            pic: 'http://loremflickr.com/1800/1800/Food',
            price: 15,
           },
           {id: 4,
            name: 'Food 3',
            pic: 'http://loremflickr.com/1800/1800/Food',
            price: 15,
           },
           {id: 5,
            name: 'Food 3',
            pic: 'http://loremflickr.com/1800/1800/Food',
            price: 15,
           },
           {id: 6,
            name: 'Food 3',
            pic: 'http://loremflickr.com/1800/1800/Food',
            price: 15,
           }
    ]

    const blogList = [
      {id: 1,
       name: 'Blog 1',
       pic: 'http://loremflickr.com/1800/1800/Food',
       price: 10,
      },
      {id: 2,
          name: 'Blog 2',
          pic: 'http://loremflickr.com/1800/1800/Food',
          price: 20,
      },
      {id: 3,
          name: 'Blog 3',
          pic: 'http://loremflickr.com/1800/1800/Food',
          price: 15,
         },
        
  ]


    return (
        <div>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          {foodList.map((image, index) => (
            <div key={index}>
            <img className={classes.image} src={image.pic} alt={image.alt} />
            </div>
          ))}
        </Carousel>

      <div>
      <p className='text-xl m-6 font-semibold text-center'>Our Menu</p>
          <p className='mx-8'>
          Menu paragraphs can help customers make informed choices about what to order, and can also help to promote certain dishes or ingredients. They are typically written in a concise and clear style, using language that is easy to understand and appealing to the reader.
          </p>
          <div className='my-8 mx-8 grid grid-cols-4 gap-3'>
          <Button variant="outlined">Kebab</Button>      
          <Button variant="outlined">Fast food</Button> 
          <Button variant="outlined">Meals</Button> 
          <Button variant="outlined">Drinks</Button>           
     
              </div>
          
          <div className='m-8 grid grid-cols-3 md:grid-cols-4 gap-3'>
          {foodList.map((eachitem) => 
            <div>
              <Food data={eachitem} key={eachitem.id}/>
            </div>
          )}
          </div>

      </div>

      <div>
        {/* Reviews */}
        <p className='text-xl m-8 font-semibold'>Reviews from our customer</p>
        <p className='mx-8'>
          Menu paragraphs can help customers make informed choices about what to order, and can also help to promote certain dishes or ingredients. They are typically written in a concise and clear style, using language that is easy to understand and appealing to the reader.
        </p>


      </div>

      <div>
      <p className='text-xl m-8 font-semibold'>Know more about Arabic Food</p>

          <Grid item xs={12} md={6}>    
          <div className='m-8'>
          {blogList.map((eachitem) => 
            <CardActionArea component="a" href="#" sx={{marginY: 4}}>
              <Card sx={{display: 'flex'}}>
      <CardMedia
        sx={{height: 140, flex: 1}}
        image={eachitem.pic}
        title="green iguana"
      />
      <CardContent sx={{flex: 2}}>
        <Typography gutterBottom variant="h5" component="div">
          {eachitem.name}
        </Typography>
        <div className='flex flex-row justify-between items-center'>
        <Typography variant="h8" color="text.secondary">
        In addition to describing individual dishes, menu paragraphs may also include information about the restaurant's
        </Typography>
        </div>
      </CardContent>
 
    </Card>
            </CardActionArea>
          )}
          </div>
          </Grid>

      </div>
          

      
        </div>
    );
}

export default Home;