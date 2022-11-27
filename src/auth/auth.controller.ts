import { Tokens } from './types';
import { AuthDto } from './dto';
import { AuthService } from './auth.service';
import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('local/signup')
    @HttpCode(HttpStatus.CREATED)
    signupLocal(@Body() dto: AuthDto): Promise<Tokens>{
        return this.authService.signupLocal(dto)
    }

    @Post('local/signin')
    @HttpCode(HttpStatus.OK)
    signinLocal(@Body() dto: AuthDto): Promise<Tokens> {
        return this.authService.signinLocal(dto)
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('logout')
    @HttpCode(HttpStatus.OK)
    logout(@Req() req: Request){
        //const user = req.user;
        //return this.authService.logout(user['id'])
    }

    @UseGuards(AuthGuard('jwt-refresh'))
    @Post('refresh')
    refreshTokens(){
        //return this.authService.refreshTokens()
    }
}
