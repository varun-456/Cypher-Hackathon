"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const shared_1 = require("./shared");
let AppService = class AppService {
    constructor(dbservice) {
        this.dbservice = dbservice;
    }
    async first() {
        fetch('https://api.covalenthq.com/v1/1/address/0x52114fb7396dbe19096ffa343d18830f5d77b6c6/balances_v2/?key=ckey_41783967d1e5423b8d31b0c5446')
            .then(response => response.json())
            .then(data => console.log(data));
    }
    async getBalance() {
        fetch('https://api.coingecko.com/api/v3/coins/list')
            .then(response => response.json())
            .then(data => console.log(data));
    }
    async createname() {
        return await this.dbservice.create("hii", []);
    }
    async updatetokens() {
        return await this.dbservice.update("da361d20-7f6a-4d0c-8947-fc13e8d5804", ["varun"]);
    }
    async deletetokens() {
        return await this.dbservice.deletestoken("da361d20-7f6a-4d0c-8947-fc13e8d5804c", []);
    }
    async getwatchlist() {
        return await this.dbservice.findbyid("63fc94dd-4eff-494c-8395-ea4e43bd6063");
    }
    async deletewatchlist() {
        return await this.dbservice.deletes("da361d20-7f6a-4d0c-8947-fc13e8d5804c");
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [shared_1.DbService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map