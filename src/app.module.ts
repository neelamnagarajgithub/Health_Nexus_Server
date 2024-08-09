import { Module } from '@nestjs/common';
import { HospitalModule } from './hospital/hospital.module';
import { PatientsModule } from './patients/patients.module';
import { DoctorModule } from './doctor/doctor.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { AuthModule } from './auth/auth.module';
import { SmsEmailModule } from './sms-email/sms-email.module';
import { AppointmentsService } from './appointments/appointments.service';

@Module({
  imports: [HospitalModule, PatientsModule, DoctorModule, PrismaModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
