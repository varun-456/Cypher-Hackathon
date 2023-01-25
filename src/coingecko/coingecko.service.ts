import { Injectable,} from "@nestjs/common";
@Injectable({})
export class CoinService{
    signup() {
        return {msg : 'Im signed up'}
    }
    signin() {
        return {msg : 'Im signed in'}
    }
}