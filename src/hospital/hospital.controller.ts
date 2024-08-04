import { Controller,Get } from '@nestjs/common';

@Controller('hospital')
export class HospitalController {
    @Get('')
    findAll() {
        return 'This action returns all hospitals';
    }
}
