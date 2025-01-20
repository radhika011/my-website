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
import Card from '@mui/material/Card';
import uiucImage from './uiuc.png';
import cumminsImage from './cummins.jpg'
import Stack from '@mui/material/Stack';
import '../App.css';
import * as motion from "motion/react-client";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ListItemIcon from '@mui/material/ListItemIcon';
function EducationPage(){

return ( <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                  duration: 0.4,
                                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                              }}

                          >
                        <Box component="main" className="experience-box">
                         <Typography className="bungee-tint-regular" variant="h6"
                                                                             component="div" >
                                <p>My Education</p>

                                </Typography>
                                <Stack>
                            <Card className="education-card" elevation={10}  >
                            <img src={uiucImage} alt="uiuc"/>
                            <Stack>
                             <Typography variant="h5" component="span">
                                           University of Illinois, Urbana - Champaign
                                         </Typography>
                       <Typography variant="h6" component="span">
                                                               Master's of Computer Science (MCS)
                                                              </Typography>
                        <p>
                        August 2024 - December 2025 (Expected)
                        </p>
                        <p>
                          GPA: 4.0/4.0
                        </p>
                        <p>
                          Relevant Coursework:
                          <List>
                          <ListItem>
                          <ListItemIcon>
                                <StarRoundedIcon/>
                              </ListItemIcon>
                          Advanced Topics in Natural Language Processing

                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <StarRoundedIcon/>
                            </ListItemIcon>
                            Applied Machine Learning

                            </ListItem>
                            <ListItem>
                            <ListItemIcon>
                              <StarRoundedIcon/>
                            </ListItemIcon>
                              Introduction to Bioinformatics

                              </ListItem>


                          </List>
                        </p>
</Stack>

                            </Card>
                            <Card className="education-card" elevation={10}>
                                <img src={cumminsImage} alt="cummins"/>
                                <Stack>
                                 <Typography variant="h5" component="span">
                               MKSSS’s Cummins College of Engineering for Women, Pune, India
                                             </Typography>
                           <Typography variant="h6" component="span">
                                                                   Bachelor's of Technology (B. Tech.) in Computer Engineering
                                                                  </Typography>
                            <p>
                            August 2019 - June 2023
                            </p>
                            <p>
                              GPA: 9.69/10.0
                            </p>
                               <p>
                              Relevant Coursework:
                              <List>
                              <ListItem>
                              <ListItemIcon>
                                    <StarRoundedIcon/>
                                  </ListItemIcon>

                        CS Fundamentals: Data Structures and Algorithms, Operating Systems, Computer Networks
                              </ListItem>
                              <ListItem>
                                <ListItemIcon>
                                  <StarRoundedIcon/>
                                </ListItemIcon>
                                Database Management Systems, Data Mining and Data Warehousing

                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                  <StarRoundedIcon/>
                                </ListItemIcon>

                                  Deep Learning, Artificial Intelligence and Machine Learning
                                  </ListItem>


                              </List>
                            </p>
                            </Stack>

                                                        </Card>
                            </Stack>
            </Box>
                          </motion.div>);



}
export default EducationPage;
//https://police.illinois.edu/campustown-residents-reminded-of-safety-during-fall-break/
//https://cumminscollege.org/lander