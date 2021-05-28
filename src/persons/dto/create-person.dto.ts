import { ApiProperty } from '@nestjs/swagger';
export class CreatePersonDto {
    @ApiProperty()
    name: string;
    
    @ApiProperty()
    first_name: string;

    @ApiProperty()
    last_name: string;

    @ApiProperty()
    company_id: number;

    @ApiProperty()
    user_id: number;
}
