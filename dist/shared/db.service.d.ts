export declare class DbService {
    private WatchLists;
    constructor();
    findbyid(key: string): Promise<any>;
    create(name: string, data: Array<string>): Promise<any>;
    update(key: string, data: Array<string>): Promise<any>;
    deletes(key: string): Promise<any>;
    deletestoken(key: string, data: Array<string>): Promise<any>;
}
