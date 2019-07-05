import {model, property} from "@loopback/repository";
import {Rule} from "./rule.model";
import {PathMapping} from './path-mapping.model';
import {getJsonSchema} from '@loopback/repository-json-schema';
import {FactInterface} from 'omni.interfaces';
import {DataType} from 'omni.interfaces/types';

const RuleJSON = getJsonSchema(Rule);
// @ts-ignore
RuleJSON.nullable = true;


@model({
  name: "Fact",
  description: "Facts are either known or stated. They also give info to the rule on where to find the other causal facts for this fact to be realized"
})
export class Fact implements FactInterface {
  @property({
    type: 'string',
    description: 'The path on the JSON where this fact should be recorded',
    required: false,
    jsonSchema: {nullable: true}
  })
  path?: string;
  @property({
    type: 'string',
    description: 'The path on the JSON where this fact should be recorded',
    required: true,
    jsonSchema: {nullable: true},
    defaultValue: "string"
  })
  dataType: DataType;
  @property({
    type: 'object',
    description: 'The rule that this fact applies to.',
    itemType: Rule,
    required: false,
    jsonSchema: RuleJSON
  })
  rule?: Rule;
  @property({
    type: 'array',
    description: 'The paths that the rule needs to translate on the Json BOM',
    itemType: PathMapping,
    required: true,
    jsonSchema: {nullable: true},

  })
  pathMapping: PathMapping[];
}


export interface FactRelations {
  // describe navigational properties here
}

export type FactWithRelations = Fact & FactRelations;