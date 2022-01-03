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
    <Link className="card" to={`/socks/${props._id}`}>
    <Grid container 
    spacing={0}
    direction="row"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}
    >
    <Grid item key={props._id}>
        <Card sx={{
          maxWidth: 240,
          display: 'inline-block',
            margin: '0',
          border: 'green'
        }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={props.imgURL}
          alt="sock image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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
  )
}
