import { Controller,Get, Param ,Body,Patch, Put, Delete} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { UpdatedDto } from './dto';

@Controller('patients')
export class PatientsController {
    constructor(private patientService:PatientsService){}

    @Get(':id')
  async dashboard(@Param() param: any) {
    const [profile, appointments] = await Promise.all([
      this.patientService.getprofile(param.id),
      this.patientService.appointments(param.id),
    ]);
    return { profile, appointments };
  }
    @Get('predict_doc/:id')
    predictdocs(@Param() param:any){
     return this.patientService.predicteddocs(param.id)
    }
   


    @Put(':id')
    updateDetails(@Param() param:any,@Body() updatedto:UpdatedDto){
        return this.patientService.updatedetails(param.id,updatedto);
    }

    @Delete(':id')
    deleteuser(@Param() param:any) {
        return this.patientService.deleteuser(param.id);
    }
}
