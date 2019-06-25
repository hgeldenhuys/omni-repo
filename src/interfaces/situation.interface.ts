import {BaseInterface} from "./base.interface";
import {FactInterface} from "./fact.interface";

export interface SituationInterface extends BaseInterface {
  name: string;          /* The name of the situation */
  version: string;       /* The version of this situation for audit reasons */
  facts?: FactInterface[]; /* The collection of facts that belong to this situation */
  description?: string;    /* The description/documentation of the situation */
}