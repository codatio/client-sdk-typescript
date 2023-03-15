import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

// PostProfileSyncSettingsRequestBodySyncSetting
/**
 * Describes how often, and how much history, should be fetched for the given data type when a pull operation is queued.
 **/
export class PostProfileSyncSettingsRequestBodySyncSetting extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dataType" })
  dataType: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fetchOnFirstLink" })
  fetchOnFirstLink: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "isLocked" })
  isLocked?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "monthsToSync" })
  monthsToSync?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "syncFromUtc" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  syncFromUtc?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "syncFromWindow" })
  syncFromWindow?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "syncOrder" })
  syncOrder: number;

  @SpeakeasyMetadata()
  @Expose({ name: "syncSchedule" })
  syncSchedule: number;
}

export class PostProfileSyncSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "clientId" })
  clientId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "overridesDefaults" })
  overridesDefaults: boolean;

  @SpeakeasyMetadata({
    elemType: PostProfileSyncSettingsRequestBodySyncSetting,
  })
  @Expose({ name: "settings" })
  @Type(() => PostProfileSyncSettingsRequestBodySyncSetting)
  settings: PostProfileSyncSettingsRequestBodySyncSetting[];
}

export class PostProfileSyncSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostProfileSyncSettingsRequestBody;
}

export class PostProfileSyncSettings401ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "canBeRetried" })
  canBeRetried?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "detailedErrorCode" })
  detailedErrorCode?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "service" })
  service?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode?: number;
}

export class PostProfileSyncSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  postProfileSyncSettings401ApplicationJSONObject?: PostProfileSyncSettings401ApplicationJSON;
}
