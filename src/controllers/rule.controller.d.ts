import { Count, Filter, Where } from '@loopback/repository';
import { Rule } from '../models';
import { RuleRepository } from '../repositories';
export declare class RuleController {
    ruleRepository: RuleRepository;
    constructor(ruleRepository: RuleRepository);
    create(rule: Rule): Promise<Rule>;
    count(where?: Where<Rule>): Promise<Count>;
    find(filter?: Filter<Rule>): Promise<Rule[]>;
    updateAll(rule: Rule, where?: Where<Rule>): Promise<Count>;
    findById(id: number): Promise<Rule>;
    updateById(id: number, rule: Rule): Promise<void>;
    replaceById(id: number, rule: Rule): Promise<void>;
    deleteById(id: number): Promise<void>;
}
