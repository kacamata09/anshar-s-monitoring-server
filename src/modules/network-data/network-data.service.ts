import { Injectable } from '@nestjs/common';
import { CreateNetworkDatumDto } from './dto/create-network-datum.dto';
import { UpdateNetworkDatumDto } from './dto/update-network-datum.dto';

@Injectable()
export class NetworkDataService {
  create(createNetworkDatumDto: CreateNetworkDatumDto) {
    return 'This action adds a new networkDatum';
  }

  findAll() {
    return `This action returns all networkData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} networkDatum`;
  }

  update(id: number, updateNetworkDatumDto: UpdateNetworkDatumDto) {
    return `This action updates a #${id} networkDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} networkDatum`;
  }
}
