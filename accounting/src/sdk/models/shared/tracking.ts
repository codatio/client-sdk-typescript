/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InvoiceTo } from "./invoiceto";
import { Expose, Type } from "class-transformer";

/**
 * Links to the underlying record or data type.
 *
 * @remarks
 *
 * Found on:
 *
 * - Journal entries
 * - Account transactions
 * - Invoices
 * - Transfers
 */
export class TrackingInvoiceTo extends SpeakeasyBase {
  /**
   * Name of the 'dataType'.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType?: string;

  /**
   * 'id' of the underlying record or data type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;
}

export class Tracking extends SpeakeasyBase {
  /**
   * Links to the underlying record or data type.
   *
   * @remarks
   *
   * Found on:
   *
   * - Journal entries
   * - Account transactions
   * - Invoices
   * - Transfers
   */
  @SpeakeasyMetadata()
  @Expose({ name: "invoiceTo" })
  @Type(() => TrackingInvoiceTo)
  invoiceTo?: TrackingInvoiceTo;

  @SpeakeasyMetadata({ elemType: InvoiceTo })
  @Expose({ name: "recordRefs" })
  @Type(() => InvoiceTo)
  recordRefs: InvoiceTo[];
}