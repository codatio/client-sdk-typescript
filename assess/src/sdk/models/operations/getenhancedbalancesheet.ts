/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetEnhancedBalanceSheetRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

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
     * The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate" })
    reportDate: string;
}

export class GetEnhancedBalanceSheetResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    report?: shared.Report;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Your API request was not properly authorized.
     */
    @SpeakeasyMetadata()
    schema?: shared.Schema;
}
