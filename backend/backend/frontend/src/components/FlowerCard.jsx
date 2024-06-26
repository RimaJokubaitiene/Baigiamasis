import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const FlowerCard = ({ name, composition, price, imageUrl, onEdit, onDelete }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                alt={name}
                height="250"
                image={imageUrl}
                title={name}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {composition}
                </Typography>
                <Typography variant="h6" component="div">
                    ${price}
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={onEdit} 
                    style={{ marginRight: '10px', marginTop: '10px' }}
                >
                    Redaguoti
                </Button>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={onDelete} 
                    style={{ marginTop: '10px' }}
                >
                    Ištrinti
                </Button>
            </CardContent>
        </Card>
    );
};

export default FlowerCard;