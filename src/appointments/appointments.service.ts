import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AppointDto } from './dto/appoint.dto';
import { rescheduleDto } from './dto';

@Injectable()
export class AppointmentsService {
  constructor(private readonly prisma:PrismaClient){}

  async create(dto:AppointDto){
   const new_appointment=await this.prisma.appointment.create({
    data:{
      startTime: dto.date_from,
      endTime: dto.date_to,
      type: dto.type,
      doctorId: dto.doctorId,
      patientId: dto.patientId,
      },
    });
    return new_appointment;
  }

  async reschedule(id:string,updateddto:rescheduleDto){
    const appoin=await this.prisma.appointment.update({
      where:{
        id:id
      },
      data:{
        startTime: updateddto.date_from,
        endTime: updateddto.date_to,
        type: updateddto.type,
      }
    });
    return appoin;
  }
  async cancel(id:string){
    const deleted= await this.prisma.appointment.delete({
      where:{
        id:id
      }
    });
    return "deleted successfully";
  }
}