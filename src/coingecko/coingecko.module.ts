import { Module } from '@nestjs/common';
import { CoinController } from './coingecko.controller';
import { CoinService } from './coingecko.service';

@Module({
    controllers: [CoinController],
    providers: [CoinService],
})
export class CoingeckoModule {}
