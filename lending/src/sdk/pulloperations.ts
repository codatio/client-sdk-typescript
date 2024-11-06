/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { manageDataPullOperationsGet } from "../funcs/manageDataPullOperationsGet.js";
import { manageDataPullOperationsList } from "../funcs/manageDataPullOperationsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class PullOperations extends ClientSDK {
  /**
   * List pull operations
   *
   * @remarks
   * Gets the pull operation history (datasets) for a given company.
   */
  async list(
    request: operations.ListPullOperationsRequest,
    options?: RequestOptions,
  ): Promise<shared.PullOperations> {
    return unwrapAsync(manageDataPullOperationsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get pull operation
   *
   * @remarks
   * Retrieve information about a single dataset or pull operation.
   */
  async get(
    request: operations.GetPullOperationRequest,
    options?: RequestOptions,
  ): Promise<shared.PullOperation> {
    return unwrapAsync(manageDataPullOperationsGet(
      this,
      request,
      options,
    ));
  }
}
