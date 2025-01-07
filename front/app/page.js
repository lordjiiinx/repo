'use client'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';

import IconButton from '@mui/material/IconButton';

import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';



function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));



HideOnScroll.propTypes = {
  children: PropTypes.element,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};




export default function HideAppBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props} >
        
        <AppBar component='div' className='bg-purple'  color='transparent'>
          
          <Toolbar>
            <Typography  variant="h6" component="div" className='w-full flex grid grid-cols-4'>
            <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ mr: 4 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 28, height: 28 }}></Avatar>
          </IconButton>
        </Tooltip>
    
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 28,
                height: 28,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'flex',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
</Menu>

            <Box component='div' className=' w-full ml-16 flex justify-items-center col-span-3'>
              <Item className='md:mx-8 '>home</Item>
              <Item className='md:mx-8 sm:ml-2'>sermon</Item>
              <Item className='md:mx-8 sm:mx-2' >projects</Item>
              <Item className='md:mx-8 sm:mr-3'>groups info.</Item>

            </Box>
            
            </Typography>
          </Toolbar>
        </AppBar>
        
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box 
        component='div'
        className='bg-tahiti'
        sx={{ my: 1 }}>
# ~/.profile: executed by the command interpreter for login shells.
# This file is not read by bash(1), if ~/.bash_profile or ~/.bash_login
# exists.
# see /usr/share/doc/bash/examples/startup-files for examples.
# the files are located in the bash-doc package.

# the default umask is set in /etc/profile; for setting the umask
# for ssh logins, install and configure the libpam-umask package.
#umask 022

# if running bash
if [ -n "$BASH_VERSION" ]; then
    # include .bashrc if it exists
    if [ -f "$HOME/.bashrc" ]; then
	. "$HOME/.bashrc"
    fi
fi

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/bin" ] ; then
    PATH="$HOME/bin:$PATH"
fi

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/.local/bin" ] ; then
    PATH="$HOME/.local/bin:$PATH"
fiADVERTISEMENT OF OPPORTUNITIES FOR
2025 COHORT OF YOUNG STATISTICIANS
The Kenya National Bureau of Statistics (KNBS) is a corporate body established
under the Statistics Act (2006). It is the principal Government agency responsible
for the collection, compilation, analysis, publication and dissemination of official
statistical information and its custody. It also oversees the coordination,
supervision and development of programmes within the National Statistical System
(NSS).
The KNBS invites applications from suitably qualified individuals to fill the
following positions for the 2025 Cohort of Young Statisticians Programme: -
Opportunity Title:Young Statistician
Ref:KNBS/YS-2025/1/2024
Number of Positions:Ten (10)
Terms of Service:Temporary (12 months)
Job Purpose: A Young Statistician at this level will work under Supervisors and
Mentors to guide him/her in the performance of duties and responsibilities
Duties and responsibilities
i.
ii.
iii.
iv.
Learning and improving on statistical programming skills including as R and
Python to enhance production of statistical data;
Assisting in the development of statistical and machine learning models in
support of various domains of statistics;
Participating in the development of new approaches of getting insights and
managing data within various real-time and open-source data, such as social
media, incident tracking databases, geospatial data, etc;
Working in collaboration with stakeholders on projects to develop
applications to address emerging areas of official statistics
1v.
Performing other related duties as may be assigned.
Requirements for Appointment
i.
ii.
iii.
Must be a Kenyan citizen;
Must have attained a Bachelor’s Degree in Statistics, Mathematics, Data
Science, Computer Science, Software Engineering, Geospatial/ Geographic
Information Systems or related qualifications from a recognized institution;
Proficiency in using R or Python programming languages ;
The opportunities are in four categories namely: Software Engineering, Data
Science, Data Management and Geospatial Technology.
Added Advantage
Applicants with the following additional qualifications will have an added
advantage:
i.For Software Engineering Category
a. Full Stack Development experience with focus on Web Applications /
Web Development;
b. Front-End Development expertise:
 HTML
 JavaScript and/or TypeScript
c. Experience with at least one of the following frameworks/libraries:
 NextJS
 D3JS
 ThreeJS
ii.For Data Science Category
a. Proficiency in artificial intelligent (AI) and Machine Learning
b. Experience with data manipulation and analysis libraries:
 Pandas
 NumPy
 Scikit-learn
c. Proficiency in SQL for data querying and manipulation
d. Experience with at least one of the following data visualization tools:
 Matplotlib
 Seaborn
 Plotly
iii.For Data Management Category
2a. Proficiency in data management;
b. Experience with at least two of the following database systems:
 PostgreSQL
 MySQL
 Microsoft SQL Server
c. Familiarity with data management tools:
 Database administration tools
 Extract, Transform, Load (ETL) tools
 Data quality tools
iv.
For Geospatial Technology Category
a. Familiarity with Geographical Information System (GIS) and remote
sensing tools to generate data specific to a location or geography;
b. Familiarity with QGIS software;
c. Experience in geospatial programming using Python programming
language;
Successful candidates shall be required to obtain the following:
i. Register with Social Health Authority (SHA) for the duration of the
programme;
ii. Register with the National Social Security Fund (NSSF);
iii. A valid Certificate of Good Conduct from the Directorate of Criminal
Investigation;
iv. Register with Kenya Revenue Authority (KRA)
Instructions to Applicants:
i. Applicants should fill and submit the online employment application form
https://www.knbs.or.ke/internships
ii. Applications must be received not later than 5.00p.m on 16th December,
2024.
KENYA NATIONAL BUREAU OF STATISTICS IS AN EQUAL OPPORTUNITY
EMPLOYER.
THE MARGINALISED AND THE MINORITIES ARE ENCOURAGED TO APPLY.
DIRECTOR GENERAL
3
<div className='bg-custom '>
  <p>
  ADVERTISEMENT OF OPPORTUNITIES FOR
2025 COHORT OF YOUNG STATISTICIANS
The Kenya National Bureau of Statistics (KNBS) is a corporate body established
under the Statistics Act (2006). It is the principal Government agency responsible
for the collection, compilation, analysis, publication and dissemination of official
statistical information and its custody. It also oversees the coordination,
supervision and development of programmes within the National Statistical System
(NSS).
The KNBS invites applications from suitably qualified individuals to fill the
following positions for the 2025 Cohort of Young Statisticians Programme: -
Opportunity Title:Young Statistician
Ref:KNBS/YS-2025/1/2024
Number of Positions:Ten (10)
Terms of Service:Temporary (12 months)
Job Purpose: A Young Statistician at this level will work under Supervisors and
Mentors to guide him/her in the performance of duties and responsibilities
Duties and responsibilities
i.
ii.
iii.
iv.
Learning and improving on statistical programming skills including as R and
Python to enhance production of statistical data;
Assisting in the development of statistical and machine learning models in
support of various domains of statistics;
Participating in the development of new approaches of getting insights and
managing data within various real-time and open-source data, such as social
media, incident tracking databases, geospatial data, etc;
Working in collaboration with stakeholders on projects to develop
applications to address emerging areas of official statistics
1v.
Performing other related duties as may be assigned.
Requirements for Appointment
i.
ii.
iii.
Must be a Kenyan citizen;
Must have attained a Bachelor’s Degree in Statistics, Mathematics, Data
Science, Computer Science, Software Engineering, Geospatial/ Geographic
Information Systems or related qualifications from a recognized institution;
Proficiency in using R or Python programming languages ;
The opportunities are in four categories namely: Software Engineering, Data
Science, Data Management and Geospatial Technology.
Added Advantage
Applicants with the following additional qualifications will have an added
advantage:
i.For Software Engineering Category
a. Full Stack Development experience with focus on Web Applications /
Web Development;
b. Front-End Development expertise:
 HTML
 JavaScript and/or TypeScript
c. Experience with at least one of the following frameworks/libraries:
 NextJS
 D3JS
 ThreeJS
ii.For Data Science Category
a. Proficiency in artificial intelligent (AI) and Machine Learning
b. Experience with data manipulation and analysis libraries:
 Pandas
 NumPy
 Scikit-learn
c. Proficiency in SQL for data querying and manipulation
d. Experience with at least one of the following data visualization tools:
 Matplotlib
 Seaborn
 Plotly
iii.For Data Management Category
2a. Proficiency in data management;
b. Experience with at least two of the following database systems:
 PostgreSQL
 MySQL
 Microsoft SQL Server
c. Familiarity with data management tools:
 Database administration tools
 Extract, Transform, Load (ETL) tools
 Data quality tools
iv.
For Geospatial Technology Category
a. Familiarity with Geographical Information System (GIS) and remote
sensing tools to generate data specific to a location or geography;
b. Familiarity with QGIS software;
c. Experience in geospatial programming using Python programming
language;
Successful candidates shall be required to obtain the following:
i. Register with Social Health Authority (SHA) for the duration of the
programme;
ii. Register with the National Social Security Fund (NSSF);
iii. A valid Certificate of Good Conduct from the Directorate of Criminal
Investigation;
iv. Register with Kenya Revenue Authority (KRA)
Instructions to Applicants:
i. Applicants should fill and submit the online employment application form
https://www.knbs.or.ke/internships
ii. Applications must be received not later than 5.00p.m on 16th December,
2024.
KENYA NATIONAL BUREAU OF STATISTICS IS AN EQUAL OPPORTUNITY
EMPLOYER.
THE MARGINALISED AND THE MINORITIES ARE ENCOURAGED TO APPLY.
DIRECTOR GENERAL
3
  </p>
</div>
          
        </Box>
      </Container>
    </React.Fragment>
  );
}
