import {Model, model, property} from '@loopback/repository';
import {PathMappingInterface} from 'omni.interfaces';

@model({settings: {}})
export class PathMapping extends Model implements PathMappingInterface{
  @property({
    type: 'string',
    required: true,
  })
  withPath: string;

  @property({
    type: 'string',
    required: true,
  })
  replaceName: string;

  constructor(data: Partial<PathMapping>) {
    super(data);
  }
}

export interface PathMappingRelations {
  // describe navigational properties here
}

export type PathMappingWithRelations = PathMapping & PathMappingRelations;
