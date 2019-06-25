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
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SituationController = class SituationController {
    constructor(situationRepository, ruleRepository) {
        this.situationRepository = situationRepository;
        this.ruleRepository = ruleRepository;
    }
    getRules(situation) {
        if (situation.facts !== undefined) {
            let created = false;
            situation.facts.map(async (fact) => {
                if (fact.rule && fact.rule.id) {
                    fact.rule = await this.ruleRepository.findById(fact.rule.id);
                }
                else {
                    fact.rule = await this.ruleRepository.create(fact.rule);
                    created = true;
                }
            });
            if (created) {
                this.ruleRepository.updateById(situation.id, situation);
            }
        }
        return situation;
    }
    setRules(situation) {
        if (situation.facts !== undefined) {
            return situation.facts.map(async (fact) => {
                if (fact.rule && fact.rule.id) {
                    const id = fact.rule.id;
                    await this.ruleRepository.updateById(id, fact.rule);
                    fact.rule.id = id;
                }
                else {
                    fact.rule = await this.ruleRepository.create(fact.rule);
                }
                return fact;
            });
        }
        return [];
    }
    async create(situation) {
        await Promise.all(this.setRules(situation));
        console.log(JSON.stringify(situation));
        return await this.situationRepository.create(situation);
    }
    async count(where) {
        return await this.situationRepository.count(where);
    }
    async find(filter) {
        const situations = await this.situationRepository.find(filter);
        await Promise.all(situations.map(async (situation) => {
            await this.getRules(situation);
            return situation;
        }));
        return situations;
    }
    async updateAll(situation, where) {
        return await this.situationRepository.updateAll(situation, where);
    }
    async findById(id) {
        const situation = await this.situationRepository.findById(id);
        if (situation) {
            await this.getRules(situation);
        }
        return situation;
    }
    async updateById(id, situation) {
        await Promise.all(this.setRules(situation));
        await this.situationRepository.updateById(id, situation);
    }
    async replaceById(id, situation) {
        await this.setRules(situation);
        await this.situationRepository.replaceById(id, situation);
    }
    async deleteById(id) {
        await this.situationRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/situations', {
        responses: {
            '200': {
                description: 'Situation model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Situation } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Situation]),
    __metadata("design:returntype", Promise)
], SituationController.prototype, "create", null);
__decorate([
    rest_1.get('/situations/count', {
        responses: {
            '200': {
                description: 'Situation model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Situation))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SituationController.prototype, "count", null);
__decorate([
    rest_1.get('/situations', {
        responses: {
            '200': {
                description: 'Array of Situation model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Situation } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Situation))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SituationController.prototype, "find", null);
__decorate([
    rest_1.patch('/situations', {
        responses: {
            '200': {
                description: 'Situation PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Situation))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Situation, Object]),
    __metadata("design:returntype", Promise)
], SituationController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/situations/{id}', {
        responses: {
            '200': {
                description: 'Situation model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Situation } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SituationController.prototype, "findById", null);
__decorate([
    rest_1.patch('/situations/{id}', {
        responses: {
            '204': {
                description: 'Situation PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Situation]),
    __metadata("design:returntype", Promise)
], SituationController.prototype, "updateById", null);
__decorate([
    rest_1.put('/situations/{id}', {
        responses: {
            '204': {
                description: 'Situation PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Situation]),
    __metadata("design:returntype", Promise)
], SituationController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/situations/{id}', {
        responses: {
            '204': {
                description: 'Situation DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SituationController.prototype, "deleteById", null);
SituationController = __decorate([
    __param(0, repository_1.repository(repositories_1.SituationRepository)),
    __param(1, repository_1.repository(repositories_1.RuleRepository)),
    __metadata("design:paramtypes", [repositories_1.SituationRepository,
        repositories_1.RuleRepository])
], SituationController);
exports.SituationController = SituationController;
//# sourceMappingURL=situation.controller.js.map