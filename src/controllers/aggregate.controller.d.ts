import { Count, Filter, Where } from '@loopback/repository';
import { Situation } from '../models';
import { RuleRepository, SituationRepository } from '../repositories';
export declare class SituationController {
    situationRepository: SituationRepository;
    ruleRepository: RuleRepository;
    constructor(situationRepository: SituationRepository, ruleRepository: RuleRepository);
    getRules(situation: Situation): Situation;
    setRules(situation: Situation): Promise<import("../models").Fact>[];
    create(situation: Situation): Promise<Situation>;
    count(where?: Where<Situation>): Promise<Count>;
    find(filter?: Filter<Situation>): Promise<Situation[]>;
    updateAll(situation: Situation, where?: Where<Situation>): Promise<Count>;
    findById(id: number): Promise<Situation>;
    updateById(id: number, situation: Situation): Promise<void>;
    replaceById(id: number, situation: Situation): Promise<void>;
    deleteById(id: number): Promise<void>;
}
