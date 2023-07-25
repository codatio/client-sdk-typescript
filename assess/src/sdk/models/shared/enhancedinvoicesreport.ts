/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EnhancedInvoiceReportItem } from "./enhancedinvoicereportitem";
import { ReportInfo } from "./reportinfo";
import { Expose, Type } from "class-transformer";

export class EnhancedInvoicesReportReportItems extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: EnhancedInvoiceReportItem })
    @Expose({ name: "invoices" })
    @Type(() => EnhancedInvoiceReportItem)
    invoices?: EnhancedInvoiceReportItem[];
}

/**
 * The enhanced invoices report takes the key elements of the Invoices report verifying those marked as paid in the accounting platform have actually been paid by matching with the bank statement.
 */
export class EnhancedInvoicesReport extends SpeakeasyBase {
    /**
     * Report additional information, which is specific to Assess reports
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reportInfo" })
    @Type(() => ReportInfo)
    reportInfo?: ReportInfo;

    @SpeakeasyMetadata({ elemType: EnhancedInvoicesReportReportItems })
    @Expose({ name: "reportItems" })
    @Type(() => EnhancedInvoicesReportReportItems)
    reportItems?: EnhancedInvoicesReportReportItems[];
}
