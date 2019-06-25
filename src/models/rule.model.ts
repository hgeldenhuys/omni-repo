import {model, property} from "@loopback/repository";
import {RuleInterface} from "../interfaces";
import {Base} from ".";
@model({
  description: "A business rule definition"
})
export class Rule extends Base implements RuleInterface {
  static metadataId = 1001;
  @property({
    type: 'string',
    description: 'Rule name',
    required: true
  })
  name: string;
  @property({
    type: 'string',
    description: 'The documentation describing this business rule',
    required: false,
    jsonSchema: {nullable: true}
  })
  description!: string;
  @property({
    type: 'string',
    description: 'For display purposes',
    required: false,
    jsonSchema: {nullable: true}
  })
  label!: string;
  @property({
    type: 'string',
    description: 'For known facts, supply a sample value that will be included in the generation of a sample JSON BOM',
    required: false,
    jsonSchema: {nullable: true}
  })
  sampleValue!: string;
  @property({
    type: 'string',
    description: 'A simple JS expression that expresses this rule',
    default: undefined,
    required: false,
    jsonSchema: {nullable: true}
  })
  statedAs?: string;
  @property({
    type: 'string',
    description: 'Describes the data type. Can be: Unknown, String, Integer, Long, Boolean, Date, Decimal, Enum, List, Object',
    required: false,
    jsonSchema: {nullable: true}
  })
  dataType!: string;

  constructor(data: Partial<Rule>) {
    super(data);
  }
}