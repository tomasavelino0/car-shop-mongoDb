import { Router } from 'express';
import CarController from '../Controllers/CarControllers';

const carRouter = Router();

carRouter.post('', (req, res, next) => new CarController(req, res, next).create());

carRouter.get('', (req, res, next) => new CarController(req, res, next).listAllCars());

carRouter.get('/:id', (req, res, next) => new CarController(req, res, next).listCarById());

export default carRouter;