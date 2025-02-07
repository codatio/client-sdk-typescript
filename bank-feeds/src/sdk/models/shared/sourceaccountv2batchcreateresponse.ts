/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  SourceAccountV2,
  SourceAccountV2$inboundSchema,
  SourceAccountV2$Outbound,
  SourceAccountV2$outboundSchema,
} from "./sourceaccountv2.js";

/**
 * The account ID and source account object of the successfully created source account.
 */
export type SourceAccountV2BatchCreateResponse = {
  /**
   * Unique ID for the source account.
   */
  sourceAccountId?: string | undefined;
  /**
   * The target bank account in a supported accounting software for ingestion into a bank feed.
   */
  result?: SourceAccountV2 | undefined;
};

/** @internal */
export const SourceAccountV2BatchCreateResponse$inboundSchema: z.ZodType<
  SourceAccountV2BatchCreateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  sourceAccountId: z.string().optional(),
  result: SourceAccountV2$inboundSchema.optional(),
});

/** @internal */
export type SourceAccountV2BatchCreateResponse$Outbound = {
  sourceAccountId?: string | undefined;
  result?: SourceAccountV2$Outbound | undefined;
};

/** @internal */
export const SourceAccountV2BatchCreateResponse$outboundSchema: z.ZodType<
  SourceAccountV2BatchCreateResponse$Outbound,
  z.ZodTypeDef,
  SourceAccountV2BatchCreateResponse
> = z.object({
  sourceAccountId: z.string().optional(),
  result: SourceAccountV2$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SourceAccountV2BatchCreateResponse$ {
  /** @deprecated use `SourceAccountV2BatchCreateResponse$inboundSchema` instead. */
  export const inboundSchema = SourceAccountV2BatchCreateResponse$inboundSchema;
  /** @deprecated use `SourceAccountV2BatchCreateResponse$outboundSchema` instead. */
  export const outboundSchema =
    SourceAccountV2BatchCreateResponse$outboundSchema;
  /** @deprecated use `SourceAccountV2BatchCreateResponse$Outbound` instead. */
  export type Outbound = SourceAccountV2BatchCreateResponse$Outbound;
}

export function sourceAccountV2BatchCreateResponseToJSON(
  sourceAccountV2BatchCreateResponse: SourceAccountV2BatchCreateResponse,
): string {
  return JSON.stringify(
    SourceAccountV2BatchCreateResponse$outboundSchema.parse(
      sourceAccountV2BatchCreateResponse,
    ),
  );
}

export function sourceAccountV2BatchCreateResponseFromJSON(
  jsonString: string,
): SafeParseResult<SourceAccountV2BatchCreateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      SourceAccountV2BatchCreateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SourceAccountV2BatchCreateResponse' from JSON`,
  );
}
