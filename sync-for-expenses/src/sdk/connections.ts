/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { connectionsCreate } from "../funcs/connectionsCreate.js";
import { connectionsCreatePartnerExpenseConnection } from "../funcs/connectionsCreatePartnerExpenseConnection.js";
import { connectionsDelete } from "../funcs/connectionsDelete.js";
import { connectionsGet } from "../funcs/connectionsGet.js";
import { connectionsList } from "../funcs/connectionsList.js";
import { connectionsUnlink } from "../funcs/connectionsUnlink.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Connections extends ClientSDK {
  /**
   * List connections
   *
   * @remarks
   * List the connections for a company.
   */
  async list(
    request: operations.ListConnectionsRequest,
    options?: RequestOptions,
  ): Promise<shared.Connections> {
    return unwrapAsync(connectionsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create connection
   *
   * @remarks
   * Creates a connection for the company by providing a valid `platformKey`.
   *
   * Use the [List Integrations](https://docs.codat.io/platform-api#/operations/list-integrations) endpoint to access valid platform keys.
   */
  async create(
    request: operations.CreateConnectionRequest,
    options?: RequestOptions,
  ): Promise<shared.Connection> {
    return unwrapAsync(connectionsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get connection
   *
   * @remarks
   * Returns a specific connection for a company when valid identifiers are provided. If the identifiers are for a deleted company and/or connection, a not found response is returned.
   */
  async get(
    request: operations.GetConnectionRequest,
    options?: RequestOptions,
  ): Promise<shared.Connection> {
    return unwrapAsync(connectionsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete connection
   *
   * @remarks
   * Revoke and remove a connection from a company.
   * This operation is not reversible. The end user would need to reauthorize a new data connection if you wish to view new data for this company.
   */
  async delete(
    request: operations.DeleteConnectionRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(connectionsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Unlink connection
   *
   * @remarks
   * This allows you to deauthorize a connection, without deleting it from Codat. This means you can still view any data that has previously been pulled into Codat, and also lets you re-authorize in future if your customer wishes to resume sharing their data.
   */
  async unlink(
    request: operations.UnlinkConnectionRequest,
    options?: RequestOptions,
  ): Promise<shared.Connection> {
    return unwrapAsync(connectionsUnlink(
      this,
      request,
      options,
    ));
  }

  /**
   * Create partner expense connection
   *
   * @remarks
   * Creates a partner expense data connection
   */
  async createPartnerExpenseConnection(
    request: operations.CreatePartnerExpenseConnectionRequest,
    options?: RequestOptions,
  ): Promise<shared.Connection> {
    return unwrapAsync(connectionsCreatePartnerExpenseConnection(
      this,
      request,
      options,
    ));
  }
}
