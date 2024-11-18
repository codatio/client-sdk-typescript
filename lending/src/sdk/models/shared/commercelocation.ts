/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CommerceAddress,
  CommerceAddress$inboundSchema,
  CommerceAddress$Outbound,
  CommerceAddress$outboundSchema,
} from "./commerceaddress.js";

/**
 * The Location datatype holds information on the geographic location at which stocks of products may be held, as referenced in the Products data type.
 *
 * @remarks
 *
 * A Location also holds information on geographic locations where orders were placed, as referenced in the Orders data type.
 */
export type CommerceLocation = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  /**
   * A unique, persistent identifier for this record
   */
  id: string;
  /**
   * Name of this location
   */
  name?: string | undefined;
  address?: CommerceAddress | undefined;
};

/** @internal */
export const CommerceLocation$inboundSchema: z.ZodType<
  CommerceLocation,
  z.ZodTypeDef,
  unknown
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string(),
  name: z.string().optional(),
  address: CommerceAddress$inboundSchema.optional(),
});

/** @internal */
export type CommerceLocation$Outbound = {
  modifiedDate?: string | undefined;
  sourceModifiedDate?: string | undefined;
  id: string;
  name?: string | undefined;
  address?: CommerceAddress$Outbound | undefined;
};

/** @internal */
export const CommerceLocation$outboundSchema: z.ZodType<
  CommerceLocation$Outbound,
  z.ZodTypeDef,
  CommerceLocation
> = z.object({
  modifiedDate: z.string().optional(),
  sourceModifiedDate: z.string().optional(),
  id: z.string(),
  name: z.string().optional(),
  address: CommerceAddress$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommerceLocation$ {
  /** @deprecated use `CommerceLocation$inboundSchema` instead. */
  export const inboundSchema = CommerceLocation$inboundSchema;
  /** @deprecated use `CommerceLocation$outboundSchema` instead. */
  export const outboundSchema = CommerceLocation$outboundSchema;
  /** @deprecated use `CommerceLocation$Outbound` instead. */
  export type Outbound = CommerceLocation$Outbound;
}

export function commerceLocationToJSON(
  commerceLocation: CommerceLocation,
): string {
  return JSON.stringify(
    CommerceLocation$outboundSchema.parse(commerceLocation),
  );
}

export function commerceLocationFromJSON(
  jsonString: string,
): SafeParseResult<CommerceLocation, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommerceLocation$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommerceLocation' from JSON`,
  );
}
