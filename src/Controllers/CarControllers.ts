import { NextFunction, Request, Response } from 'express';
import Icar from '../Interfaces/ICar';
import HttpHandler from '../Middlewares/HttpHandler';
import CarServices from '../Services/CarServices';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarServices;
  
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarServices();
  }
  
  public async create() {
    const car: Icar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,   
    };
    
    try {
      const newCar = await this.service.addNewCar(car);
      
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async listAllCars() {
    const allCars = await this.service.listAllCars();
    return this.res.status(200).json(allCars);
  }

  public async listCarById() {
    try {
      const { id } = this.req.params;
      const car = await this.service.carById(id);
      if (!car) throw new HttpHandler(404, 'Car not found');

      return this.res.status(200).json(car);
    } catch (error) {
      return this.next(error);
    }
  }
  public async updateCar() {
    try {
      const { id } = this.req.params;
      const value = this.req.body;
      const updateCar = await this.service.updateCar(id, value);
      if (!updateCar) throw new HttpHandler(404, 'Car not found');

      return this.res.status(200).json(updateCar);
    } catch (error) {
      return this.next(error);
    }
  }
}

export default CarController;