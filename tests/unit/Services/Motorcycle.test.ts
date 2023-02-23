import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleServices from '../../../src/Services/MotorcycleServices';

import { motorCycleDomainMock, listMotorCyclesMock } from './mocks/Motorcycle.mock';

describe('Testes de unidade da camada de service de Motorcycle', function () {
  const ID_VALID = '6348513f34c397abcad040b2';  

  it('Deve criar um novo objeto Motorcycle e inserir no banco de dados', async function () {
    sinon.stub(Model, 'create').resolves(motorCycleDomainMock);
    const motorCycleService = new MotorcycleServices();
    const result = await motorCycleService.addNewMotorCycle(motorCycleDomainMock);
    
    expect(result).to.be.deep.equal(motorCycleDomainMock);
  });
  it('deve retornar uma lista de motorcycles com sucesso', async function () {
    sinon.stub(Model, 'find').resolves(listMotorCyclesMock);
    const motorCycleService = new MotorcycleServices();
    const result = await motorCycleService.listAllMotorcycles();
    
    expect(result).to.be.deep.equal(listMotorCyclesMock);
  });

  it('deve retornar um objeto Motorcycle pelo ID', async function () {
    sinon.stub(Model, 'findById').resolves(motorCycleDomainMock);
    const motorCycleService = new MotorcycleServices();
    const result = await motorCycleService.listMotorCycleById(ID_VALID);
    
    expect(result).to.be.deep.equal(motorCycleDomainMock);
  });
});