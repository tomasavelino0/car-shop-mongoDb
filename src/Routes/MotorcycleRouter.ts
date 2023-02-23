import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleControllers';

const motorCycleRouter = Router();

motorCycleRouter.post('', (req, res, next) => new MotorcycleController(req, res, next).create());

motorCycleRouter.get(
  '', 
  (req, res, next) => new MotorcycleController(req, res, next).listMotorCycles(),
);

motorCycleRouter.get(
  '/:id', 
  (req, res, next) => new MotorcycleController(req, res, next).motorCycleById(),
);

export default motorCycleRouter;