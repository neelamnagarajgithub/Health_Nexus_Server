import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator"

export class AuthDto{
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsString()
    password:string;

    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    specilization:string;

    @IsNotEmpty()
    Licensenum:string;

    @IsNotEmpty()
    Role:string;

    @IsPhoneNumber()
    phone:string;
    
    @IsNotEmpty()
    @IsString()
    address:string
}   