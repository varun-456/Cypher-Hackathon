import { Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('/')
  // async getHello(): Promise<string> {
  //   return this.appService.getHello();
  // }
  @Get('/')
  first(){
    return this.appService.first();
  }
  @Get('/getbalance')
  getBalance() {
       return this.appService.getBalance();
  }

  @Post('/createname')
  async createname(): Promise<string>{
    return await this.appService.createname();
  }

  @Post('/updatetokens')
  async updatetokens(){
    return await this.appService.updatetokens();
  }
  
  @Get('/deletetokens')
  async deletetokens(): Promise<string>{
    return await this.appService.deletetokens();
  }
  @Get('/getwatchlist')
  async getwatchlist(): Promise<string>{
    return await this.appService.getwatchlist();
  }
}
