import { Test, TestingModule } from '@nestjs/testing';
import { SmsEmailController } from './sms-email.controller';

describe('SmsEmailController', () => {
  let controller: SmsEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmsEmailController],
    }).compile();

    controller = module.get<SmsEmailController>(SmsEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
