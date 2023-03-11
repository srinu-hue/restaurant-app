
import React, { useState } from 'react';
import { Grid, Box, Container, Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import { red } from '@mui/material/colors';

import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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

function FoodItem() {
    const [items, setItems] = useState(0)
    
    const {id} = useParams()
    let num = id

    const navigate = useNavigate();

    const foodId = foodList.find(eachitem => eachitem.id == num)
    
    console.log(foodId.name)

    {items < 0 && setItems(0)}


    return(
        foodId ?
            <Container className='pt-20' maxWidth="md" >
            <Grid container spacing={2} component="main" maxWidth="sm" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', mt: 4, mb: 2 }}>
                <Grid xs={5}>
                <CardMedia
                    component="img"
                    image="https://images.unsplash.com/photo-1612392062798-4117917fcc50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="green iguana"
                    />
                </Grid>
                
                <Grid xs={7} className='pl-10'>   
                <Typography variant="h4" component="h4" gutterBottom>
                    {foodId.name}
                </Typography>
                <Typography variant="h5" color='textSecondary' component="h5" gutterBottom sx={{ mb: 2 }}>
                    £{foodId.price}
                </Typography>
                {/* <Button onClick={() => navigate('/cart')} variant="contained" color="secondary">Login</Button> */}

                <Grid container spacing={5} sx={{paddingTop: 10}} gutterTop>
                <Button onClick={() => setItems(items - 1)}  xs={1} variant="outlined" color="secondary">
                    <RemoveIcon fontSize="inherit" />
                </Button>
                <Typography xs={1} className='px-3' variant="h5" xs={2} color='textSecondary' component="h5" gutterBottom>
                    {items}
                </Typography>
                <Button onClick={() => setItems(items + 1)} variant="outlined" xs={1} color="secondary">
                    <AddIcon fontSize="inherit" />
                </Button>
                </Grid>
                
                </Grid> 
                </Grid>
                <Typography  variant="h6" component="h2" gutterBottom className='pt-20'>
                    {'Pin a footer to the bottom of the viewport.'}
                    {'The footer will move as the main element of the page grows.'}
                    </Typography>
            </Container> : null)
        
}

export default FoodItem;