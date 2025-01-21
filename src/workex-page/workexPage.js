import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import InboxIcon from '@mui/icons-material/Inbox';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import '../App.css';
import * as motion from "motion/react-client";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import LaptopMacIcon from '@mui/icons-material/LaptopMac';



export default function WorkExPage() {
  return (
  <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                          duration: 0.4,
                          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                      }}

                  >
                <Box component="main" className="experience-box">
                 <Typography className="bungee-tint-regular" variant="h3"
                                                                     component="div" >
                        <p>My Work Experience </p>

                        </Typography>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
        <p>
        October 2024 - Present <br/>
         Champaign, IL
        </p>

        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
           <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h5" component="span">
            University of Illinois, Urbana - Champaign
          </Typography>

          <Typography>
          <List>
          <Typography variant="h6" component="span">
                                                    Full-Stack Software Engineer
                                                  </Typography>
          <ListItem>
           <ListItemIcon>
                          <KeyboardArrowRightRoundedIcon/>
                        </ListItemIcon>
          Improving the user interface of an AI diagnostic tool by refactoring plain HTML/CSS/JavaScript into ReactJS components &
                      implementing effective state management</ListItem>
                      <ListItem>
                       <ListItemIcon>
                                                <KeyboardArrowRightRoundedIcon/>
                                              </ListItemIcon>
             Expanding SpringBoot API and MySQL database to take additional features around the level of emergency and locale codes to
                      serve the application in other languages and streamlining the ML pipeline to increase efficiency</ListItem>

                      </List>

                      </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
        <p>
          July 2023 - June 2024 <br/>
          Pune, India
          </p>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h5" component="span">
            Citigroup
          </Typography>

          <Typography>
          <Typography variant="h6" component="span">
                               Software Development Engineer - 1
                              </Typography>
           <List>
                    <ListItem>
                     <ListItemIcon>
                                    <KeyboardArrowRightRoundedIcon/>
                                  </ListItemIcon>
                   Developed 20+ consumer-ready REST API endpoints using Flask to achieve summarization of SonarQube reports across
                   500+ organization-wide projects reducing the time required for code quality report reviews from 60 to 3 minutes per report</ListItem>
                                <ListItem>
                                 <ListItemIcon>
                                                          <KeyboardArrowRightRoundedIcon/>
                                                        </ListItemIcon>
                      Designed and implemented a user-friendly ReactJS frontend using custom components including a live dashboard to
                      visualize key metrics like code coverage, technical debt, and the number of issues, resulting in a 50% decrease in developer
                      support requests received by the DevOps team</ListItem>
                     <ListItem>
                                                     <ListItemIcon>
                                                                              <KeyboardArrowRightRoundedIcon/>
                                                                            </ListItemIcon>
                                         Led the integration of MongoDB with the Flask API to manage and store user preferences using PyMongo for data retrieval</ListItem>



                                </List>



          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
       <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
              <p>
                May 2022 - July 2022<br/>
                Pune, India
                </p>
              </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
           <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
    <TimelineContent sx={{ py: '12px', px: 2 }}>
             <Typography variant="h5" component="span">
               Citigroup
             </Typography>

             <Typography>
             <Typography variant="h6" component="span">
                                   Software Development Enginner Intern
                                 </Typography>
              <List>
                       <ListItem>
                        <ListItemIcon>
                                       <KeyboardArrowRightRoundedIcon/>
                                     </ListItemIcon>
                    Pioneered an object-oriented, reusable KYC data quality validation framework leveraging PySpark using custom validation
                    rules tailored to specific data requirements. This framework reduced the time required for row and column validation of
                    100K+ records occurring before migration from OLTP (Oracle DB) to OLAP (Hive) by 92%</ListItem>
                                   <ListItem>
                                    <ListItemIcon>
                                                             <KeyboardArrowRightRoundedIcon/>
                                                           </ListItemIcon>
                       Engineered a shell script to automate the periodic triggering of the framework module on a weekly basis, enhancing process
                       automation and streamlining the validation process</ListItem>
                        <ListItem>
                                                        <ListItemIcon>
                                                                                 <KeyboardArrowRightRoundedIcon/>
                                                                               </ListItemIcon>
                                           Formulated an HTML email reporting framework in Python to report the results of validation in a user-friendly format to
                                           developers, database administrators and project managers</ListItem>



                                   </List>



             </Typography>
           </TimelineContent>
      </TimelineItem>

    </Timeline>
    </Box>
                  </motion.div>
  );
}