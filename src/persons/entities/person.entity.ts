import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity'
import { Company } from '../../companies/entities/company.entity'

@Entity('persons')
export class Person {
    @PrimaryGeneratedColumn()
    persons_id: number;

    @Column({ length: 255 })
    name: string;
    
    @Column({ length: 255 })
    first_name: string;

    @Column({ length: 255 })
    last_name: string;

    @Column()
    company_id: number;

    @Column()
    user_id: number;

    @Column()
    created_at: string;

    @Column()
    updated_at: string;
}
