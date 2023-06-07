import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';

export default function Header() {
  return (
    <Box className='Header' component="nav" aria-label="My site" sx={{ flexGrow: 1, paddingY: 1 }}>
      <List role="menubar" orientation="horizontal">
        <ListItem role="none" className='home-button'>
          <ListItemButton
            color='none'
            role="menuitem"
            component="a"
            href="/movie-tickets-react"
            aria-label="Home"
          >
            <Home className='home-button-icon' color='white' />
          </ListItemButton>
        </ListItem>
        <ListItem role="none" sx={{marginInlineStart: 'auto'}}>
        <Box sx={{ color: 'white', fontSize: 24 }}>
            Movies and TV shows
        </Box>
        </ListItem>
        <ListItem role="none" sx={{ marginInlineStart: 'auto' }} className='profile-button'>
          <ListItemButton
            color='none'
            role="menuitem"
            component="a"
            href="#"
            aria-label="Profile"
          >
            <Person className='profile-button-icon' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}