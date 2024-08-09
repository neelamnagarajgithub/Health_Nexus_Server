import { Module } from '@nestjs/common';
import { SmsEmailController } from './sms-email.controller';
import { SmsEmailService } from './sms-email.service';
import { NotificationScheduler } from './notification.scheduler';
import { AppointmentsService } from 'src/appointments/appointments.service';
import { DoctorService } from 'src/doctor/doctor.service';
import { PatientsService } from 'src/patients/patients.service';
import { AppointmentsModule } from 'src/appointments/appointments.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [SmsEmailController],
  providers: [SmsEmailService,NotificationScheduler,PrismaService,AppointmentsService,DoctorService,PatientsService],
})
export class SmsEmailModule {}
