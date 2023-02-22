import IVehicle from './Vehicle';

export default interface ICar extends IVehicle {
  doorsQty: number,
  seatsQty: number,
}
