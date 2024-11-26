/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteConnectionRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
};

/** @internal */
export const DeleteConnectionRequest$inboundSchema: z.ZodType<
  DeleteConnectionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
});

/** @internal */
export type DeleteConnectionRequest$Outbound = {
  companyId: string;
  connectionId: string;
};

/** @internal */
export const DeleteConnectionRequest$outboundSchema: z.ZodType<
  DeleteConnectionRequest$Outbound,
  z.ZodTypeDef,
  DeleteConnectionRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteConnectionRequest$ {
  /** @deprecated use `DeleteConnectionRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteConnectionRequest$inboundSchema;
  /** @deprecated use `DeleteConnectionRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteConnectionRequest$outboundSchema;
  /** @deprecated use `DeleteConnectionRequest$Outbound` instead. */
  export type Outbound = DeleteConnectionRequest$Outbound;
}

export function deleteConnectionRequestToJSON(
  deleteConnectionRequest: DeleteConnectionRequest,
): string {
  return JSON.stringify(
    DeleteConnectionRequest$outboundSchema.parse(deleteConnectionRequest),
  );
}

export function deleteConnectionRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteConnectionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteConnectionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteConnectionRequest' from JSON`,
  );
}
