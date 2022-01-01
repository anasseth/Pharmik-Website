import { Item } from "./Item-Model";

export class Cart {
    uniqueOrderNumber?: string;
    trackingID?: string;
    checkout?: string;
    totalCost?: string;
    couponApplied?: boolean;
    couponCode?: string;
    orderDate?: string;
    // expectedDelivery?: string;
    // orderTime?: string;
    orderStatus?: string;
    paymentType?: string;
    creditCardType?: string;
    items?: Item[]
}