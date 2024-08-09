import { Injectable } from '@nestjs/common';
import { Cron } from 'node-cron';
import { SmsEmailService } from './sms-email.service';
import { AppointmentsService } from 'src/appointments/appointments.service';
import { PatientsService } from 'src/patients/patients.service';
import { DoctorService } from 'src/doctor/doctor.service';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class NotificationScheduler {
  constructor(
    private readonly smsEmailService: SmsEmailService,
    
    private readonly prisma:PrismaClient,
    private readonly patientService: PatientsService,
    private readonly DocService:DoctorService
  ) {
    this.scheduleNotifications();
  }

  scheduleNotifications() {
    Cron.schedule('*/2 * * * *', async () => { // Runs every 30 minutes
      const upcomingAppointments = await this.prisma.appointment.findMany(); // Fetch appointments within the next hour
      for (const appointment of upcomingAppointments) {
        const { patientId, doctorId, startTime } = appointment;
        const message = `Reminder: You have an appointment at ${startTime}.`;

        const patient = await this.patientService.getprofile(patientId);
      const doctor = await this.DocService.getprofile(doctorId);

        await this.smsEmailService.sendSms(patient.phone, message);
        await this.smsEmailService.sendEmail(patient.email, 'Appointment Reminder', message);
        await this.smsEmailService.sendSms(doctor.phone, message);
        await this.smsEmailService.sendEmail(doctor.email, 'Appointment Reminder', message);
      }
    });
  }
}