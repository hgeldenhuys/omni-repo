import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Fact, Situation} from '../models';
import {RuleRepository, SituationRepository} from '../repositories';

export class SituationController {
  constructor(
    @repository(SituationRepository)
    public situationRepository : SituationRepository,
    @repository(RuleRepository)
    public ruleRepository : RuleRepository,
  ) {}

  retrieveRules(facts: Fact[]): Promise<Fact>[] {
    return facts.map(async (fact, factIndex) => {
      return new Promise<Fact>(async (resolve, reject) => {
        if (fact.rule && fact.rule.id) {
          this.ruleRepository.findById(fact.rule.id)
            .then((rule) => {
              fact.rule = rule;
              resolve(fact);
            })
            .catch((reason) => {
              if (reason.code === "ENTITY_NOT_FOUND") {
                delete fact.rule;
                resolve(fact);
              } else {
                reject(reason);
              }
            });
        } else if (fact.rule) {
          reject(`Trying to retrieve rule without an id`);
        } else {
          resolve(fact);
        }
      });
    });
  }

  setRules(situation: Situation) {
    if (situation.facts !== undefined) {
      return situation.facts.map(async (fact) => {
        if (fact.rule && fact.rule.id) {
          const id = fact.rule.id;
          await this.ruleRepository.updateById(id, fact.rule);
          fact.rule.id = id;
          return fact.rule;
        } else if (fact.rule) {
          fact.rule = await this.ruleRepository.create(fact.rule);
          return fact.rule;
        }
      });
    }
    return [];
  }

  @post('/situations', {
    responses: {
      '200': {
        description: 'Situation model instance',
        content: {'application/json': {schema: {'x-ts-type': Situation}}},
      },
    },
  })
  async create(@requestBody() situation: Situation): Promise<Situation> {
    await Promise.all(this.setRules(situation));
    console.log(JSON.stringify(situation));
    return await this.situationRepository.create(situation);
  }

  @get('/situations/count', {
    responses: {
      '200': {
        description: 'Situation model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Situation)) where?: Where<Situation>,
  ): Promise<Count> {
    return await this.situationRepository.count(where);
  }

  @get('/situations', {
    responses: {
      '200': {
        description: 'Array of Situation model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Situation}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Situation)) filter?: Filter<Situation>,
  ): Promise<Situation[]> {
    let situations = await this.situationRepository.find(filter);
    situations = await Promise.all(situations.map(async (situation) => {
      if (situation.facts) {
        await Promise.all(this.retrieveRules(situation.facts))
          .catch((reason) => {
            throw new Error(reason);
          });
      }
      return situation;
    }))
      .catch((reason) => {
        console.error(reason);
        throw new Error(reason);
      });
    return situations;
  }

  @patch('/situations', {
    responses: {
      '200': {
        description: 'Situation PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() situation: Situation,
    @param.query.object('where', getWhereSchemaFor(Situation)) where?: Where<Situation>,
  ): Promise<Count> {
    return await this.situationRepository.updateAll(situation, where);
  }

  @get('/situations/{id}', {
    responses: {
      '200': {
        description: 'Situation model instance',
        content: {'application/json': {schema: {'x-ts-type': Situation}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Situation> {
    const situation = await this.situationRepository.findById(id);
    if (situation) {
      console.log(`situation.facts1: ${JSON.stringify(situation.facts)}`);
      if (situation.facts) {
        await Promise.all(this.retrieveRules(situation.facts));
      }
      console.log(`situation.facts2: ${JSON.stringify(situation.facts)}`);
    }
    return situation;
  }

  @patch('/situations/{id}', {
    responses: {
      '204': {
        description: 'Situation PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() situation: Situation,
  ): Promise<void> {
    if (situation.facts) {
      await Promise.all(this.retrieveRules(situation.facts));
    }
    await this.situationRepository.updateById(id, situation);
  }

  @put('/situations/{id}', {
    responses: {
      '204': {
        description: 'Situation PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() situation: Situation,
  ): Promise<void> {
    if (situation.facts) {
      await Promise.all(this.retrieveRules(situation.facts));
    }
    await this.situationRepository.replaceById(id, situation);
  }

  @del('/situations/{id}', {
    responses: {
      '204': {
        description: 'Situation DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.situationRepository.deleteById(id);
  }
}
