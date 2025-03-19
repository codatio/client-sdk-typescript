/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CommerceLocation,
  CommerceLocation$inboundSchema,
  CommerceLocation$Outbound,
  CommerceLocation$outboundSchema,
} from "./commercelocation.js";
import {
  Links,
  Links$inboundSchema,
  Links$Outbound,
  Links$outboundSchema,
} from "./links.js";

export type CommerceLocations = {
  results?: Array<CommerceLocation | null> | undefined;
  /**
   * Current page number.
   */
  pageNumber: number;
  /**
   * Number of items to return in results array.
   */
  pageSize: number;
  /**
   * Total number of items.
   */
  totalResults: number;
  links: Links;
};

/** @internal */
export const CommerceLocations$inboundSchema: z.ZodType<
  CommerceLocations,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.array(z.nullable(CommerceLocation$inboundSchema)).optional(),
  pageNumber: z.number().int(),
  pageSize: z.number().int(),
  totalResults: z.number().int(),
  _links: Links$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "_links": "links",
  });
});

/** @internal */
export type CommerceLocations$Outbound = {
  results?: Array<CommerceLocation$Outbound | null> | undefined;
  pageNumber: number;
  pageSize: number;
  totalResults: number;
  _links: Links$Outbound;
};

/** @internal */
export const CommerceLocations$outboundSchema: z.ZodType<
  CommerceLocations$Outbound,
  z.ZodTypeDef,
  CommerceLocations
> = z.object({
  results: z.array(z.nullable(CommerceLocation$outboundSchema)).optional(),
  pageNumber: z.number().int(),
  pageSize: z.number().int(),
  totalResults: z.number().int(),
  links: Links$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    links: "_links",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommerceLocations$ {
  /** @deprecated use `CommerceLocations$inboundSchema` instead. */
  export const inboundSchema = CommerceLocations$inboundSchema;
  /** @deprecated use `CommerceLocations$outboundSchema` instead. */
  export const outboundSchema = CommerceLocations$outboundSchema;
  /** @deprecated use `CommerceLocations$Outbound` instead. */
  export type Outbound = CommerceLocations$Outbound;
}

export function commerceLocationsToJSON(
  commerceLocations: CommerceLocations,
): string {
  return JSON.stringify(
    CommerceLocations$outboundSchema.parse(commerceLocations),
  );
}

export function commerceLocationsFromJSON(
  jsonString: string,
): SafeParseResult<CommerceLocations, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommerceLocations$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommerceLocations' from JSON`,
  );
}
