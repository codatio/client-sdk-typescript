/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Allowed name of the 'dataType'.
 */
export const ZeroDataType = {
  PurchaseOrders: "purchaseOrders",
  Bills: "bills",
} as const;
/**
 * Allowed name of the 'dataType'.
 */
export type ZeroDataType = ClosedEnum<typeof ZeroDataType>;

/**
 * Links the current record line to the underlying record line that created it.
 *
 * @remarks
 *
 * For example, if a bill is generated from a purchase order, this property allows you to connect the bill line item to the purchase order line item in our data model.
 */
export type Zero = {
  /**
   * 'id' of the underlying record.
   */
  id?: string | undefined;
  /**
   * Allowed name of the 'dataType'.
   */
  dataType?: ZeroDataType | undefined;
  /**
   * Line number of the underlying record.
   */
  lineNumber?: string | undefined;
};

/** @internal */
export const ZeroDataType$inboundSchema: z.ZodNativeEnum<typeof ZeroDataType> =
  z.nativeEnum(ZeroDataType);

/** @internal */
export const ZeroDataType$outboundSchema: z.ZodNativeEnum<typeof ZeroDataType> =
  ZeroDataType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ZeroDataType$ {
  /** @deprecated use `ZeroDataType$inboundSchema` instead. */
  export const inboundSchema = ZeroDataType$inboundSchema;
  /** @deprecated use `ZeroDataType$outboundSchema` instead. */
  export const outboundSchema = ZeroDataType$outboundSchema;
}

/** @internal */
export const Zero$inboundSchema: z.ZodType<Zero, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string().optional(),
    dataType: ZeroDataType$inboundSchema.optional(),
    lineNumber: z.string().optional(),
  });

/** @internal */
export type Zero$Outbound = {
  id?: string | undefined;
  dataType?: string | undefined;
  lineNumber?: string | undefined;
};

/** @internal */
export const Zero$outboundSchema: z.ZodType<Zero$Outbound, z.ZodTypeDef, Zero> =
  z.object({
    id: z.string().optional(),
    dataType: ZeroDataType$outboundSchema.optional(),
    lineNumber: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Zero$ {
  /** @deprecated use `Zero$inboundSchema` instead. */
  export const inboundSchema = Zero$inboundSchema;
  /** @deprecated use `Zero$outboundSchema` instead. */
  export const outboundSchema = Zero$outboundSchema;
  /** @deprecated use `Zero$Outbound` instead. */
  export type Outbound = Zero$Outbound;
}

export function zeroToJSON(zero: Zero): string {
  return JSON.stringify(Zero$outboundSchema.parse(zero));
}

export function zeroFromJSON(
  jsonString: string,
): SafeParseResult<Zero, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Zero$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Zero' from JSON`,
  );
}
