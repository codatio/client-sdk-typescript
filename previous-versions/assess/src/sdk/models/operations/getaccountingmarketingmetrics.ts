/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetAccountingMarketingMetricsRequest extends SpeakeasyBase {
    /**
     * Unique identifier for a company.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    /**
     * Unique identifier for a connection.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
    connectionId: string;

    /**
     * Shows the dimensionDisplayName and itemDisplayName in measures to make the report data human-readable.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDisplayNames" })
    includeDisplayNames?: boolean;

    /**
     * The number of periods to return. There will be no pagination as a query parameter.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPeriods" })
    numberOfPeriods: number;

    /**
     * The number of months per period. E.g. 2 = 2 months per period.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLength" })
    periodLength: number;

    /**
     * The period unit of time returned.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodUnit" })
    periodUnit: shared.PeriodUnit;

    /**
     * The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate" })
    reportDate: string;

    /**
     * If set to true, then the system includes the input values within the response.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showInputValues" })
    showInputValues?: boolean;
}

export class GetAccountingMarketingMetricsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The request made is not valid.
     */
    @SpeakeasyMetadata()
    errorMessage?: shared.ErrorMessage;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    report?: shared.Report;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
