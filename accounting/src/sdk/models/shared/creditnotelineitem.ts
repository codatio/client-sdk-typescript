/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountRef } from "./accountref";
import { BilledToTypeEnum1 } from "./billedtotypeenum1";
import { CustomerRef } from "./customerref";
import { ItemRef } from "./itemref";
import { ProjectRef } from "./projectref";
import { TaxRateRef } from "./taxrateref";
import { TrackingCategoryRef } from "./trackingcategoryref";
import { Expose, Type } from "class-transformer";

/**
 * Categories, and a project and customer, against which the item is tracked.
 */
export class CreditNoteLineItemTracking extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TrackingCategoryRef })
  @Expose({ name: "categoryRefs" })
  @Type(() => TrackingCategoryRef)
  categoryRefs: TrackingCategoryRef[];

  @SpeakeasyMetadata()
  @Expose({ name: "customerRef" })
  @Type(() => CustomerRef)
  customerRef?: CustomerRef;

  @SpeakeasyMetadata()
  @Expose({ name: "isBilledTo" })
  isBilledTo: BilledToTypeEnum1;

  @SpeakeasyMetadata()
  @Expose({ name: "isRebilledTo" })
  isRebilledTo: BilledToTypeEnum1;

  @SpeakeasyMetadata()
  @Expose({ name: "projectRef" })
  @Type(() => ProjectRef)
  projectRef?: ProjectRef;
}

export class CreditNoteLineItem extends SpeakeasyBase {
  /**
   * Data types that reference an account, for example bill and invoice line items, use an accountRef that includes the ID and name of the linked account.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => AccountRef)
  accountRef?: AccountRef;

  /**
   * Friendly name of each line item. For example, the goods or service for which credit has been issued.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * Value of any discounts applied.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "discountAmount" })
  discountAmount?: number;

  /**
   * Percentage rate of any discount applied to the line item.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "isDirectIncome" })
  isDirectIncome?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "itemRef" })
  @Type(() => ItemRef)
  itemRef?: ItemRef;

  /**
   * Number of units of the goods or service for which credit has been issued.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity: number;

  /**
   * Amount of credit associated with the line item, including discounts but excluding tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "subTotal" })
  subTotal?: number;

  /**
   * Amount of tax associated with the line item.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxAmount" })
  taxAmount?: number;

  /**
   * Data types that reference a tax rate, for example invoice and bill line items, use a taxRateRef that includes the ID and name of the linked tax rate.
   *
   * @remarks
   *
   * Found on:
   *
   * - Bill line items
   * - Bill Credit Note line items
   * - Credit Note line items
   * - Direct incomes line items
   * - Invoice line items
   * - Items
   */
  @SpeakeasyMetadata()
  @Expose({ name: "taxRateRef" })
  @Type(() => TaxRateRef)
  taxRateRef?: TaxRateRef;

  /**
   * Total amount of the line item, including discounts and tax.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalAmount" })
  totalAmount?: number;

  /**
   * Categories, and a project and customer, against which the item is tracked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tracking" })
  @Type(() => CreditNoteLineItemTracking)
  tracking?: CreditNoteLineItemTracking;

  /**
   * Reference to the tracking categories to which the line item is linked.
   */
  @SpeakeasyMetadata({ elemType: TrackingCategoryRef })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => TrackingCategoryRef)
  trackingCategoryRefs?: TrackingCategoryRef[];

  /**
   * Unit price of the goods or service.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "unitAmount" })
  unitAmount: number;
}
