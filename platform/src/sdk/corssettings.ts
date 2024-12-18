/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { connectionManagementCorsSettingsGet } from "../funcs/connectionManagementCorsSettingsGet.js";
import { connectionManagementCorsSettingsSet } from "../funcs/connectionManagementCorsSettingsSet.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class CorsSettings extends ClientSDK {
  /**
   * Get CORS settings
   *
   * @remarks
   * The *Get CORS settings* endpoint returns the allowed origins (i.e. your domains) you want to allow cross-origin resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)) with Codat.
   *
   * Enabling CORS with Codat is required by our embeddable [Connections SDK](https://docs.codat.io/auth-flow/optimize/connection-management) to access Codat's API endpoints.
   *
   * The embeddable [Connections SDK](https://docs.codat.io/auth-flow/optimize/connection-management) lets your customers control access to their data by allowing them to manage their existing connections.
   */
  async get(
    options?: RequestOptions,
  ): Promise<shared.ConnectionManagementAllowedOrigins> {
    return unwrapAsync(connectionManagementCorsSettingsGet(
      this,
      options,
    ));
  }

  /**
   * Set CORS settings
   *
   * @remarks
   * The *Set CORS settings* endpoint allows you to register allowed origins (i.e. your domains) for use in cross-origin resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).
   *
   * Enabling CORS with Codat is required by our embeddable [Connections SDK](https://docs.codat.io/auth-flow/optimize/connection-management) to access Codat's API endpoints.
   *
   * The embeddable [Connections SDK](https://docs.codat.io/auth-flow/optimize/connection-management) lets your customers control access to their data by allowing them to manage their existing connections.
   */
  async set(
    request?: shared.ConnectionManagementAllowedOrigins | undefined,
    options?: RequestOptions,
  ): Promise<shared.ConnectionManagementAllowedOrigins> {
    return unwrapAsync(connectionManagementCorsSettingsSet(
      this,
      request,
      options,
    ));
  }
}
