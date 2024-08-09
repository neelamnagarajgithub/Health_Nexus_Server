import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';
import * as nodemailer from 'nodemailer';

@Injectable()
export class SmsEmailService {
  private twilioClient: Twilio;
  private emailTransporter: nodemailer.Transporter;

  constructor() {
    this.twilioClient = new Twilio(process.env.TWILIO_ACC_SID, process.env.TWILIO_AUTH_TOKEN);
    this.emailTransporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT, 10),
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: "healthnexus.genzverse@gmail.com",
        pass: "healthnexus@123",
      },
    });
  }

  async sendSms(to: string, body: string): Promise<void> {
    await this.twilioClient.messages.create({
      body,
      from: '+19142905898',
      to,
    });
  }

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    await this.emailTransporter.sendMail({
      from: 'healthnexus.genzverse@gmail.com',
      to,
      subject,
      text,
    });
  }
}