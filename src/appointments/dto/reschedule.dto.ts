import { IsDateString, IsEnum, IsNotEmpty, IsUUID } from "class-validator";
import { Bookingtype } from "./booking-type";

export class rescheduleDto{
    @IsDateString()
    date_from: string;

    @IsNotEmpty()
    @IsDateString()
    date_to: string;

    @IsNotEmpty()
    @IsEnum(Bookingtype)
    type: Bookingtype; // Assuming BookingType is a string, adjust if it's an enum
}