"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Link from "next/link"
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const firstListItems = [
    { text: 'About', icon: <InfoIcon /> },
    { text: 'Education', icon: <SchoolIcon /> },
    { text: 'Certifications', icon: <EmojiEventsIcon /> },
    { text: 'Projects', icon: <AccountTreeIcon /> },
    ];

    const secondListItems = [
    { text: 'Blog', icon: <ModeEditOutlineIcon />, link: "/blog"},
    { text: 'Home', icon: <InboxIcon />, link: "/" },
    ];


  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
  {firstListItems.map(({ text, icon }) => (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>
<Divider />
<List>
  {secondListItems.map(({ text, icon, link }) => (
    <ListItem key={text} disablePadding>
      {link ? (
        <Link href={link} passHref>
          <ListItemButton component="a">
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </Link>
      ) : (
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      )}
    </ListItem>
  ))}
</List>


    </Box>
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={toggleDrawer(true)}><MenuIcon /></IconButton>
      </div>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}