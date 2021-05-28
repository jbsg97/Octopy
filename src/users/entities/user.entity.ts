import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({ length: 191 })
    email: string;
    
    @Column({ length: 255 })
    password: string;

    @Column('int')
    system_status_id: number;

    @Column({ length: 191 })
    confirmation_code: string;

    @Column()
    confirmed_at: string;

    @Column()
    accepted_conditions_at: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({ length: 40 })
    registration_method: string;

    @Column()
    token: string;

    @Column({ length: 200 })
    recovery_password_code: string;
}
