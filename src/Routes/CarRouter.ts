import { Router } from 'express';
import CarController from '../Controllers/CarControllers';

const carRouter = Router();

carRouter.post('', (req, res, next) => new CarController(req, res, next).create());

export default carRouter;