import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    first(): Promise<void>;
    getBalance(): Promise<void>;
    createname(): Promise<string>;
    updatetokens(): Promise<any>;
    deletetokens(): Promise<string>;
    getwatchlist(): Promise<string>;
}
