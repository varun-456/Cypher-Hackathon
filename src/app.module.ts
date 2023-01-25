import { SharedModule } from './shared';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoingeckoModule } from './coingecko/coingecko.module';
import { HttpModule} from '@nestjs/axios';

@Module({
  imports: [SharedModule, CoingeckoModule,HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
