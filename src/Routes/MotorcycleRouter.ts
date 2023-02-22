import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleControllers';

const motorCycleRouter = Router();

motorCycleRouter.post('', (req, res, next) => new MotorcycleController(req, res, next).create());

export default motorCycleRouter;