import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NetworkDataService } from './network-data.service';

@Controller('network-data')
export class NetworkDataController {
  constructor(private readonly networkDataService: NetworkDataService) {}

  @Get()
  async getMonitoringServer() {
    
    return this.networkDataService.getMonitoringServer();
  }
}
