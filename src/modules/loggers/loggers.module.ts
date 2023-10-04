import { Module, Logger } from '@nestjs/common';
import { LoggersService } from './loggers.service';
import { LoggersController } from './loggers.controller';

@Module({
  imports: [],
  controllers: [LoggersController],
  providers: [LoggersService],
})
export class LoggersModule {}
