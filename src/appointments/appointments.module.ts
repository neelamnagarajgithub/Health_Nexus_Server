import { Module } from '@nestjs/common';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaClient } from '@prisma/client';
import { SmsEmailService } from 'src/sms-email/sms-email.service';
import { DoctorModule } from 'src/doctor/doctor.module';

@Module({
  imports:[PrismaModule,DoctorModule],
  controllers: [AppointmentsController],
  providers: [AppointmentsService,PrismaClient],
 
})
export class AppointmentsModule {}
