import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor() {
        super({
            datasources:{
                db:{
                    url:"postgresql://healthnexus_user:2soIvojaMf9pTQR7nJdPOv6OMNCwlq0A@dpg-cqnvl1rv2p9s73aidj10-a.oregon-postgres.render.com/healthnexus"
                }
            }
        })
    }
}
