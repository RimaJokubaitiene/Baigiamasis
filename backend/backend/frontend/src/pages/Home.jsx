import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Footer from '../components/Footer';
import FlowerCard from '../components/FlowerCard'; 

const flowers = [
    {
        name: "Spring",
        composition: "Tulip, Daffodil, Hyacinth",
        price: "25",
        imageUrl: "https://scontent.fvno7-1.fna.fbcdn.net/v/t39.30808-6/431448141_954474576123335_6590060141717506848_n.jpg?stp=dst-jpg_p480x480&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7BnqGCMj6XEQ7kNvgHPlMlL&_nc_ht=scontent.fvno7-1.fna&oh=00_AYC8o56em6uKUog268vkN7Qg1ycGT6P7bqyWSzUedwQZMQ&oe=6681A72A"
    },
    {
        name: "Summer",
        composition: "Sunflower, Daisy, Rose",
        price: "45",
        imageUrl: "https://scontent.fvno7-1.fna.fbcdn.net/v/t39.30808-6/440971387_983839896520136_8514579763898248115_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=A7pCb_qRzgkQ7kNvgH83Ns1&_nc_ht=scontent.fvno7-1.fna&oh=00_AYAomivFYMkPmPiCfvGExPIMMW1C4qt9UclYTNB_8DV3gw&oe=6681A68D"
    },
    {
        name: "Sunset",
        composition: "Sunflower, Daisy, Rose",
        price: "30",
        imageUrl: "https://scontent.fvno7-1.fna.fbcdn.net/v/t39.30808-6/436346870_993684012202391_4897995239956274802_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5CdZ_PrcN7cQ7kNvgHre2NB&_nc_ht=scontent.fvno7-1.fna&oh=00_AYAesAVXaYv0htz1AL_gk0CTp93kZw3zi0JxEkP0QfUkzw&oe=6681C9EC"
    },
    
];

const Home = () => {
    return (
        <Container>
            <Typography variant="h3" component="h1" gutterBottom>
                Welcome to the Floristry page "Trys pievos"
            </Typography>
            <img 
                src="https://scontent.fkun1-2.fna.fbcdn.net/v/t39.30808-6/448037804_18438877471013306_1548450009378709597_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aKBo1yMNiNEQ7kNvgFHKoUX&_nc_ht=scontent.fkun1-2.fna&oh=00_AYBDcS6I13xb_JKUSSgzYfkoq4hjrzjjKziQEOSqaPaxpA&oe=668164AF" 
                alt="Floristikos nuotrauka" 
                style={{ width: '100%', height: 'auto', marginBottom: '30px' }} 
            />
            <Typography variant="h6" component="h4" gutterBottom>
                Flowers cards
            </Typography>
            <Grid container spacing={3}>
                {flowers.map((flower, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <FlowerCard 
                            name={flower.name}
                            composition={flower.composition}
                            price={flower.price}
                            imageUrl={flower.imageUrl}
                        />
                    </Grid>
                ))}
            </Grid>
            <Footer /> 
        </Container>
    );
};

export default Home;






