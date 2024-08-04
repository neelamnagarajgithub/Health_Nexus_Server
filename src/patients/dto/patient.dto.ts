import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator"

export class UpdatedDto{

    @IsString()
    password:string;

    name:string;


    @IsPhoneNumber()
    phone:string;
    
    @IsString()
    address:string
}   