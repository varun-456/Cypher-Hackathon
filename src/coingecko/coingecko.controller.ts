import { Controller, Post } from "@nestjs/common";
import { CoinService } from "./coingecko.service";

@Controller('coingecko')
export class CoinController {
    constructor(private coinService: CoinService){}

    @Post('signup')
    signup(){
        return this.coinService.signup();
    }

    @Post('signin')
    signin(){
        return this.coinService.signin();
    }
}