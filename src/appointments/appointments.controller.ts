import { Body, Controller, Post } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointDto } from './dto';

@Controller('appointments')
export class AppointmentsController {
    constructor(private appointService:AppointmentsService){}

    @Post('new')
    create(@Body() dto:AppointDto){
        return this.appointService.create(dto);
    }
}
