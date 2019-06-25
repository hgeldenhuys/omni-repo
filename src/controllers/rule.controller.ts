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
import {Rule} from '../models';
import {RuleRepository} from '../repositories';

export class RuleController {
  constructor(
    @repository(RuleRepository)
    public ruleRepository : RuleRepository,
  ) {}

  @post('/rule/create', {
    responses: {
      '200': {
        description: 'Rule model instance',
        content: {'application/json': {schema: {'x-ts-type': Rule}}},
      },
    },
  })
  async create(@requestBody() rule: Rule): Promise<Rule> {
    return await this.ruleRepository.create(rule);
  }

  @get('/rules/count', {
    responses: {
      '200': {
        description: 'Rule model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Rule)) where?: Where<Rule>,
  ): Promise<Count> {
    return await this.ruleRepository.count(where);
  }

  @get('/rules/query', {
    responses: {
      '200': {
        description: 'Array of Rule model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Rule}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Rule)) filter?: Filter<Rule>,
  ): Promise<Rule[]> {
    return await this.ruleRepository.find(filter);
  }

  @patch('/rules/patch', {
    responses: {
      '200': {
        description: 'Rule PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() rule: Rule,
    @param.query.object('where', getWhereSchemaFor(Rule)) where?: Where<Rule>,
  ): Promise<Count> {
    return await this.ruleRepository.updateAll(rule, where);
  }

  @get('/rule/{id}', {
    responses: {
      '200': {
        description: 'Rule model instance',
        content: {'application/json': {schema: {'x-ts-type': Rule}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Rule> {
    return await this.ruleRepository.findById(id);
  }

  @patch('/rule/{id}', {
    responses: {
      '204': {
        description: 'Rule PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() rule: Rule,
  ): Promise<void> {
    await this.ruleRepository.updateById(id, rule);
  }

  @put('/rule/{id}', {
    responses: {
      '204': {
        description: 'Rule PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() rule: Rule,
  ): Promise<void> {
    console.log("PUT");
    await this.ruleRepository.replaceById(id, rule);
  }

  @del('/rule/{id}', {
    responses: {
      '204': {
        description: 'Rule DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ruleRepository.deleteById(id);
  }
}