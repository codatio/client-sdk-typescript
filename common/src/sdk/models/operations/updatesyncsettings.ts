/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Include a `syncSetting` object for each data type.
 *
 * @remarks
 * `syncFromWindow`, `syncFromUTC` & `monthsToSync` only need to be included if you wish to set a value for them.
 */
export class UpdateSyncSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "clientId" })
  clientId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "overridesDefaults" })
  overridesDefaults: boolean;

  @SpeakeasyMetadata({ elemType: shared.SyncSetting })
  @Expose({ name: "settings" })
  @Type(() => shared.SyncSetting)
  settings: shared.SyncSetting[];
}

export class UpdateSyncSettingsResponse extends SpeakeasyBase {
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
