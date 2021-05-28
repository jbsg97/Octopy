import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { getRepository } from 'typeorm';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { Company } from './entities/company.entity';

describe('CompaniesController', () => {

    beforeEach(async () => {
      let companyService: CompaniesService
      const Module = await Test.createTestingModule({
        providers: [
          CompaniesService,
          {
            provide: getRepositoryToken(Company),
            useValue: {}
          }
        ]
      }).compile();
      companyService = await Module.get<CompaniesService>(CompaniesService)
    })
});
