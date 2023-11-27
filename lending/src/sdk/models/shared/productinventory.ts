/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProductInventoryLocation } from "./productinventorylocation";
import { Expose, Type } from "class-transformer";

/**
 * Information about the total inventory as well as the locations inventory is in.
 */
export class ProductInventory extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: ProductInventoryLocation })
    @Expose({ name: "locations" })
    @Type(() => ProductInventoryLocation)
    locations?: ProductInventoryLocation[];

    /**
     * The total quantity of stock remaining across locations.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalQuantity" })
    totalQuantity?: number;
}
