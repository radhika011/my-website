import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from './workinggirl.gif';
import '../App.css';
import * as motion from "motion/react-client";


function AboutPage(){

return (<motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}

                >
              <Box component="main" className="about-box">
        <Typography className="bungee-tint-regular" variant="h6"
                                                     component="div" >
        <p>Hello! I am Radhika Wadekar, a Software Engineer. </p>
        <p>Welcome to my website!</p>
        </Typography>
        <img src={logo} alt="loading..." />
              </Box>
              </motion.div>);



}
export default AboutPage;