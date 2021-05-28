import { ApiProperty } from '@nestjs/swagger';
export class CreateCompanyDto {
    @ApiProperty()
    company_id: number;

    @ApiProperty()
    legal_name: string;
    
    @ApiProperty()
    short_name: string;

    @ApiProperty()
    account_name: string;

    @ApiProperty()
    logo: string;

    @ApiProperty()
    cover: string;
}
