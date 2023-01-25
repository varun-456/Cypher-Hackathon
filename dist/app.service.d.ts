import { DbService } from './shared';
export declare class AppService {
    private readonly dbservice;
    constructor(dbservice: DbService);
    first(): Promise<void>;
    getBalance(): Promise<void>;
    createname(): Promise<any>;
    updatetokens(): Promise<any>;
    deletetokens(): Promise<any>;
    getwatchlist(): Promise<any>;
    deletewatchlist(): Promise<any>;
}
