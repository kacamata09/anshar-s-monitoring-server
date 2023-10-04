import { PartialType } from '@nestjs/swagger';
import { CreateNetworkDatumDto } from './create-network-datum.dto';

export class UpdateNetworkDatumDto extends PartialType(CreateNetworkDatumDto) {}
