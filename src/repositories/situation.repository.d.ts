import { AnyObject, Count, DataObject, DefaultCrudRepository, Filter, Options, Where } from '@loopback/repository';
import { Situation } from '../models';
import { MongoDbDataSource } from '../datasources';
export declare class SituationRepository extends DefaultCrudRepository<Situation, typeof Situation.prototype.id> {
    constructor(dataSource: MongoDbDataSource);
    create(situation: Situation): Promise<Situation>;
    updateById(id: number, situation: DataObject<Situation>, options?: Options): Promise<void>;
    deleteById(id: number, options?: Options): Promise<void>;
    count(where?: Where<Situation>, options?: Options): Promise<Count>;
    find(filter?: Filter<Situation>, options?: AnyObject): Promise<(Situation & {})[]>;
}
