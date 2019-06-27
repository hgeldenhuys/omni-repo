import { SituationInterface } from "../interfaces";
import { Base, Fact } from ".";
export declare class Situation extends Base implements SituationInterface {
    static metadataId: number;
    name?: string;
    version?: string;
    facts: Fact[];
    description?: string;
    constructor(data?: Partial<Situation>);
}
