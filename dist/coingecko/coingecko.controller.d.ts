import { CoinService } from "./coingecko.service";
export declare class CoinController {
    private coinService;
    constructor(coinService: CoinService);
    signup(): {
        msg: string;
    };
    signin(): {
        msg: string;
    };
}
