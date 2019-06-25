import {
  AnyObject,
  Count,
  DataObject,
  DefaultCrudRepository,
  ensurePromise,
  Filter,
  Options,
  Where
} from '@loopback/repository';
import {Rule, Situation} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';
import {createBase, deleteBase, updateBase} from "../utils/utils";

export class SituationRepository extends DefaultCrudRepository<
  Situation,
  typeof Situation.prototype.id
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Situation, dataSource);
  }
  async create(situation: Situation): Promise<Situation> {
    createBase(situation, Situation.metadataId);
    situation = await super.create(situation);
    console.log('this is after saving ' + Date.now());
    return situation;
  }
  async updateById(
      id: number,
      situation: DataObject<Situation>,
      options?: Options,
  ): Promise<void> {
    updateBase(situation);
    super.updateById(id, situation, options);
  }
  async deleteById(
      id: number,
      options?: Options): Promise<void> {
    deleteBase(this, id);
    super.deleteById(id, options);
  }
  async count(where?: Where<Situation>, options?: Options): Promise<Count> {
    if (where === undefined) {
      where = {
        removed: false
      }
    } else {
      (where as Situation).removed = false;
    }
    const result = await ensurePromise(this.modelClass.count(where, options));
    return {count: result};
  }
  async find(filter?: Filter<Situation>, options?: AnyObject): Promise<(Situation & {})[]> {
    if (filter === undefined) {
      filter = {};
    }
    if (filter.where === undefined) {
      filter.where = {};
    }
    if ((filter.where as Rule).removed === undefined) {
      (filter.where as Rule).removed = false;
    }
    return super.find(filter, options);
  }
}
