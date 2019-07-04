import {RuleInterface} from "./rule.interface";
import {PathMappingInterface} from './pathmapping.interface';

export interface FactInterface {
  path?: string;          /* The path on the JSON where this fact should be recorded */
  rule?: RuleInterface;   /* The rule that this fact applies to */
  pathMapping?: PathMappingInterface[];       /* The paths that the rule needs to translate on the Json BOM */
  dataType: string;       /* The paths that the rule needs to translate on the Json BOM */
}