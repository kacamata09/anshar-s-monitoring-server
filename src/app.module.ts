import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { LoggersModule } from './modules/loggers/loggers.module';
import { NetworkDataModule } from './modules/network-data/network-data.module';

@Module({
  imports: [UserModule, LoggersModule, NetworkDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
