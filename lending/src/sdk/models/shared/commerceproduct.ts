/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProductVariant } from "./productvariant";
import { SupplementalData } from "./supplementaldata";
import { Expose, Type } from "class-transformer";

/**
 * A Product is an item in the company's inventory, and includes information about the price and quantity of all products, and variants thereof, available for sale.
 *
 * @remarks
 *
 * Explore our [data coverage](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-products) for this data type.
 *
 */
export class CommerceProduct extends SpeakeasyBase {
    /**
     * Retail category that the product is assigned to e.g. `Hardware`.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "categorization" })
    categorization?: string;

    /**
     * Description of the product recorded in the commerce or point of sale platform.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * A unique, persistent identifier for this record
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Whether the product represents a gift card or voucher that
     *
     * @remarks
     * can be redeemed in the commerce or POS platform.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isGiftCard" })
    isGiftCard?: boolean;

    /**
     * Name of the product in the commerce or POS system
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Supplemental data is additional data you can include in our standard data types.
     *
     * @remarks
     *
     * It is referenced as a configured dynamic key value pair that is unique to the accounting platform. [Learn more](https://docs.codat.io/using-the-api/supplemental-data/overview) about supplemental data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "supplementalData" })
    @Type(() => SupplementalData)
    supplementalData?: SupplementalData;

    @SpeakeasyMetadata({ elemType: ProductVariant })
    @Expose({ name: "variants" })
    @Type(() => ProductVariant)
    variants?: ProductVariant[];
}
