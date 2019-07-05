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
import {AuthorUi} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';
import {createBase, deleteBase, updateBase} from "../utils/utils";

export class AuthorUiRepository extends DefaultCrudRepository<
  AuthorUi,
  typeof AuthorUi.prototype.id
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(AuthorUi, dataSource);
  }
  async create(rule: AuthorUi): Promise<AuthorUi> {
    createBase(rule, AuthorUi.metadataId);
    rule = await super.create(rule);
    console.log('this is after saving ' + Date.now());
    return rule;
  }
  async updateById(
      id: number,
      rule: DataObject<AuthorUi>,
      options?: Options,
  ): Promise<void> {
    updateBase(rule);
    super.updateById(id, rule, options);
  }
  async deleteById(
      id: number,
      options?: Options): Promise<void> {
    deleteBase(this, id);
    // super.deleteById(id, options);
  }
  async count(where?: Where<AuthorUi>, options?: Options): Promise<Count> {
    if (where === undefined) {
      where = {
        removed: false
      }
    } else {
      (where as AuthorUi).removed = false;
    }
    const result = await ensurePromise(this.modelClass.count(where, options));
    return {count: result};
  }
  async find(filter?: Filter<AuthorUi>, options?: AnyObject): Promise<(AuthorUi & {})[]> {
    if (filter === undefined) {
      filter = {};
    }
    if (filter.where === undefined) {
      filter.where = {};
    }
    if ((filter.where as AuthorUi).removed === undefined) {
      (filter.where as AuthorUi).removed = false;
    }
    return super.find(filter, options);
  }
}
