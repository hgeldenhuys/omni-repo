import {model, property} from '@loopback/repository';
import {Base} from '.';

@model({settings: {}})
export class PathMapping extends Base {
  @property({
    type: 'string',
    required: true,
  })
  path: string;

  @property({
    type: 'string',
    required: true,
  })
  input: string;

  constructor(data: Partial<PathMapping>) {
    super(data);
  }
}

export interface PathMappingRelations {
  // describe navigational properties here
}

export type PathMappingWithRelations = PathMapping & PathMappingRelations;
