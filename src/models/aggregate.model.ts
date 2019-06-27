import {model, property} from "@loopback/repository";
import {AggregateInterface} from "../interfaces";
import {Base, Fact} from ".";
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
    type: 'string',
    description: 'The version of this situation for audit reasons',
    default: "0.1",
    required: true
  })
  version: string;
  @property({
    type: 'array',
    description: 'The collection of facts that belong to this situation',
    default: [],
    itemType: Fact,
    required: false,
    jsonSchema: {nullable: true}
  })
  facts?: Fact[];
  @property({
    type: 'string',
    description: 'The description/documentation of the situation',
    required: false,
    jsonSchema: {nullable: true}
  })
  description?: string;

  constructor(data: Partial<Aggregate>) {
    super(data);
}}