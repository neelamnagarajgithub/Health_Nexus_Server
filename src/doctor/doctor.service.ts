import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DoctorService {
  constructor(private prisma:PrismaService){}
  async getprofile(id:string){
    const dto=await this.prisma.doctor.findUnique({
        where:{
            id:id
        }
    })
    return dto;
}

async schedules(id:string) {
    return await this.prisma.appointment.findMany({
        where:{
            doctorId:id,
        }
    })
} 


}
