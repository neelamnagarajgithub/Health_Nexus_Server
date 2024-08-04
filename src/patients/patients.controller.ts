import { Controller,Get, Param ,Body,Patch, Put, Delete} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { UpdatedDto } from './dto';

@Controller('patients')
export class PatientsController {
    constructor(private patientService:PatientsService){}

    @Get(':id')
    profile(@Param() param:any ){
        return this.patientService.getprofile(param.id);
    }

    @Get('myemr/:id')
    myemrs(@Param() param:any) {
        return this.patientService.MyEMRs(param.id)

    }

    @Get('my_appointments/:id')
    appointments(@Param() param:any ) {
        return this.patientService.appointments(param.id);
    }

    @Put(':id')
    updateDetails(@Param() param:any,@Body() updatedto:UpdatedDto){
        return this.patientService.updatedetails(param.id,updatedto);
    }

    @Delete('id')
    deleteuser(@Param() param:any) {
        return this.patientService.deleteuser(param.id);
    }
}
