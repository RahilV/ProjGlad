import { Transactions } from "src/app/Models/Transactions";
import { Products } from "../test/test";


export class ProductsPurchased
{
    productPurchasedId:number;
    userId:number;
    product:Products;
    amountBillable:number;
    amountPayed:number;
    transactionId:Transactions;
    emiPeriod:number;
}