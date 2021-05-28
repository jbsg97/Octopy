import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

    @Column()
    created_at: string;

    @Column()
    updated_at: string;

    @Column({ length: 40 })
    registration_method: string;

    @Column()
    token: string;

    @Column({ length: 200 })
    recovery_password_code: string;
}
