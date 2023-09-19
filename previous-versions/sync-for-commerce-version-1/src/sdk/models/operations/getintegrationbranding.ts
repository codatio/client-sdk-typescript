/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetIntegrationBrandingRequest extends SpeakeasyBase {
    /**
     * PlatformKey
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platformKey" })
    platformKey: string;
}

export class GetIntegrationBrandingResponse extends SpeakeasyBase {
    /**
     * Success
     */
    @SpeakeasyMetadata()
    branding?: shared.Branding;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}