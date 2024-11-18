/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountCategoriesUpdatedWebhookData = {
  /**
   * In Codat's data model, dates are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date fields are formatted as strings; for example:
   *
   * @remarks
   * ```
   * 2020-10-08
   * ```
   */
  modifiedDate?: string | null | undefined;
};

/** @internal */
export const AccountCategoriesUpdatedWebhookData$inboundSchema: z.ZodType<
  AccountCategoriesUpdatedWebhookData,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.nullable(z.string()).optional(),
});

/** @internal */
export type AccountCategoriesUpdatedWebhookData$Outbound = {
  modifiedDate?: string | null | undefined;
};

/** @internal */
export const AccountCategoriesUpdatedWebhookData$outboundSchema: z.ZodType<
  AccountCategoriesUpdatedWebhookData$Outbound,
  z.ZodTypeDef,
  AccountCategoriesUpdatedWebhookData
> = z.object({
  modifiedDate: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountCategoriesUpdatedWebhookData$ {
  /** @deprecated use `AccountCategoriesUpdatedWebhookData$inboundSchema` instead. */
  export const inboundSchema =
    AccountCategoriesUpdatedWebhookData$inboundSchema;
  /** @deprecated use `AccountCategoriesUpdatedWebhookData$outboundSchema` instead. */
  export const outboundSchema =
    AccountCategoriesUpdatedWebhookData$outboundSchema;
  /** @deprecated use `AccountCategoriesUpdatedWebhookData$Outbound` instead. */
  export type Outbound = AccountCategoriesUpdatedWebhookData$Outbound;
}

export function accountCategoriesUpdatedWebhookDataToJSON(
  accountCategoriesUpdatedWebhookData: AccountCategoriesUpdatedWebhookData,
): string {
  return JSON.stringify(
    AccountCategoriesUpdatedWebhookData$outboundSchema.parse(
      accountCategoriesUpdatedWebhookData,
    ),
  );
}

export function accountCategoriesUpdatedWebhookDataFromJSON(
  jsonString: string,
): SafeParseResult<AccountCategoriesUpdatedWebhookData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountCategoriesUpdatedWebhookData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountCategoriesUpdatedWebhookData' from JSON`,
  );
}
