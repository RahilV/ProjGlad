import { EmiCard } from "./emi-card";
import { Users } from "./users";

export class Consumer {
    user:Users;
    fname:String;
    lname:String;
    phoneNo:number;
    address:String;
    card:EmiCard;
    savingsAccountNumber:number;
    ifscCode:String;
    isValidated:boolean;
    balance:number;
}
