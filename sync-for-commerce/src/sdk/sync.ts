/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { syncGet } from "../funcs/syncGet.js";
import { syncGetLastSuccessfulSync } from "../funcs/syncGetLastSuccessfulSync.js";
import { syncGetLatestSync } from "../funcs/syncGetLatestSync.js";
import { syncGetStatus } from "../funcs/syncGetStatus.js";
import { syncList } from "../funcs/syncList.js";
import { syncRequest } from "../funcs/syncRequest.js";
import { syncRequestForDateRange } from "../funcs/syncRequestForDateRange.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Sync extends ClientSDK {
  /**
   * Initiate new sync
   *
   * @remarks
   * Run a Commerce sync from the last successful sync up to the date provided (optional), otherwise UtcNow is used.\r\nIf there was no previously successful sync, the start date in the config is used.
   */
  async request(
    request: operations.RequestSyncRequest,
    options?: RequestOptions,
  ): Promise<shared.SyncSummary> {
    return unwrapAsync(syncRequest(
      this,
      request,
      options,
    ));
  }

  /**
   * Initiate sync for specific range
   *
   * @remarks
   * Initiate a sync for the specified start date to the specified finish date in the request payload.
   */
  async requestForDateRange(
    request: operations.RequestSyncForDateRangeRequest,
    options?: RequestOptions,
  ): Promise<shared.SyncSummary> {
    return unwrapAsync(syncRequestForDateRange(
      this,
      request,
      options,
    ));
  }

  /**
   * Get sync status
   *
   * @remarks
   * Gets a list of sync statuses.
   */
  async getStatus(
    request: operations.GetSyncStatusRequest,
    options?: RequestOptions,
  ): Promise<shared.SyncStatus> {
    return unwrapAsync(syncGetStatus(
      this,
      request,
      options,
    ));
  }

  /**
   * Last successful sync
   *
   * @remarks
   * Gets the status of the last successful sync
   */
  async getLastSuccessfulSync(
    request: operations.GetLastSuccessfulSyncRequest,
    options?: RequestOptions,
  ): Promise<shared.CompanySyncStatus> {
    return unwrapAsync(syncGetLastSuccessfulSync(
      this,
      request,
      options,
    ));
  }

  /**
   * Latest sync status
   *
   * @remarks
   * Gets the latest sync status
   */
  async getLatestSync(
    request: operations.GetLatestSyncRequest,
    options?: RequestOptions,
  ): Promise<shared.CompanySyncStatus> {
    return unwrapAsync(syncGetLatestSync(
      this,
      request,
      options,
    ));
  }

  /**
   * Get sync status
   *
   * @remarks
   * Get the sync status for a specified sync
   */
  async get(
    request: operations.GetSyncByIdRequest,
    options?: RequestOptions,
  ): Promise<shared.CompanySyncStatus> {
    return unwrapAsync(syncGet(
      this,
      request,
      options,
    ));
  }

  /**
   * List sync statuses
   *
   * @remarks
   * Gets a list of sync statuses
   */
  async list(
    request: operations.ListSyncsRequest,
    options?: RequestOptions,
  ): Promise<Array<shared.CompanySyncStatus>> {
    return unwrapAsync(syncList(
      this,
      request,
      options,
    ));
  }
}
