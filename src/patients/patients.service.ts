import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UpdatedDto } from './dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { AppointmentsService } from 'src/appointments/appointments.service';
import axios from 'axios';

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

    async predicteddocs(id:string){
        const user=await  this.prisma.patient.findUnique({
            where:{
                id:id
            }
        })
        if (!user) {
            throw new Error('User not found');
          }
          try {
            const response = await axios.get(`https://medivault-server.onrender.com/api/v1/user/${user.email}`);
            const data = response.data; 
            
          
            const response2 = await axios.post('https://healthnexus-model.onrender.com/predict', JSON.stringify(data), {
              headers: {
                'Content-Type': 'application/json'
              }
            });
          
            const data2 = response2.data;
            const resp=await this.prisma.doctor.findMany({
                where:{
                    specilization:  data2.specialty
                }
            })
            console.log("Doctors sent successfully");
            return resp;
          } catch (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.error('Error response data:', error.response.data);
              console.error('Error response status:', error.response.status);
              console.error('Error response headers:', error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              console.error('Error request:', error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.error('Error message:', error.message);
            }
            console.error('Error config:', error.config);
            throw new Error('An error occurred while making the API call');
          }
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
