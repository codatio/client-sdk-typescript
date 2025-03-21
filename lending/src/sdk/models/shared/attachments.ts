/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AccountingAttachment,
  AccountingAttachment$inboundSchema,
  AccountingAttachment$Outbound,
  AccountingAttachment$outboundSchema,
} from "./accountingattachment.js";

export type Attachments = {
  attachments?: Array<AccountingAttachment | null> | null | undefined;
};

/** @internal */
export const Attachments$inboundSchema: z.ZodType<
  Attachments,
  z.ZodTypeDef,
  unknown
> = z.object({
  attachments: z.nullable(
    z.array(z.nullable(AccountingAttachment$inboundSchema)),
  ).optional(),
});

/** @internal */
export type Attachments$Outbound = {
  attachments?: Array<AccountingAttachment$Outbound | null> | null | undefined;
};

/** @internal */
export const Attachments$outboundSchema: z.ZodType<
  Attachments$Outbound,
  z.ZodTypeDef,
  Attachments
> = z.object({
  attachments: z.nullable(
    z.array(z.nullable(AccountingAttachment$outboundSchema)),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Attachments$ {
  /** @deprecated use `Attachments$inboundSchema` instead. */
  export const inboundSchema = Attachments$inboundSchema;
  /** @deprecated use `Attachments$outboundSchema` instead. */
  export const outboundSchema = Attachments$outboundSchema;
  /** @deprecated use `Attachments$Outbound` instead. */
  export type Outbound = Attachments$Outbound;
}

export function attachmentsToJSON(attachments: Attachments): string {
  return JSON.stringify(Attachments$outboundSchema.parse(attachments));
}

export function attachmentsFromJSON(
  jsonString: string,
): SafeParseResult<Attachments, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Attachments$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Attachments' from JSON`,
  );
}
