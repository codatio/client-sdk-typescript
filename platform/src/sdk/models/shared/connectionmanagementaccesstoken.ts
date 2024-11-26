/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ConnectionManagementAccessToken = {
  /**
   * Access token that allows SMBs to manage connections that have access to their data.
   */
  accessToken?: string | undefined;
};

/** @internal */
export const ConnectionManagementAccessToken$inboundSchema: z.ZodType<
  ConnectionManagementAccessToken,
  z.ZodTypeDef,
  unknown
> = z.object({
  accessToken: z.string().optional(),
});

/** @internal */
export type ConnectionManagementAccessToken$Outbound = {
  accessToken?: string | undefined;
};

/** @internal */
export const ConnectionManagementAccessToken$outboundSchema: z.ZodType<
  ConnectionManagementAccessToken$Outbound,
  z.ZodTypeDef,
  ConnectionManagementAccessToken
> = z.object({
  accessToken: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectionManagementAccessToken$ {
  /** @deprecated use `ConnectionManagementAccessToken$inboundSchema` instead. */
  export const inboundSchema = ConnectionManagementAccessToken$inboundSchema;
  /** @deprecated use `ConnectionManagementAccessToken$outboundSchema` instead. */
  export const outboundSchema = ConnectionManagementAccessToken$outboundSchema;
  /** @deprecated use `ConnectionManagementAccessToken$Outbound` instead. */
  export type Outbound = ConnectionManagementAccessToken$Outbound;
}

export function connectionManagementAccessTokenToJSON(
  connectionManagementAccessToken: ConnectionManagementAccessToken,
): string {
  return JSON.stringify(
    ConnectionManagementAccessToken$outboundSchema.parse(
      connectionManagementAccessToken,
    ),
  );
}

export function connectionManagementAccessTokenFromJSON(
  jsonString: string,
): SafeParseResult<ConnectionManagementAccessToken, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ConnectionManagementAccessToken$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConnectionManagementAccessToken' from JSON`,
  );
}
