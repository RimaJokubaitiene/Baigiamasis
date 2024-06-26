const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());

const mongoUri = 'mongodb+srv://rimaskucaite:ESMNVHxpAK3zImVW@cluster0.dwckytm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const flowerSchema = new mongoose.Schema({
    name: String,
    composition: String,
    price: Number,
    imageUrl: String
});

const Flower = mongoose.model('Flower', flowerSchema);

app.post('/api/flowers', async (req, res) => {
    try {
        const newFlower = new Flower(req.body);
        const savedFlower = await newFlower.save();
        res.status(201).json(savedFlower);
    } catch (error) {
        res.status(400).json({ message: 'Error adding flower', error });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});