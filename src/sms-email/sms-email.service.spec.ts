import { Test, TestingModule } from '@nestjs/testing';
import { SmsEmailService } from './sms-email.service';

describe('SmsEmailService', () => {
  let service: SmsEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmsEmailService],
    }).compile();

    service = module.get<SmsEmailService>(SmsEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
