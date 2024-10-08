/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Status of the account
 */
export const AccountStatus = {
  Unknown: "Unknown",
  Active: "Active",
  Archived: "Archived",
  Pending: "Pending",
} as const;
/**
 * Status of the account
 */
export type AccountStatus = ClosedEnum<typeof AccountStatus>;

/** @internal */
export const AccountStatus$inboundSchema: z.ZodNativeEnum<
  typeof AccountStatus
> = z.nativeEnum(AccountStatus);

/** @internal */
export const AccountStatus$outboundSchema: z.ZodNativeEnum<
  typeof AccountStatus
> = AccountStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountStatus$ {
  /** @deprecated use `AccountStatus$inboundSchema` instead. */
  export const inboundSchema = AccountStatus$inboundSchema;
  /** @deprecated use `AccountStatus$outboundSchema` instead. */
  export const outboundSchema = AccountStatus$outboundSchema;
}
