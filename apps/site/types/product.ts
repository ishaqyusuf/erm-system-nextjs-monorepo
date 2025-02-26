import { InventoryProducts, ProductVariants, Products } from "@/db";
import { OmitMeta } from "./type";

export interface IProduct extends InventoryProducts {
    variants: IProductVariant[];
}

export type IProductVariant = OmitMeta<ProductVariants> & {
    meta: IProductVariantMeta;
    product: LegacyProduct;
};
export interface IProductVariantMeta {
    componentTitle;
}
export interface LegacyProduct extends OmitMeta<InventoryProducts> {}

