import React from 'react';
import { Container, Typography } from '@mui/material';
import Footer from '../components/Footer'; 

const About = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
      About us
      </Typography>
      <img 
        src="https://scontent.fkun1-1.fna.fbcdn.net/v/t39.30808-6/447447230_18437500813013306_7576878337331217589_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2vYY9koS1hEQ7kNvgG9PFLf&_nc_ht=scontent.fkun1-1.fna&oh=00_AYAy8ggqjFaKCDWkvLnZKfFKXMjyIeBpvVl512Jdk0yZjw&oe=6681633C" 
        alt="Floristikos nuotrauka" 
        style={{ width: '100%', height: 'auto', marginBottom: '30px' }} 
      />
      <Typography variant="body1">
      Here is information about our floristry page. We offer a wide range 
      of flowers and professional floristic services. Our goal is to help you find the perfect flower for any occasion.
      </Typography>
      <Footer /> 
    </Container>
  );
};

export default About;