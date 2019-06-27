import { BaseInterface } from "./base.interface";
import { FactInterface } from "./fact.interface";
export interface SituationInterface extends BaseInterface {
    name?: string;
    version?: string;
    facts: FactInterface[];
    description?: string;
}
