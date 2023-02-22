import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
    category,
    engineCapacity,
  }: IMotorcycle) {
    super({ model, year, color, status, buyValue, id });
    this.engineCapacity = engineCapacity;
    this.category = category;
  }

  public setCategory(category: string) {
    this.category = category;
  }
  public getCategory() { return this.category; }

  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }
  public getEngineCapacity() { return this.engineCapacity; }
}