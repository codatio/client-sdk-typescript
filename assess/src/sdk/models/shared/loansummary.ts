/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LoanSummaryReportInfo } from "./loansummaryreportinfo";
import { ReportItems } from "./reportitems";
import { Expose, Type } from "class-transformer";

/**
 * OK
 */
export class LoanSummary extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "reportInfo" })
    @Type(() => LoanSummaryReportInfo)
    reportInfo?: LoanSummaryReportInfo;

    /**
     * Returns a summary of all loan activity for that integration type
     */
    @SpeakeasyMetadata({ elemType: ReportItems })
    @Expose({ name: "reportItems" })
    @Type(() => ReportItems)
    reportItems?: ReportItems[];
}
