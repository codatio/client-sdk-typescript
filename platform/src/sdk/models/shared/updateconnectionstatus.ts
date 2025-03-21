/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DataConnectionStatus,
  DataConnectionStatus$inboundSchema,
  DataConnectionStatus$outboundSchema,
} from "./dataconnectionstatus.js";

export type UpdateConnectionStatus = {
  /**
   * The current authorization status of the data connection.
   */
  status?: DataConnectionStatus | undefined;
};

/** @internal */
export const UpdateConnectionStatus$inboundSchema: z.ZodType<
  UpdateConnectionStatus,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: DataConnectionStatus$inboundSchema.optional(),
});

/** @internal */
export type UpdateConnectionStatus$Outbound = {
  status?: string | undefined;
};

/** @internal */
export const UpdateConnectionStatus$outboundSchema: z.ZodType<
  UpdateConnectionStatus$Outbound,
  z.ZodTypeDef,
  UpdateConnectionStatus
> = z.object({
  status: DataConnectionStatus$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateConnectionStatus$ {
  /** @deprecated use `UpdateConnectionStatus$inboundSchema` instead. */
  export const inboundSchema = UpdateConnectionStatus$inboundSchema;
  /** @deprecated use `UpdateConnectionStatus$outboundSchema` instead. */
  export const outboundSchema = UpdateConnectionStatus$outboundSchema;
  /** @deprecated use `UpdateConnectionStatus$Outbound` instead. */
  export type Outbound = UpdateConnectionStatus$Outbound;
}

export function updateConnectionStatusToJSON(
  updateConnectionStatus: UpdateConnectionStatus,
): string {
  return JSON.stringify(
    UpdateConnectionStatus$outboundSchema.parse(updateConnectionStatus),
  );
}

export function updateConnectionStatusFromJSON(
  jsonString: string,
): SafeParseResult<UpdateConnectionStatus, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateConnectionStatus$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateConnectionStatus' from JSON`,
  );
}
