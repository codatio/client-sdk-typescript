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

export type UpdateConnection = {
  /**
   * The current authorization status of the data connection.
   */
  status?: DataConnectionStatus | undefined;
};

/** @internal */
export const UpdateConnection$inboundSchema: z.ZodType<
  UpdateConnection,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: DataConnectionStatus$inboundSchema.optional(),
});

/** @internal */
export type UpdateConnection$Outbound = {
  status?: string | undefined;
};

/** @internal */
export const UpdateConnection$outboundSchema: z.ZodType<
  UpdateConnection$Outbound,
  z.ZodTypeDef,
  UpdateConnection
> = z.object({
  status: DataConnectionStatus$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateConnection$ {
  /** @deprecated use `UpdateConnection$inboundSchema` instead. */
  export const inboundSchema = UpdateConnection$inboundSchema;
  /** @deprecated use `UpdateConnection$outboundSchema` instead. */
  export const outboundSchema = UpdateConnection$outboundSchema;
  /** @deprecated use `UpdateConnection$Outbound` instead. */
  export type Outbound = UpdateConnection$Outbound;
}

export function updateConnectionToJSON(
  updateConnection: UpdateConnection,
): string {
  return JSON.stringify(
    UpdateConnection$outboundSchema.parse(updateConnection),
  );
}

export function updateConnectionFromJSON(
  jsonString: string,
): SafeParseResult<UpdateConnection, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateConnection$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateConnection' from JSON`,
  );
}
