/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type UpdateSupplierRequest = {
  /**
   * Unique identifier for a company.
   */
  companyId: string;
  /**
   * Unique identifier for a connection.
   */
  connectionId: string;
  /**
   * Unique identifier for a supplier.
   */
  supplierId: string;
  /**
   * Time limit for the push operation to complete before it is timed out.
   */
  timeoutInMinutes?: number | undefined;
  /**
   * When updating data in the destination platform Codat checks the `sourceModifiedDate` against the `lastupdated` date from the accounting software, if they're different Codat will return an error suggesting you should initiate another pull of the data. If this is set to `true` then the update will override this check.
   */
  forceUpdate?: boolean | undefined;
  supplier?: shared.Supplier | null | undefined;
};

/** @internal */
export const UpdateSupplierRequest$inboundSchema: z.ZodType<
  UpdateSupplierRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  supplierId: z.string(),
  timeoutInMinutes: z.number().int().optional(),
  forceUpdate: z.boolean().default(false),
  Supplier: z.nullable(shared.Supplier$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "Supplier": "supplier",
  });
});

/** @internal */
export type UpdateSupplierRequest$Outbound = {
  companyId: string;
  connectionId: string;
  supplierId: string;
  timeoutInMinutes?: number | undefined;
  forceUpdate: boolean;
  Supplier?: shared.Supplier$Outbound | null | undefined;
};

/** @internal */
export const UpdateSupplierRequest$outboundSchema: z.ZodType<
  UpdateSupplierRequest$Outbound,
  z.ZodTypeDef,
  UpdateSupplierRequest
> = z.object({
  companyId: z.string(),
  connectionId: z.string(),
  supplierId: z.string(),
  timeoutInMinutes: z.number().int().optional(),
  forceUpdate: z.boolean().default(false),
  supplier: z.nullable(shared.Supplier$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    supplier: "Supplier",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateSupplierRequest$ {
  /** @deprecated use `UpdateSupplierRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateSupplierRequest$inboundSchema;
  /** @deprecated use `UpdateSupplierRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateSupplierRequest$outboundSchema;
  /** @deprecated use `UpdateSupplierRequest$Outbound` instead. */
  export type Outbound = UpdateSupplierRequest$Outbound;
}