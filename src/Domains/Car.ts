import Icar from '../Interfaces/Car';

export default class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: Icar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status || false;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  getId() { return this.id; }

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

  getDoorQty() { return this.doorsQty; }
  setDoorQty(value: number) { this.doorsQty = value; }

  getSeatQty() { return this.seatsQty; }
  setSeatQty(value: number) { this.seatsQty = value; }
}

// const object = {
//   id: '6348513f34c397abcad040b2',
//   model: 'Marea',
//   year: 2002,
//   color: 'azul',
//   status: true,
//   buyValue: 15.990,
//   doorsQty: 4,
//   seatsQty: 5,
// };
