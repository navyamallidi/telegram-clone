import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Img from "../assets/noprofile.png"
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const menuItems = [
    { text: 'New Group', icon: <PeopleAltOutlinedIcon /> },
    { text: 'New Channel', icon: <VolumeUpOutlinedIcon /> },
    { text: 'Contacts', icon: <PersonOutlineOutlinedIcon /> },
    { text: 'Calls', icon: <PhoneOutlinedIcon /> },
    { text: 'Saved Messages', icon: <BookmarkBorderOutlinedIcon /> },
    { text: 'Settings', icon: <SettingsOutlinedIcon /> },
    { text: 'Night Mode', icon: <NightlightOutlinedIcon /> }
  ];

  const handleItemClick = (text:string) => {
    console.log(text)
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className='w-full h-20'>
      <img 
      src={Img}
      className='w-10 h-10 rounded-full mt-5 ml-7'
      />
      <div className='mt-2 ml-7 text-sm'>
        status
      </div>
      </div>
      <Divider />
      <List>
      {menuItems.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton onClick={() => handleItemClick(item.text)}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuIcon/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
