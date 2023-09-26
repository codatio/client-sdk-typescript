/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Report additional information, which is specific to Lending API reports.
 */
export class ReportInfo extends SpeakeasyBase {
    /**
     * The name of the company being queried.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "companyName" })
    companyName?: string;

    /**
     * Date the report was generated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generatedDate" })
    generatedDate?: string;

    /**
     * The number of the page queried.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pageNumber" })
    pageNumber?: number;

    /**
     * The number of transactions returned per page.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pageSize" })
    pageSize?: number;

    /**
     * Name of the report.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reportName" })
    reportName?: string;

    /**
     * The total number of transactions available for a company for the period specified in the query string.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalResults" })
    totalResults?: number;
}
