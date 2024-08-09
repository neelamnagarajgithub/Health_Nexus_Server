import { Controller,Get ,Param} from '@nestjs/common';
import { DoctorService } from './doctor.service';

@Controller('doctor')
export class DoctorController {
    constructor(private docService:DoctorService) {}

    @Get(':id')
    async getprofile(@Param() param:any){
       const [profile,schedules]=await Promise.all ([this.docService.getprofile(param.id),
        this.docService.schedules(param.id)]) 
    
    return {profile,schedules};
       }
}
