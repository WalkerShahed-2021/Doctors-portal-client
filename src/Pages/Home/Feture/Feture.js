import React from 'react';
import feture from '../../../images/treatment.png';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';




const Feture = () => {
    return (
       <Container>
            <Grid container rowSpacing={1} sx={{ m: 2 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <img style={{width: '50%'}} src={feture} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h4" component="div" gutterBottom>
            Exceptional Dental <br />
            Care, on Your terms
        </Typography>
        <Typography variant="body2" component="div" gutterBottom>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam earum adipisci reiciendis praesentium, fuga est culpa laudantium nihil. Mollitia ab iusto eveniet hic inventore repudiandae officia impedit necessitatibus officiis placeat nihil repellat, facere aut doloremque in voluptate ipsa maiores suscipit. Doloribus optio perferendis suscipit? Quis quae eaque accusantium error neque!
        </Typography>
        </Grid>
      </Grid>
       </Container>
    );
};

export default Feture;