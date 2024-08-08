import { Body, Controller, Param, Put, Post, Delete } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointDto, rescheduleDto } from './dto';

@Controller('appointments')
export class AppointmentsController {
    constructor(private appointService:AppointmentsService){}

    @Post('new')
    create(@Body() dto:AppointDto){
        return this.appointService.create(dto);
    }

    @Put(':id')
    reschedule(@Param() param:any,@Body() updateddto:rescheduleDto){
        return this.appointService.reschedule(param.id,updateddto);
    }

    @Delete(':id')
    cancel(@Param() param:any){
        return this.appointService.cancel(param.id);
    }

}
