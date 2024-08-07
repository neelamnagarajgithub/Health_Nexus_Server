import { Module } from '@nestjs/common';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaClient } from '@prisma/client';

@Module({
  imports:[PrismaModule],
  controllers: [AppointmentsController],
  providers: [AppointmentsService,PrismaClient]
})
export class AppointmentsModule {}
