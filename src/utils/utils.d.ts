import { Base } from '../models';
import { DataObject } from '@loopback/repository/src/common-types';
export declare function uuidv4(metadatId: number): number;
export declare function createBase(base: Base, metaDataId: number): void;
export declare function updateBase(base: DataObject<Base>): void;
export declare function deleteBase(self: any, id: number): void;
