import { Products } from "./products";
import { Transactions } from "./Transactions";

export class ProductPurchased {
    productPurchasedId:number=0;
    userId:number=0;
    emiDuration:String='';
    product:Products[];
    transaction:Transactions;
}
