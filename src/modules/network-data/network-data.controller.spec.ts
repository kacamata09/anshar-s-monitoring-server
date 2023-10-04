import { Test, TestingModule } from '@nestjs/testing';
import { NetworkDataController } from './network-data.controller';
import { NetworkDataService } from './network-data.service';

describe('NetworkDataController', () => {
  let controller: NetworkDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NetworkDataController],
      providers: [NetworkDataService],
    }).compile();

    controller = module.get<NetworkDataController>(NetworkDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
