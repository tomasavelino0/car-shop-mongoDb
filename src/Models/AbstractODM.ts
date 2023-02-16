import {
  Model,
  models,
  Schema,
  model,
  isValidObjectId,
} from 'mongoose';
import HttpHandler from '../Middlewares/HttpHandler';
    
abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;
    
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
    
  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }
  public async find(): Promise<T[]> {
    return this.model.find();
  }
  public async findById(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new HttpHandler(422, 'Invalid mongo id');
    return this.model.findById({ _id });
  }
}
    
export default AbstractODM;