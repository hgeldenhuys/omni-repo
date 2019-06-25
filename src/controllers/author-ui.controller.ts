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
import {AuthorUi} from '../models';
import {AuthorUiRepository} from "../repositories";

export class AuthorUiController {
  constructor(
    @repository(AuthorUiRepository)
    public authorUiRepository : AuthorUiRepository,
  ) {}

  @post('/authorui', {
    responses: {
      '200': {
        description: 'AuthorUi model instance',
        content: {'application/json': {schema: {'x-ts-type': AuthorUi}}},
      },
    },
  })
  async create(@requestBody() authorUi: AuthorUi): Promise<AuthorUi> {
    return await this.authorUiRepository.create(authorUi);
  }

  @get('/authorui/count', {
    responses: {
      '200': {
        description: 'AuthorUi model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(AuthorUi)) where?: Where<AuthorUi>,
  ): Promise<Count> {
    return await this.authorUiRepository.count(where);
  }

  @get('/authorui', {
    responses: {
      '200': {
        description: 'Array of AuthorUi model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': AuthorUi}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(AuthorUi)) filter?: Filter<AuthorUi>,
  ): Promise<AuthorUi[]> {
    return await this.authorUiRepository.find(filter);
  }

  @patch('/authorui', {
    responses: {
      '200': {
        description: 'AuthorUi PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() authorUi: AuthorUi,
    @param.query.object('where', getWhereSchemaFor(AuthorUi)) where?: Where<AuthorUi>,
  ): Promise<Count> {
    return await this.authorUiRepository.updateAll(authorUi, where);
  }

  @get('/authorui/{id}', {
    responses: {
      '200': {
        description: 'AuthorUi model instance',
        content: {'application/json': {schema: {'x-ts-type': AuthorUi}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<AuthorUi> {
    return await this.authorUiRepository.findById(id);
  }

  @patch('/authorui/{id}', {
    responses: {
      '204': {
        description: 'AuthorUi PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() authorUi: AuthorUi,
  ): Promise<void> {
    await this.authorUiRepository.updateById(id, authorUi);
  }

  @put('/authorui/{id}', {
    responses: {
      '204': {
        description: 'AuthorUi PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() authorUi: AuthorUi,
  ): Promise<void> {
    await this.authorUiRepository.replaceById(id, authorUi);
  }

  @del('/authorui/{id}', {
    responses: {
      '204': {
        description: 'AuthorUi DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.authorUiRepository.deleteById(id);
  }
}
