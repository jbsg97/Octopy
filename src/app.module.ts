import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity'
import { Company } from './companies/entities/company.entity'
import { Person } from './persons/entities/person.entity'
import { CompaniesModule } from './companies/companies.module';
import { PersonsModule } from './persons/persons.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "db",
      "port": 3306,
      "username": "root",
      "password": "OctopyAdmin*",
      "database": "Octopy",
      "entities": [User, Company, Person],
      "synchronize": true
  }),
    UsersModule,
    CompaniesModule,
    PersonsModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
