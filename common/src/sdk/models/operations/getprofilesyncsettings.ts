import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetProfileSyncSettings401ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canBeRetried" })
  canBeRetried?: string;

  @SpeakeasyMetadata({ data: "json, name=correlationId" })
  correlationId?: string;

  @SpeakeasyMetadata({ data: "json, name=detailedErrorCode" })
  detailedErrorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;
}

// GetProfileSyncSettings200ApplicationJSONSyncSetting
/** 
 * Describes how often, and how much history, should be fetched for the given data type when a pull operation is queued.
**/
export class GetProfileSyncSettings200ApplicationJSONSyncSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType: string;

  @SpeakeasyMetadata({ data: "json, name=fetchOnFirstLink" })
  fetchOnFirstLink: boolean;

  @SpeakeasyMetadata({ data: "json, name=isLocked" })
  isLocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=monthsToSync" })
  monthsToSync?: number;

  @SpeakeasyMetadata({ data: "json, name=syncFromUtc" })
  syncFromUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=syncFromWindow" })
  syncFromWindow?: number;

  @SpeakeasyMetadata({ data: "json, name=syncOrder" })
  syncOrder: number;

  @SpeakeasyMetadata({ data: "json, name=syncSchedule" })
  syncSchedule: number;
}

export class GetProfileSyncSettings200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=overridesDefaults" })
  overridesDefaults?: boolean;

  @SpeakeasyMetadata({ data: "json, name=settings", elemType: GetProfileSyncSettings200ApplicationJSONSyncSetting })
  settings?: GetProfileSyncSettings200ApplicationJSONSyncSetting[];
}

export class GetProfileSyncSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProfileSyncSettings200ApplicationJSONObject?: GetProfileSyncSettings200ApplicationJSON;

  @SpeakeasyMetadata()
  getProfileSyncSettings401ApplicationJSONObject?: GetProfileSyncSettings401ApplicationJSON;
}