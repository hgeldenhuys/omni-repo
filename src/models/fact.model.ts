import {model, property} from "@loopback/repository";
import {FactInterface} from "../interfaces";
import {Rule} from ".";
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
    type: 'object',
    description: 'The rule that this fact applies to',
    itemType: Rule,
    required: false,
    jsonSchema: {nullable: true}
  })
  rule?: Rule;
  @property({
    type: 'object',
    description: 'The paths that the rule needs to translate on the Json BOM',
    itemType: {},
    required: false,
    jsonSchema: {nullable: true}
  })
  pathMapping?: {};

}