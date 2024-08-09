import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaClient } from '@prisma/client';
import { HttpModule } from '@nestjs/axios';
import { AppointmentsService } from 'src/appointments/appointments.service';
import { NotificationScheduler } from 'src/sms-email/notification.scheduler';
@Module({
  imports: [PrismaModule,HttpModule],
  controllers: [PatientsController],
  providers: [PatientsService, PrismaClient,AppointmentsService],
  exports:[PatientsService]
})
export class PatientsModule {}
