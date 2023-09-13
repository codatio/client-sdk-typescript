/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateVisibleAccountsSyncFlowRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    visibleAccounts?: shared.VisibleAccounts;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platformKey" })
    platformKey: string;
}

export class UpdateVisibleAccountsSyncFlowResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Success
     */
    @SpeakeasyMetadata()
    visibleAccounts?: shared.VisibleAccounts;
}
