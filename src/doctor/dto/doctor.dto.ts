import { IsBtcAddress, IsNotEmpty, IsString } from "class-validator";

export class DocDto{
    @IsString()
    name:string;

    @IsNotEmpty()
    address:string

    

}