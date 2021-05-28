import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @ApiTags('Companies')
  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    return await this.companiesService.create(createCompanyDto);
  }

  @ApiTags('Companies')
  @Get()
  async findAll() {
    return await this.companiesService.findAll();
  }

  @ApiTags('Companies')
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.companiesService.findOne(+id);
  }

  @ApiTags('Companies')
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return await this.companiesService.update(+id, updateCompanyDto);
  }

  @ApiTags('Companies')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.companiesService.remove(+id);
  }
}
