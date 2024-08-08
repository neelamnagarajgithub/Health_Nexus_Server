import { Controller ,Post,Body, Get} from '@nestjs/common';
import { AuthDto, LoginDto } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}
    @Post('signup')
    create(@Body() dto:AuthDto){
        return this.authService.signup(dto);
    }

    @Post('signin')
    getuser(@Body() dto:LoginDto){
        return this.authService.signin(dto);
    }
}
