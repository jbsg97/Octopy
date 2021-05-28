import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

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

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
