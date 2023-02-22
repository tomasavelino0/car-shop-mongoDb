import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor({
    model,
    year,
    color,
    status,
    buyValue,
    doorsQty,
    seatsQty,
    id,
  }: ICar) {
    super({ model, year, color, status, buyValue, id });
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }
  getDoorsQty() { return this.doorsQty; }

  setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }
  getSeatsQty() { return this.seatsQty; }
}
