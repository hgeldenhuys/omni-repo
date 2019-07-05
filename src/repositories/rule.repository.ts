import {
  AnyObject,
  Count,
  DataObject,
  DefaultCrudRepository,
  ensurePromise,
  Filter,
  Options,
  Where,
} from '@loopback/repository';
import {Rule} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';
import {createBase, deleteBase, updateBase} from "../utils/utils";

export class RuleRepository extends DefaultCrudRepository<
  Rule,
  typeof Rule.prototype.id
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Rule, dataSource);
  }
  async create(rule: Rule): Promise<Rule> {
    createBase(rule, Rule.metadataId);
    rule = await super.create(rule);
    console.log('this is after saving ' + Date.now());
    return rule;
  }
  async updateById(
      id: number,
      rule: DataObject<Rule>,
      options?: Options,
  ): Promise<void> {
    updateBase(rule);
    super.updateById(id, rule, options);
  }
  async deleteById(
      id: number,
      options?: Options): Promise<void> {
    deleteBase(this, id);
    super.deleteById(id, options);
  }
  async count(where?: Where<Rule>, options?: Options): Promise<Count> {
    if (where === undefined) {
      where = {
        removed: false
      }
    } else {
      (where as Rule).removed = false;
    }
    const result = await ensurePromise(this.modelClass.count(where, options));
    return {count: result};
  }
  async find(filter?: Filter<Rule>, options?: AnyObject): Promise<(Rule & {})[]> {
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
  async replaceById(
    id: number,
    rule: DataObject<Rule>,
    options?: Options,
  ): Promise<void> {
    updateBase(rule);
    super.replaceById(id, rule, options);
  }
}
