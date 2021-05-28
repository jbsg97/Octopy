import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private readonly companiesRepository: Repository<Company>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    const company = this.companiesRepository.create(createCompanyDto as any);
    return await this.companiesRepository.save(company);
  }

  async findAll() {
    return await this.companiesRepository.find();
  }

  async findOne(id: number) {
    return await this.companiesRepository.findOne(id);
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const company = await this.companiesRepository.findOne(id);

    if (!company) throw new NotFoundException('Company does not exists');

    const editedCompany = Object.assign(company, updateCompanyDto);
    return await this.companiesRepository.save(editedCompany);
  }

  async remove(id: number) {
    return await this.companiesRepository.delete(id);
  }
}
