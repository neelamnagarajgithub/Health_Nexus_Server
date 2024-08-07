
import { IsDateString, IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { Bookingtype } from "./booking-type";

export class AppointDto{
   
    @IsNotEmpty()
    @IsDateString()
    date_from: string;

    @IsNotEmpty()
    @IsDateString()
    date_to: string;

    @IsNotEmpty()
    @IsEnum(Bookingtype)
    type: Bookingtype; // Assuming BookingType is a string, adjust if it's an enum

    @IsNotEmpty()
    @IsUUID()
    doctorId: string;

    @IsNotEmpty()
    @IsUUID()
    patientId: string;

}