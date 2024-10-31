/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type UpdateBillRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * Unique identifier for a bill.
   */
  billId: string;
  /**
   * Time limit for the push operation to complete before it is timed out.
   */
  timeoutInMinutes?: number | undefined;
  /**
   * When updating data in the destination platform Codat checks the `sourceModifiedDate` against the `lastupdated` date from the accounting software, if they're different Codat will return an error suggesting you should initiate another pull of the data. If this is set to `true` then the update will override this check.
   */
  forceUpdate?: boolean | undefined;
  bill?: shared.Bill | null | undefined;
};

/** @internal */
export const UpdateBillRequest$inboundSchema: z.ZodType<
  UpdateBillRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  billId: z.string(),
  timeoutInMinutes: z.number().int().optional(),
  forceUpdate: z.boolean().default(false),
  Bill: z.nullable(shared.Bill$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "Bill": "bill",
  });
});

/** @internal */
export type UpdateBillRequest$Outbound = {
  companyId: string;
  connectionId: string;
  billId: string;
  timeoutInMinutes?: number | undefined;
  forceUpdate: boolean;
  Bill?: shared.Bill$Outbound | null | undefined;
};

/** @internal */
export const UpdateBillRequest$outboundSchema: z.ZodType<
  UpdateBillRequest$Outbound,
  z.ZodTypeDef,
  UpdateBillRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  billId: z.string(),
  timeoutInMinutes: z.number().int().optional(),
  forceUpdate: z.boolean().default(false),
  bill: z.nullable(shared.Bill$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    bill: "Bill",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateBillRequest$ {
  /** @deprecated use `UpdateBillRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateBillRequest$inboundSchema;
  /** @deprecated use `UpdateBillRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateBillRequest$outboundSchema;
  /** @deprecated use `UpdateBillRequest$Outbound` instead. */
  export type Outbound = UpdateBillRequest$Outbound;
}