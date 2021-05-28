import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    system_status_id: number;

    @ApiProperty()
    confirmation_code: string;

    @ApiProperty()
    confirmed_at: string;

    @ApiProperty()
    accepted_conditions_at: string;

    @ApiProperty()
    registration_method: string;

    @ApiProperty()
    token: string;
    
    @ApiProperty()
    recovery_password_code: string;
}
