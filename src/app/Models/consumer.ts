import { EmiCard } from "./emi-card";
import { Users } from "./users";

export class Consumer {
    user:Users;
    fName:String;
    lName:String;
    phoneNo:number;
    address:String;
    card:EmiCard;
    ifscCode:String;
    isValidated:boolean;
    balance:number;
    savingAccNo: number;
}
