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
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import '../App.css';
import * as motion from "motion/react-client";
import dedupProject from './dedup.png';
import llmProject from './llm.jpeg';
import hmmProject from './hmm.png';
import splitProject from './bill.png';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ListItemIcon from '@mui/material/ListItemIcon';
function ProjectPage(){


return(
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
                <p>My Projects</p>

                </Typography>
<Stack direction="row" spacing={6} className="project-stack">

  <Card className="project-card"  elevation={10}>
      <CardMedia>
      <img src={dedupProject} alt="" className="project-img"/>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Data Deduplication Engine for Backup Storage
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       Developed a high-performance deduplication engine in Golang with a ReactJS frontend and MongoDB backend, achieving a 66.67% storage reduction by efficiently deduplicating over 100GB of simulated backup data.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href="https://github.com/radhika011/Dedup-Engine" target="_blank">
                                      GitHub Link
                                     </a></Button>

      </CardActions>
    </Card>



     <Card className="project-card"  elevation={10}>
          <CardMedia>
          <img src={llmProject} alt="" className="project-img"/>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Can LLMs Detect LLMs?
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           Developed a multi-class classification system using fine-tuned large language models in PyTorch to attribute text to its source LLM with 81% accuracy, supported by an ablation study analyzing 10+ linguistic features for improved precision.
            </Typography>
          </CardContent>

        </Card>


        <Card className="project-card"  elevation={10}>
          <CardMedia>
          <img src={hmmProject} alt="" className="project-img"/>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              HMM-Based Part-Of-Speech Tagger For Low-Resource Languages
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           Implemented a Hidden Markov Model (HMM) for Part-of-Speech (POS) tagging for low-resource languages incorporating
           calculations for starting, emission, and transition probabilities and implementing the Viterbi algorithm for tag assignment
           with an accuracy of 83%
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"><a href="https://github.com/radhika011/HMM_POSTagger" target="_blank"> GitHub Link</a></Button>

          </CardActions>
        </Card>

        <Card className="project-card"  elevation={10}>
      <CardMedia>
      <img src={splitProject} alt="" className="project-img"/>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Split It Easy: An Android App
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       Developed a secure Android app with Firebase integration, enabling users to create groups, manage trips and events, split bills, and calculate dues efficiently.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href="https://github.com/radhika011/Split_It_Easy" target="_blank">GitHub Link</a></Button>

      </CardActions>
    </Card>

</Stack>
        </Box>
                      </motion.div>


);


}
export default ProjectPage;