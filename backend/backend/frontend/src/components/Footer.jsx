import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <Box 
            component="footer" 
            sx={{ 
                py: 3, 
                px: 2, 
                mt: 'auto', 
                backgroundColor: '', 
                textAlign: 'center'
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="body1">
                    © 2024 Trys Pievos. 2024.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;