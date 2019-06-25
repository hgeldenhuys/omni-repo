import { Entity } from "@loopback/repository";
import { BaseInterface } from "../interfaces";
export declare class Base extends Entity implements BaseInterface {
    metadataId: number;
    id: number;
    createdDate: number;
    changedDate?: number;
    removed?: boolean;
    documentation?: string;
}
