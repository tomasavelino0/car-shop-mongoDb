import express from 'express';
import carRouter from './Routes/CarRouter';
import ErrorHandler from './Middlewares/ErrorHandler';
import motorCycleRouter from './Routes/MotorcycleRouter';

const app = express();
app.use(express.json());
app.use('/cars', carRouter);
app.use('/motorcycles', motorCycleRouter);
app.use(ErrorHandler.handle);

export default app;
