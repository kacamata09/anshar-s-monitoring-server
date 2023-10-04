import { Injectable, Logger } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';

@Injectable()
export class LoggersService {
  constructor() {}
  private readonly logger = new Logger(LoggersService.name);

  async logMessage(message: CreateLogDto) {
    this.logger.log(message);
  }

  findAll() {
    return `This action returns all loggers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logger`;
  }

  remove(id: number) {
    return `This action removes a #${id} logger`;
  }
}
