/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { Decimal as Decimal$ } from "../../types/decimal.js";

export type AccountInfo = {
  /**
   * Description of the account.
   */
  description?: string | null | undefined;
  /**
   * Name given to the account by the user. Used in UIs to assist in account selection.
   */
  nickname?: string | null | undefined;
  /**
   * In Codat's data model, dates are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date fields are formatted as strings; for example:
   *
   * @remarks
   * ```
   * 2020-10-08
   * ```
   */
  accountOpenDate?: string | null | undefined;
  /**
   * Balance of funds available for use. This includes pending activity.
   */
  availableBalance?: Decimal$ | number | null | undefined;
};

/** @internal */
export const AccountInfo$inboundSchema: z.ZodType<
  AccountInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.nullable(z.string()).optional(),
  nickname: z.nullable(z.string()).optional(),
  accountOpenDate: z.nullable(z.string()).optional(),
  availableBalance: z.nullable(z.number().transform(v => new Decimal$(v)))
    .optional(),
});

/** @internal */
export type AccountInfo$Outbound = {
  description?: string | null | undefined;
  nickname?: string | null | undefined;
  accountOpenDate?: string | null | undefined;
  availableBalance?: number | null | undefined;
};

/** @internal */
export const AccountInfo$outboundSchema: z.ZodType<
  AccountInfo$Outbound,
  z.ZodTypeDef,
  AccountInfo
> = z.object({
  description: z.nullable(z.string()).optional(),
  nickname: z.nullable(z.string()).optional(),
  accountOpenDate: z.nullable(z.string()).optional(),
  availableBalance: z.nullable(
    z.union([z.instanceof(Decimal$), z.number()]).transform(v =>
      typeof v === "number" ? v : v.toNumber()
    ),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountInfo$ {
  /** @deprecated use `AccountInfo$inboundSchema` instead. */
  export const inboundSchema = AccountInfo$inboundSchema;
  /** @deprecated use `AccountInfo$outboundSchema` instead. */
  export const outboundSchema = AccountInfo$outboundSchema;
  /** @deprecated use `AccountInfo$Outbound` instead. */
  export type Outbound = AccountInfo$Outbound;
}
