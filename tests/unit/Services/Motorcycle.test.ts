import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleServices from '../../../src/Services/MotorcycleServices';

import motorCycleDomainMock from './mocks/Motorcycle.mock';

describe('Testes de unidade da camada de service de Motorcycle', function () {
  it('Deve criar um novo objeto Motorcycle e inserir no banco de dados', async function () {
    sinon.stub(Model, 'create').resolves(motorCycleDomainMock);
    const carService = new MotorcycleServices();
    const result = await carService.addNewMotorCycle(motorCycleDomainMock);
    
    expect(result).to.be.deep.equal(motorCycleDomainMock);
  }); 
});