/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Success
 */
export type ConnectionManagementAllowedOrigins = {
  /**
   * An array of allowed origins (i.e. your domains) to permit cross-origin resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).n resource sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)).
   */
  allowedOrigins?: Array<string> | undefined;
};

/** @internal */
export const ConnectionManagementAllowedOrigins$inboundSchema: z.ZodType<
  ConnectionManagementAllowedOrigins,
  z.ZodTypeDef,
  unknown
> = z.object({
  allowedOrigins: z.array(z.string()).optional(),
});

/** @internal */
export type ConnectionManagementAllowedOrigins$Outbound = {
  allowedOrigins?: Array<string> | undefined;
};

/** @internal */
export const ConnectionManagementAllowedOrigins$outboundSchema: z.ZodType<
  ConnectionManagementAllowedOrigins$Outbound,
  z.ZodTypeDef,
  ConnectionManagementAllowedOrigins
> = z.object({
  allowedOrigins: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectionManagementAllowedOrigins$ {
  /** @deprecated use `ConnectionManagementAllowedOrigins$inboundSchema` instead. */
  export const inboundSchema = ConnectionManagementAllowedOrigins$inboundSchema;
  /** @deprecated use `ConnectionManagementAllowedOrigins$outboundSchema` instead. */
  export const outboundSchema =
    ConnectionManagementAllowedOrigins$outboundSchema;
  /** @deprecated use `ConnectionManagementAllowedOrigins$Outbound` instead. */
  export type Outbound = ConnectionManagementAllowedOrigins$Outbound;
}
