import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor({
    model,
    year,
    color,
    status = false,
    buyValue,
    id,
  }: IVehicle) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
    this.id = id;
  }

  getId() { return this.id; }
  setId(value: string) { this.id = value; }

  getModel() { return this.model; }
  setModel(value: string) { this.model = value; }

  getYear() { return this.year; }
  setYear(value: number) { this.year = value; }

  getColor() { return this.color; }
  setColor(value: string) { this.color = value; }

  getStatus() { return this.status; }
  setStatus(value: boolean) { this.status = value; }

  getBuyValue() { return this.buyValue; }
  setBuyValue(value: number) { this.buyValue = value; }
} 