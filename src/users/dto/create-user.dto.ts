export class CreateUserDto {
    email: string;

    password: string;

    system_status_id: number;

    confirmation_code: string;

    confirmed_at: string;

    accepted_conditions_at: string;

    created_at: string;

    updated_at: string;

    registration_method: string;

    token: string;
    
    recovery_password_code: string;
}
