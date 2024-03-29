/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { RFCDate } from "../../../sdk/types";
import { AxiosResponse } from "axios";

export class GetAgedDebtorsReportRequest extends SpeakeasyBase {
    /**
     * Unique identifier for a company.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    /**
     * Number of periods to include in the report.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPeriods" })
    numberOfPeriods?: number;

    /**
     * The length of period in days.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLengthDays" })
    periodLengthDays?: number;

    /**
     * Date the report is generated up to.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate" })
    reportDate?: RFCDate;
}

export class GetAgedDebtorsReportResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata()
    agedDebtorReport?: shared.AgedDebtorReport;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Your API request was not properly authorized.
     */
    @SpeakeasyMetadata()
    errorMessage?: shared.ErrorMessage;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
