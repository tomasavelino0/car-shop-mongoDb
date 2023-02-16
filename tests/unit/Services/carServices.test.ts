import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarServices from '../../../src/Services/CarServices';
import { carDomainMock, carListDbMock } from './mocks/carServices.mock';

describe('Testes de unidade da camada de service de Cars', function () {
  it('Deve criar um novo objeto Car e inserir no banco de dados', async function () {
    sinon.stub(Model, 'create').resolves(carDomainMock);
    const carService = new CarServices();
    const result = await carService.addNewCar(carDomainMock);

    expect(result).to.be.deep.equal(carDomainMock);
  });

  it('Deve retornar um carro pelo seu id com sucesso', async function () {
    const ID_VALID = '6348513f34c397abcad040b2';

    sinon.stub(Model, 'findById').resolves(carDomainMock);
    const carService = new CarServices();
    const result = await carService.carById(ID_VALID);

    expect(result).to.be.deep.equal(carDomainMock);
  });

  it('Deve retornar uma lista de carros registrada no banco de dados', async function () {
    sinon.stub(Model, 'find').resolves(carListDbMock);
    const carService = new CarServices();
    const result = await carService.listAllCars();

    expect(result).to.be.deep.equal(carListDbMock);
  });
});