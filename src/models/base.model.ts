import {Entity, model, property} from "@loopback/repository";
import {BaseInterface} from '../interfaces';
@model({
  description: "The base document for our business domain"
})
export class Base extends Entity implements BaseInterface {
  metadataId = 1000;
  @property({
    type: 'number',
    description: 'The Id of the document',
    id: true,
  })
  id: number;
  @property({
    type: 'number',
    description: 'Created date in Unix time',
  })
  createdDate: number;
  @property({
    type: 'number',
    description: 'Changed date in Unix time',
  })
  changedDate?: number;
  @property({
    type: 'boolean',
    description: 'Removed flag. Used for soft deletes',
    default: false,
  })
  removed?: boolean;
  @property({
    type: 'string',
    description: 'Documentation',
  })
  documentation?: string;
  @property({
    type: 'string',
    description: 'The title of the situation',
    required: false,
    jsonSchema: {nullable: true}
  })
  title?: string;
  @property({
    type: 'string',
    description: 'The title of the situation',
    required: false,
    jsonSchema: {nullable: true}
  })
  type?: string;

  constructor(data: Partial<Base>) {
    super(data);
  }
}