/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InvoiceLevelSelection } from "./invoicelevelselection";
import { InvoiceLineLevelSelection } from "./invoicelinelevelselection";
import { Expose, Type } from "class-transformer";

export class GroupingLevels extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "invoiceLevel" })
    @Type(() => InvoiceLevelSelection)
    invoiceLevel?: InvoiceLevelSelection;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceLineLevel" })
    @Type(() => InvoiceLineLevelSelection)
    invoiceLineLevel?: InvoiceLineLevelSelection;
}
