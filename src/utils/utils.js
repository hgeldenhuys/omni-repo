"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function uuidv4(metadatId) {
    return parseInt((metadatId) + "" + ("000000000" + Math.round(Math.random() * 1000000000)).substr(-9, 9) + "", 10);
}
exports.uuidv4 = uuidv4;
function createBase(base, metaDataId) {
    base.id = uuidv4(metaDataId);
    base.createdDate = (new Date()).getTime();
    base.changedDate = base.createdDate;
}
exports.createBase = createBase;
function updateBase(base) {
    base.changedDate = (new Date()).getTime();
}
exports.updateBase = updateBase;
function deleteBase(self, id) {
    self.updateById(id, { _rm: true });
}
exports.deleteBase = deleteBase;
//# sourceMappingURL=utils.js.map