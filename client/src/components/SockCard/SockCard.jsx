import './SockCard.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'

export default function SockCard(props) {
  return (
    <div className='cards'>
    <Link to={`/socks/${props._id}`}>
    <Grid container 
    spacing={0}
    direction="row"
    alignItems="center"
    justifyContent="center"
    >
    <Grid item key={props._id}>
        <Card sx={{
          maxWidth: 260,
          display: 'inline-block',
          margin: '20px'
        }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={props.imgURL}
          alt="sock image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          {props.name}
          </Typography>
          <Typography variant="body1" color="black" textDecoration="none">
          ${props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
        </Grid>
        </Grid>
      </Link>
      </div>
  )
}
