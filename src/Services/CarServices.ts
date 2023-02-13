import Icar from '../Interfaces/Car';
import Car from '../Domains/Car';
import CarODM from '../Models/CarODM';

export default class CarServices {
  private createCarDomain(car: Icar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async addNewCar(car: Icar) {
    const newCarODM = new CarODM();
    const newCar = await newCarODM.create(car);
    
    return this.createCarDomain(newCar);
  }
}
