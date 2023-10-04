import { Module } from '@nestjs/common';
import { NetworkDataService } from './network-data.service';
import { NetworkDataController } from './network-data.controller';

@Module({
  controllers: [NetworkDataController],
  providers: [NetworkDataService]
})
export class NetworkDataModule {}
