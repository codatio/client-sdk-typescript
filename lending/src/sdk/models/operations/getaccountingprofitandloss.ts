/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetAccountingProfitAndLossRequest extends SpeakeasyBase {
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

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startMonth" })
    startMonth?: string;
}

export class GetAccountingProfitAndLossResponse extends SpeakeasyBase {
    /**
     * Success
     */
    @SpeakeasyMetadata()
    accountingProfitAndLossReport?: shared.AccountingProfitAndLossReport;

    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Your API request was not properly authorized.
     */
    @SpeakeasyMetadata()
    errorMessage?: shared.ErrorMessage;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
