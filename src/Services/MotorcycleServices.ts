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

  public async listAllMotorcycles(): Promise<(Motorcycle | null)[]> {
    const newMotorODM = new MotorCycleODM();
    const motorCycles = await newMotorODM.find();
    const motorCyclesDomain = motorCycles.map((motor) => this.createCarDomain(motor));
    return motorCyclesDomain;
  }

  public async listMotorCycleById(id: string): Promise<Motorcycle | null> {
    const newMotorODM = new MotorCycleODM();
    const motorCycle = await newMotorODM.findById(id);
    const motorCycleDomain = this.createCarDomain(motorCycle);
    return motorCycleDomain;
  }
} 