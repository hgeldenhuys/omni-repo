import {Base} from '../models';
import {DataObject} from '@loopback/repository/src/common-types';
export function uuidv4(metadatId: number) {
  return parseInt((metadatId) + "" + ("000000000" + Math.round(Math.random()*1000000000)).substr(-9,9) + "", 10);
}

export function createBase(base: Base, metaDataId: number) {
  base.id = uuidv4(metaDataId);
  base.createdDate = (new Date()).getTime();
  base.changedDate = base.createdDate;
  base.removed = false;
}

export function updateBase(base: DataObject<Base>) {
  base.changedDate = (new Date()).getTime();
  console.log("Changed date");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deleteBase(self: any, id: number) {
  self.updateById(id, {removed: true});
}
