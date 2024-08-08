import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UpdatedDto } from './dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { AppointmentsService } from 'src/appointments/appointments.service';

@Injectable()
export class PatientsService {
    constructor(private readonly prisma:PrismaClient,private readonly httpService:HttpService){}
    async getprofile(id:string){
        const dto=await this.prisma.patient.findUnique({
            where:{
                id:id
            }
        })
        return dto;
    }

    async appointments(id:string) {
        const appointment= await this.prisma.appointment.findMany({
            where:{
                patientId:id,
            }
        })
        return appointment;
    }

    async MyEMRs(id:string){
        const user=await await this.prisma.patient.findUnique({
            where:{
                id:id
            }
        })
        if (!user) {
            throw new Error('User not found');
          }
          const apiCallPromise = lastValueFrom(
            this.httpService.get(`https://medivault-server.onrender.com/api/v1/user/${user.email}`)
          );
      
        const response = await apiCallPromise;
        const data = response.data;
        return data;
    }

    async updatedetails(id:string,dto:UpdatedDto){
        const updateduser=await this.prisma.patient.update({
            where:{
                id:id,
            },
            data:{
                name:dto.name,
                phone:dto.phone,
                password:dto.password
            }
        })
        return updateduser;
    }


    async deleteuser(id:string ){
        await this.prisma.patient.delete({
            where:{
                id:id
            }
        })
        return 'User Deleted successfully';
    }
}
