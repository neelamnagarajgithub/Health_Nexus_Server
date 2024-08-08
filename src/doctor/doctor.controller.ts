import { Controller,Get ,Param} from '@nestjs/common';
import { DoctorService } from './doctor.service';

@Controller('doctor')
export class DoctorController {
    constructor(private docService:DoctorService) {}

    @Get('myprofile/:id')
    getprofile(@Param() param:any){
        return this.docService.getprofile(param.id);
    }

    @Get("myschedules/:id")
    getSchedules(@Param() param:any) {
        return this.docService.schedules(param.id);
    }
}
