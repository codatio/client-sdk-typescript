/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SupplierDetails = {
  /**
   * Identifier for the supplier, unique to the company in the accounting software.
   */
  id?: string | undefined;
};

/** @internal */
export const SupplierDetails$inboundSchema: z.ZodType<
  SupplierDetails,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
});

/** @internal */
export type SupplierDetails$Outbound = {
  id?: string | undefined;
};

/** @internal */
export const SupplierDetails$outboundSchema: z.ZodType<
  SupplierDetails$Outbound,
  z.ZodTypeDef,
  SupplierDetails
> = z.object({
  id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SupplierDetails$ {
  /** @deprecated use `SupplierDetails$inboundSchema` instead. */
  export const inboundSchema = SupplierDetails$inboundSchema;
  /** @deprecated use `SupplierDetails$outboundSchema` instead. */
  export const outboundSchema = SupplierDetails$outboundSchema;
  /** @deprecated use `SupplierDetails$Outbound` instead. */
  export type Outbound = SupplierDetails$Outbound;
}

export function supplierDetailsToJSON(
  supplierDetails: SupplierDetails,
): string {
  return JSON.stringify(SupplierDetails$outboundSchema.parse(supplierDetails));
}

export function supplierDetailsFromJSON(
  jsonString: string,
): SafeParseResult<SupplierDetails, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SupplierDetails$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SupplierDetails' from JSON`,
  );
}
