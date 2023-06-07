import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export default function MediaCard(props) {

  function handleClick(e) {
    e.preventDefault();
    props.toggle(props.id);
  }

  return (
    <Card sx={{ maxWidth: 250, minWidth: 200 , backgroundColor: '#DDE6ED' }} className='card'>
      <CardMedia
        sx={{ height: 300 }}
        image={props.image}
        title={props.name}
      />
      <CardContent sx={{ padding: 0 }}>
        <div className='movie-title'>
          {props.name}
        </div>
        <div className='movie-genres'>
          {props.genres[0]}
        </div>
        <div className='movie-details'>
          <p>{props.language}</p><p>Rating: {props.rating.average ? props.rating.average : "N/A"}</p>
        </div>
      </CardContent>
      <CardActions className='view-summary-button'>
        <Button size="small" onClick={handleClick}>View Summary</Button>
      </CardActions>
    </Card>
  );
}
