/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateAccountingDirectIncomeRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    accountingDirectIncome?: shared.AccountingDirectIncome;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
    companyId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
    connectionId: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
    timeoutInMinutes?: number;
}

export class CreateAccountingDirectIncomeResponse extends SpeakeasyBase {
    /**
     * Success
     */
    @SpeakeasyMetadata()
    accountingCreateDirectIncomeResponse?: shared.AccountingCreateDirectIncomeResponse;

    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The request made is not valid.
     */
    @SpeakeasyMetadata()
    errorMessage?: shared.ErrorMessage;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
