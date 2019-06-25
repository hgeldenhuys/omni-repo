import { AnyObject, Count, DataObject, DefaultCrudRepository, Filter, Options, Where } from '@loopback/repository';
import { Rule } from '../models';
import { MongoDbDataSource } from '../datasources';
export declare class RuleRepository extends DefaultCrudRepository<Rule, typeof Rule.prototype.id> {
    constructor(dataSource: MongoDbDataSource);
    create(rule: Rule): Promise<Rule>;
    updateById(id: number, rule: DataObject<Rule>, options?: Options): Promise<void>;
    deleteById(id: number, options?: Options): Promise<void>;
    count(where?: Where<Rule>, options?: Options): Promise<Count>;
    find(filter?: Filter<Rule>, options?: AnyObject): Promise<(Rule & {})[]>;
}
