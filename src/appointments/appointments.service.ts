import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AppointDto } from './dto/appoint.dto';

@Injectable()
export class AppointmentsService {
  constructor(private readonly prisma:PrismaClient){}

  async create(dto:AppointDto){
   const new_appoint=await this.prisma.appointment.create({
    data:{
        startTime: dto.date_from,
        endTime:dto.date_to,
        type: dto.type,
        doctorId: dto.doctorId,
        patientId: dto.patientId,
      },
    });
    return new_appoint;
  }
}