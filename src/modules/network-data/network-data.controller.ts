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
import { CreateNetworkDatumDto } from './dto/create-network-datum.dto';
import { UpdateNetworkDatumDto } from './dto/update-network-datum.dto';

import * as os from 'node-os-utils';

@Controller('network-data')
export class NetworkDataController {
  constructor(private readonly networkDataService: NetworkDataService) {}

  @Post()
  create(@Body() createNetworkDatumDto: CreateNetworkDatumDto) {
    return this.networkDataService.create(createNetworkDatumDto);
  }

  @Get()
  async findAll() {
    const cpuUsage = await os.cpu.usage();
    return { cpuUsage };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.networkDataService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNetworkDatumDto: UpdateNetworkDatumDto,
  ) {
    return this.networkDataService.update(+id, updateNetworkDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.networkDataService.remove(+id);
  }
}
