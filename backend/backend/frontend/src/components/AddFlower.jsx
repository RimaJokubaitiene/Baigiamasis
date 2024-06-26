// import React, { useState } from 'react';
// import axios from 'axios';
// import { TextField, Button, Container, Typography } from '@mui/material';

// const AddFlower = () => {
//     const [name, setName] = useState('');
//     const [composition, setComposition] = useState('');
//     const [price, setPrice] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:5000/api/flowers', { name, composition, price })
//             .then(response => {
//                 console.log('Flower added:', response.data);
//                 setName('');
//                 setComposition('');
//                 setPrice('');
//             })
//             .catch(error => console.error('Error adding flower:', error));
//     };

//     return (
//         <Container>
//             <Typography variant="h4" component="h1" gutterBottom>
//                 Add Flower
//             </Typography>
//             <form onSubmit={handleSubmit}>
//                 <TextField
//                     label="Name"
//                     fullWidth
//                     margin="normal"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <TextField
//                     label="Composition"
//                     fullWidth
//                     margin="normal"
//                     value={composition}
//                     onChange={(e) => setComposition(e.target.value)}
//                 />
//                 <TextField
//                     label="Price"
//                     fullWidth
//                     margin="normal"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                 />
//                 <Button variant="contained" composition="primary" type="submit" style={{ marginTop: '16px' }}>
//                     Add Flower
//                 </Button>
//             </form>
//         </Container>
//     );
// };

// export default AddFlower;

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

const AddFlower = () => {
    const [name, setName] = useState('');
    const [composition, setComposition] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');  

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://http://localhost:3000', { name, composition, price, imageUrl })  
            .then(response => {
                console.log('Flower added:', response.data);
                setName('');
                setComposition('');
                setPrice('');
                setImageUrl('');  
            })
            .catch(error => console.error('Error adding flower:', error));
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Add Flower
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label="Composition"
                    fullWidth
                    margin="normal"
                    value={composition}
                    onChange={(e) => setComposition(e.target.value)}
                />
                <TextField
                    label="Price"
                    fullWidth
                    margin="normal"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <TextField
                    label="Image URL"  // Pridedame naują laukelį nuotraukos URL
                    fullWidth
                    margin="normal"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <Button variant="contained" color="primary" type="submit" style={{ marginTop: '16px' }}>
                    Add Flower
                </Button>
            </form>
        </Container>
    );
};

export default AddFlower;