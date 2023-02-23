import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import HttpHandler from '../Middlewares/HttpHandler';
import MotorcycleServices from '../Services/MotorcycleServices';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleServices;
    
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleServices();
  }

  public async create() {
    const motorCycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,  
    };
    
    try {
      const newMotorcycle = await this.service.addNewMotorCycle(motorCycle);
      
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async listMotorCycles() {
    try {
      const motorCycles = await this.service.listAllMotorcycles();

      return this.res.status(200).json(motorCycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async motorCycleById() {
    try {
      const { id } = this.req.params;
      const motorCycle = await this.service.listMotorCycleById(id);
      if (!motorCycle) throw new HttpHandler(404, 'Motorcycle not found');
      return this.res.status(200).json(motorCycle);
    } catch (error) {
      this.next(error);
    }
  }
}