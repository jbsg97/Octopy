import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @ApiTags('Companies')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    return await this.companiesService.create(createCompanyDto);
  }

  @ApiTags('Companies')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.companiesService.findAll();
  }

  @ApiTags('Companies')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.companiesService.findOne(+id);
  }

  @ApiTags('Companies')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return await this.companiesService.update(+id, updateCompanyDto);
  }

  @ApiTags('Companies')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.companiesService.remove(+id);
  }
}
