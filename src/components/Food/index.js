import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button, IconButton } from '@material-ui/core';

import { useNavigate } from 'react-router-dom';

const Food = (props) => {
    const {data} = props

    const navigate = useNavigate()
    console.log(data)

    const handleEvent = (e) => {
        console.log(e.target.value)
    }

    return(
        <button id={data.id} onClick={handleEvent}>
    <Card value={data.name}>
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
      <CardActions>

      </CardActions>
    </Card>
        </button>
    )
}

export default Food