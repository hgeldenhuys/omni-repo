"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
const utils_1 = require("../utils/utils");
let SituationRepository = class SituationRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Situation, dataSource);
    }
    async create(situation) {
        utils_1.createBase(situation, models_1.Situation.metadataId);
        situation = await super.create(situation);
        console.log('this is after saving ' + Date.now());
        return situation;
    }
    async updateById(id, situation, options) {
        utils_1.updateBase(situation);
        super.updateById(id, situation, options);
    }
    async deleteById(id, options) {
        utils_1.deleteBase(this, id);
        // super.deleteById(id, options);
    }
    async count(where, options) {
        if (where === undefined) {
            where = {
                removed: false
            };
        }
        else {
            where.removed = false;
        }
        const result = await repository_1.ensurePromise(this.modelClass.count(where, options));
        return { count: result };
    }
    async find(filter, options) {
        if (filter === undefined) {
            filter = {};
        }
        if (filter.where === undefined) {
            filter.where = {};
        }
        if (filter.where.removed === undefined) {
            filter.where.removed = false;
        }
        return super.find(filter, options);
    }
};
SituationRepository = __decorate([
    __param(0, core_1.inject('datasources.MongoDB')),
    __metadata("design:paramtypes", [datasources_1.MongoDbDataSource])
], SituationRepository);
exports.SituationRepository = SituationRepository;
//# sourceMappingURL=situation.repository.js.map