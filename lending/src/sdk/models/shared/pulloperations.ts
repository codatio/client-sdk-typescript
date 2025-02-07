/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Links,
  Links$inboundSchema,
  Links$Outbound,
  Links$outboundSchema,
} from "./links.js";
import {
  PullOperation,
  PullOperation$inboundSchema,
  PullOperation$Outbound,
  PullOperation$outboundSchema,
} from "./pulloperation.js";

export type PullOperations = {
  results?: Array<PullOperation> | undefined;
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
export const PullOperations$inboundSchema: z.ZodType<
  PullOperations,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.array(PullOperation$inboundSchema).optional(),
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
export type PullOperations$Outbound = {
  results?: Array<PullOperation$Outbound> | undefined;
  pageNumber: number;
  pageSize: number;
  totalResults: number;
  _links: Links$Outbound;
};

/** @internal */
export const PullOperations$outboundSchema: z.ZodType<
  PullOperations$Outbound,
  z.ZodTypeDef,
  PullOperations
> = z.object({
  results: z.array(PullOperation$outboundSchema).optional(),
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
export namespace PullOperations$ {
  /** @deprecated use `PullOperations$inboundSchema` instead. */
  export const inboundSchema = PullOperations$inboundSchema;
  /** @deprecated use `PullOperations$outboundSchema` instead. */
  export const outboundSchema = PullOperations$outboundSchema;
  /** @deprecated use `PullOperations$Outbound` instead. */
  export type Outbound = PullOperations$Outbound;
}

export function pullOperationsToJSON(pullOperations: PullOperations): string {
  return JSON.stringify(PullOperations$outboundSchema.parse(pullOperations));
}

export function pullOperationsFromJSON(
  jsonString: string,
): SafeParseResult<PullOperations, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PullOperations$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PullOperations' from JSON`,
  );
}
