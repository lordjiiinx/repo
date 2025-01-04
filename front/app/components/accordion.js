'use client'
import React, { useActionState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


import { Button } from '@mui/material';

import axios from 'axios'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function Groups() {

  
 const [department, setdepartment] =useState(
 {
 name : '',
 }
 );
 const [id, setid] =useState(
  {
    event : null
  }
  );
 const [value, setvalue] =useState(
  {
  dep : false,
  dep2 : false,
  dep3 : false,
  }
  );
 
  return (
    <div>
    <Accordion>
    <AccordionSummary
      
      aria-controls="panel1-content"
      id="panel1-header"
      onClick={()=>{
        setdepartment({
          name : 'choir'
        })
        
        setvalue({
            dep : true,
            dep2 : false,
            dep3: false
        })
        
      }}
      
    >
      <Typography >choir</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      {value.dep==true?<div>
        <Box
      
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey',
            borderRadius: '20px'
       }}
    >
      <Typography>
       {id.event?id.event.map((single)=>{
        return(
          <div className='grid grid-cols-4' key={single.id}>
            <div>
              {single.event}
            </div>

          </div>
        )
       }):null

       }
      </Typography>
      
    </Box>

      </div>
      
      :
      
      <div>
          hello welcome to choir click on below button to join choir group.
          <form onSubmit={(e)=>{
           e.preventDefault()
           
          
          }}>
          
          <Button type='submit'>join</Button>



          </form>
        </div>

      }
        
       
      </Typography>
    </AccordionDetails>
    </Accordion>
    <Accordion>
    <AccordionSummary
      
      aria-controls="panel2-content"
      id="panel2-header"
       onClick={()=>{
        setdepartment({
          name : 'instruments'
        })

        setvalue({
            dep2 : true,
            dep: false,
            dep3 : false

        })
        
      }}
    >
      <Typography>Instruments</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      {value.dep2==true?<div>
        <Box
      
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey',
            borderRadius: '20px'
       }}
    >
      <Typography>
      {id.event?id.event.map((single)=>{
        return(
          <div className='grid grid-cols-4' key={single.id}>
            <div>
              {single.event}
            </div>

          </div>
        )
       }):null

       }
      </Typography>
      
    </Box>

      </div>
      
      :
      
      <div>
          hello welcome to instruments click on below button to join instruments group.
          <form onSubmit={(e)=>{
           e.preventDefault()
           
          
          }}>
          
          <Button type='submit'>join</Button>



          </form>
        </div>

      }
      </Typography>
    </AccordionDetails>
    </Accordion>
    <Accordion>
    <AccordionSummary
      
      aria-controls="panel2-content"
      id="panel2-header"
      onClick={()=>{
        setdepartment({
          name : 'usher'
        })
        setvalue({
            dep : false,
            dep2 : false,
            dep3 :true
        })
      }}
      
    >
      <Typography>Usher</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
      {value.dep3==true?<div>  <Box
      
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey',
            borderRadius: '20px'
       }}
    >
      <Typography>
      {id.event?id.event.map((single)=>{
        
        
      
        return(
          
               <TableContainer component={Paper}>
                   <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                      
                      <TableCell align='left'>event </TableCell>
                      
                      <TableCell align='right'>date</TableCell>
                     
                    </TableRow>
                     </TableHead>
                 <TableBody>
                 <TableRow
                 key={single.id}
                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
               >
                 <TableCell align='left' component="th" scope="row">
                   {single.event}
                 </TableCell>
                 
               
                 <TableCell align='right'>{single.date}</TableCell>
                 
               </TableRow>
                   
   
                 </TableBody>
                 </Table>
                 </TableContainer>
              
           
        )
       }):null

       }
      </Typography>
      
    </Box> </div>
      
      :
      
      <div>
          hello welcome to usher click on below button to join usher group.
          <form onSubmit={(e)=>{
           e.preventDefault()
           
          
          }}>
          
          <Button type='submit'>join</Button>



          </form>
        </div>

      }
      </Typography>
    </AccordionDetails>
    </Accordion>
    </div>
  )
}

export default Groups

