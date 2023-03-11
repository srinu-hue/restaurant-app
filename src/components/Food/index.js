import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button, IconButton } from '@material-ui/core';
import CardActionArea from '@mui/material/CardActionArea';
import ButtonBase from '@material-ui/core/ButtonBase';

import { useNavigate } from 'react-router-dom';


const Food = (props) => {
    const {data, foodOnclick} = props

    const navigate = useNavigate()
    const handleEvent = (event) => {
      foodOnclick(event.currentTarget.id)
      navigate(`/food/${event.currentTarget.id}`)
    }

    return(
    <Card key={data.id} value={data.name} onClick={handleEvent} clickable={true} id={data.id}>
    <CardActionArea component="a" id={data.id} href="" >
        
      <CardMedia
        sx={{ height: 140 }}
        image={data.pic}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <div className='flex flex-row justify-between items-center'>
        <Typography variant="h6" color="text.secondary">
        £{data.price}
        </Typography>
        <IconButton>
        <ShoppingCartOutlinedIcon color='text.secondary'/>
        </IconButton>
        </div>
      </CardContent>
      </CardActionArea>
    </Card>
    )
}

export default Food
