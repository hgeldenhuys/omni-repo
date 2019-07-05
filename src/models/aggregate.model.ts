import {model, property} from "@loopback/repository";
import {Base, Fact} from '.';
import {getJsonSchema} from '@loopback/repository-json-schema';
import {AggregateInterface} from 'omni.interfaces';
import {VersionInterface} from 'omni.interfaces/interfaces/version';

@model({
  name: "Aggregate",
  description: "A situation is an aggregate of facts"
})
export class Aggregate extends Base implements AggregateInterface {

  static metadataId = 1001;
  @property({
    type: 'string',
    description: 'The name of the situation',
    required: true
  })
  name: string;
  @property({
    type: 'object',
    description: 'The version of this situation for audit reasons',
    default: "0.1",
    required: true
  })
  version: VersionInterface;
  @property({
    type: 'array',
    description: 'The collection of facts that belong to this situation',
    defaultValue: [],
    itemType: Fact,
    required: false,
    jsonSchema: {nullable: true}
  })
  facts: Fact[];
  @property({
    type: 'string',
    description: 'The description/documentation of the situation',
    required: false,
    jsonSchema: {nullable: true}
  })
  description?: string;
  type?: "Aggregate" = "Aggregate";

  constructor(data: Partial<Aggregate>) {
    super(data);
}}

console.log(JSON.stringify(getJsonSchema(Aggregate), undefined, 2));