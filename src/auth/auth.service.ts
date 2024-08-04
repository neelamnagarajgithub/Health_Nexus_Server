import { Injectable ,NotFoundException} from '@nestjs/common';
import { AuthDto, LoginDto } from './dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}
    async signup(dto:AuthDto){
        if(dto.Role=='doc'){
           const newdoc= await this.prisma.doctor.create({
                data:{
                    name:dto.name,
                    email:dto.email,
                    password:dto.password,
                    specilization:dto.specilization,
                    Licensenum:dto.Licensenum,
                }
            })
            return newdoc;
        }
        if(dto.Role=='pat'){
            const newpatient=await this.prisma.patient.create({
                data:{
                    name:dto.name,
                    email:dto.email,
                    password:dto.password,
                    phone:dto.phone
                }
            })
            return newpatient;
        }
        if(dto.Role=='hos'){
            const newhospital=await this.prisma.hospital.create({
                data:{
                    email:dto.email,
                    password:dto.password,
                    name:dto.name,
                    address:dto.address,
                    phone:dto.phone
                }
            })
            return newhospital;
        }
    }

    async signin(dto : LoginDto){
        const c1=await this.prisma.doctor.findUnique({
                where:{
                    email:dto.email,
                    password:dto.password
                }
        })
        const c2=await this.prisma.hospital.findUnique({
                where:{
                    email:dto.email,
                    password:dto.password
                }
        })
        const c3=await this.prisma.hospital.findUnique({
                where:{
                    email:dto.email,
                    password:dto.password
                }
        })
       if(c1!=null){return c1;}
      else  if(c2!=null){return c2;}
      else  if(c3!=null){return c3;}
      else{
        throw new NotFoundException('User not found');
      }
    }
}
