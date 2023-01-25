import { Injectable } from '@nestjs/common';
import { DbService } from './shared';
// import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly dbservice:DbService) {}
  // async getHello(): Promise<string> {
  //   const result = await this.db.create('vitalikWatchlist', ['matic-network']);
  //   return `Hello Wold! ${JSON.stringify(result)}`;
  // }
  //1
  async first(){
    fetch('https://api.covalenthq.com/v1/1/address/0x52114fb7396dbe19096ffa343d18830f5d77b6c6/balances_v2/?key=ckey_41783967d1e5423b8d31b0c5446')           //api for the get request
    .then(response => response.json())
    .then(data => console.log(data));
  }
  //2.1
  async getBalance(){
    fetch('https://api.coingecko.com/api/v3/coins/list')           //api for the get request
  .then(response => response.json())
  .then(data => console.log(data));
   
}
   //2.2
  async createname(){
    return await this.dbservice.create("hii",[]);
  }
 //2.3
  async updatetokens(){
    return await this.dbservice.update("da361d20-7f6a-4d0c-8947-fc13e8d5804",["varun"]);
  }
 
  //2.4
  async deletetokens(){
    return await this.dbservice.deletestoken("da361d20-7f6a-4d0c-8947-fc13e8d5804c",[]);
  }
  //2.5
  async getwatchlist(){
    return await this.dbservice.findbyid("63fc94dd-4eff-494c-8395-ea4e43bd6063");
  }
  //2.6
  async deletewatchlist(){
    return await this.dbservice.deletes("da361d20-7f6a-4d0c-8947-fc13e8d5804c");
  }
  
}
