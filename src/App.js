import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AboutPage from './about-page/aboutPage';
import WorkExPage from './workex-page/workexPage';
import EducationPage from './education-page/educationPage';
import ProjectPage from './project-page/projectPage';
import ContactPage from './contact-page/contactPage';
const drawerWidth = 240;

const navItems = [
  { name: 'About', path: '/my-website' },
  { name: 'Work Experience', path: '/experience' },
  { name: 'Education', path: '/education' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Me!', path: '/contact' },
];

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="page-container">
      <CssBaseline />

      <AppBar component="nav" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Radhika Wadekar
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{ color: '#fff' }}
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>


      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton onClick={() => navigate(item.path)}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>



        <Toolbar />
        <Routes>
          <Route path="/my-website" element={<AboutPage />} />
          <Route path="/experience" element={<WorkExPage />} />
          <Route path="/education" element={<EducationPage/>}/>
           <Route path="/projects" element={<ProjectPage/>}/>
           <Route path="/contact" element={<ContactPage/>}/>
        </Routes>

    </Box>
  );
}

App.propTypes = {
  window: PropTypes.func,
};

export default App;
