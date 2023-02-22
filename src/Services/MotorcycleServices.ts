import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorCycleODM from '../Models/MotorcycleODM';

export default class MotorcycleServices {
  private createCarDomain(motorCycle: IMotorcycle | null): Motorcycle | null {
    if (motorCycle) {
      return new Motorcycle(motorCycle);
    }
    return null;
  }
  public async addNewMotorCycle(motorCycle: IMotorcycle) {
    const newMotorODM = new MotorCycleODM();
    const newMotorCycle = await newMotorODM.create(motorCycle);
    
    return this.createCarDomain(newMotorCycle);
  }
} 