import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/products.js';
import color from 'colors';
import path from 'path';

dotenv.config();

connectDB();

const app = express();

// Routes

app.get('/api/products', (req, res) => {
    res.json(products);
})

app.get(`/api/products/:id`, (req, res) => {
    const product = products.find((elem) => {
        return elem._id === req.params.id;
    })
    res.json(product);
})
const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join('./frontend/build')))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '/frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => {
        res.send('API is running...');
    })
}

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

