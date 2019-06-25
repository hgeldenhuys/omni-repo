import {model, property} from '@loopback/repository';
import {Base} from '.';
import {AuthoruiInterface} from "../interfaces/authorui.interface";

@model({settings: {strict: false}})
export class AuthorUi extends Base implements AuthoruiInterface {
  static metadataId = 1100;
  @property({
    type: 'string',
    required: true,
  })
  userId: string;

  @property({
    type: 'string',
    required: true,
    default: "light",
  })
  theme: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data: Partial<AuthorUi>) {
    super(data);
  }
}

export interface AuthorUiRelations {
  // describe navigational properties here
}

export type AuthorUiWithRelations = AuthorUi & AuthorUiRelations;
