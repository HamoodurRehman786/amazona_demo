import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';



dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona');


app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)

app.get('/', (req, res) => {
    res.send('server is ready')
});

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
})
const port = process.env.port || 5000;
app.listen(5000, () => {
    console.log('Server at http://localhost:${port}');
});