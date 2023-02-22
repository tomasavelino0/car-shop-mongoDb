import IVehicle from './Vehicle';

export default interface IMotorcycle extends IVehicle{
  category: string,
  engineCapacity: number,
}