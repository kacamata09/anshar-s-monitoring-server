import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LoggersService } from './loggers.service';
import { CreateLogDto } from './dto/create-log.dto';

@Controller('loggers')
export class LoggersController {
  constructor(private readonly loggersService: LoggersService) {}

  @Post()
  logMessage(@Body() message: CreateLogDto) {
    return this.loggersService.logMessage(message);
  }

  @Get()
  findAll() {
    return this.loggersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loggersService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loggersService.remove(+id);
  }
}
