import { Module } from '@nestjs/common';
import { HospitalController } from './hospital.controller';
import { HospitalService } from './hospital.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaClient } from '@prisma/client';

@Module({
  imports:[PrismaModule],
  controllers: [HospitalController],
  providers: [HospitalService,PrismaClient]
})
export class HospitalModule {}
