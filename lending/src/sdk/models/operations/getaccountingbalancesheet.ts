/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetAccountingBalanceSheetRequest extends SpeakeasyBase {
    /**
     * Unique identifier for a company.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    /**
     * Number of months defining the period of interest.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLength" })
    periodLength: number;

    /**
     * Number of periods with `periodLength` to compare.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodsToCompare" })
    periodsToCompare: number;

    /**
     * The month the report starts from.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startMonth" })
    startMonth?: string;
}

export class GetAccountingBalanceSheetResponse extends SpeakeasyBase {
    /**
     * Success
     */
    @SpeakeasyMetadata()
    accountingBalanceSheet?: shared.AccountingBalanceSheet;

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
