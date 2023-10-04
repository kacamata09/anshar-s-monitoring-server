import { Test, TestingModule } from '@nestjs/testing';
import { NetworkDataService } from './network-data.service';

describe('NetworkDataService', () => {
  let service: NetworkDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NetworkDataService],
    }).compile();

    service = module.get<NetworkDataService>(NetworkDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
