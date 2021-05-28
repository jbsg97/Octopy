import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('companies')
export class Company {
    @PrimaryGeneratedColumn()
    company_id: number;

    @Column({ length: 255 })
    legal_name: string;
    
    @Column({ length: 255 })
    short_name: string;

    @Column({ length: 255 })
    account_name: string;

    @Column({ length: 255 })
    logo: string;

    @Column({ length: 255 })
    cover: string;

    @Column()
    created_at: string;

    @Column()
    updated_at: string;
}
