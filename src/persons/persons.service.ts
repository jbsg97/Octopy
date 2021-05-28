import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private readonly personsRepository: Repository<Person>,
  ) {}

  async create(createPersonDto: CreatePersonDto) {
    const person = this.personsRepository.create(createPersonDto as any);
    return await this.personsRepository.save(person);
  }

  async findAll() {
    return await this.personsRepository.find();
  }

  async findOne(id: number) {
    return await this.personsRepository.findOne(id);
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    const person = await this.personsRepository.findOne(id);

    if (!person) throw new NotFoundException('Person does not exists');

    const editedPerson = Object.assign(person, updatePersonDto);
    return await this.personsRepository.save(editedPerson);
  }

  async remove(id: number) {
    return await this.personsRepository.delete(id);
  }
}
