import { Injectable } from '@nestjs/common';
import { CreateNetworkDatumDto } from './dto/create-network-datum.dto';
import { UpdateNetworkDatumDto } from './dto/update-network-datum.dto';
import { exec } from 'child_process';

import * as os from 'node-os-utils';

@Injectable()
export class NetworkDataService {
  async getMonitoringServer() {
    // monitoring
    const cpu = os.cpu;
    const cpuUsage = await cpu.usage();
    const cpuFree = 100 - cpuUsage;

    // format return
    const formatMonitoring = {
      cpuUsage,
      cpuFree,
    };

    return formatMonitoring;
  }
}
