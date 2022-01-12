import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Tstimonials = ({Tastimonal}) => {
    const {name, img, dis, country}  = Tastimonal;
    return (
     <Box>
        <Box>
        <Card sx={{ minWidth: 275, }}>
        <CardContent  sx={{ m:5 }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {dis}
          </Typography>
        </CardContent>
        <CardActions>
           <img src={img} alt="" /> 
          <Typography variant='h5'  sx={{ color: 'success.main', fontWeight: 'bold', m:2}}>
             {name} <br /> <span style={{ fontSize: '15px', color:'black', m: 1 }}>{country}</span>
          </Typography> 
        </CardActions>
      </Card>
        </Box>
     </Box>
    );
};

export default Tstimonials;


