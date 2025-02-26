import { IUser } from "@/types/hrm";
import { ISalesOrder } from "@/types/sales";
import { SalesCommision } from "@/db";

export interface ICommissions extends Omit<SalesCommision, "meta"> {
    user: IUser;
    order: ISalesOrder;
}

