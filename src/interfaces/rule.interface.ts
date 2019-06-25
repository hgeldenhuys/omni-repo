import {BaseInterface} from "./base.interface";

export interface RuleInterface extends BaseInterface {
  name: string;         /* Rule name */
  description: string;   /* The documentation describing this business rule */
  label: string;         /* For display purposes */
  sampleValue: string;   /* For known facts, supply a sample value that will be included in the generation of a sample JSON BOM */
  statedAs?: string;     /* A simple JS expression that expresses this rule */
  dataType: string;      /* Describes the data type. Can be: Unknown, String, Integer, Long, Boolean, Date, Decimal, Enum, List, Object */
}