import { juggler } from '@loopback/repository';
export declare class MongoDbDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
