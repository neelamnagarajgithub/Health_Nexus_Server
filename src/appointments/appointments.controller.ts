import { Body, Controller, Param, Put, Post, Delete, Get } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointDto, rescheduleDto } from './dto';

@Controller('appointments')
export class AppointmentsController {
    constructor(private appointService:AppointmentsService){}

    @Get('alldoc')
    alldocs(){
        return this.appointService.alldocs();
    }

    @Post()
    predict_doctor(){
        
    }

    @Post('new/:id')
    create(@Body() dto:AppointDto,@Param() id:string){
        return this.appointService.create(dto,id);
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
