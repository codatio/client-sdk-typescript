/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Integration,
  Integration$inboundSchema,
  Integration$Outbound,
  Integration$outboundSchema,
} from "./integration.js";
import {
  Links,
  Links$inboundSchema,
  Links$Outbound,
  Links$outboundSchema,
} from "./links.js";

export type Integrations = {
  results?: Array<Integration> | undefined;
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
export const Integrations$inboundSchema: z.ZodType<
  Integrations,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.array(Integration$inboundSchema).optional(),
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
export type Integrations$Outbound = {
  results?: Array<Integration$Outbound> | undefined;
  pageNumber: number;
  pageSize: number;
  totalResults: number;
  _links: Links$Outbound;
};

/** @internal */
export const Integrations$outboundSchema: z.ZodType<
  Integrations$Outbound,
  z.ZodTypeDef,
  Integrations
> = z.object({
  results: z.array(Integration$outboundSchema).optional(),
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
export namespace Integrations$ {
  /** @deprecated use `Integrations$inboundSchema` instead. */
  export const inboundSchema = Integrations$inboundSchema;
  /** @deprecated use `Integrations$outboundSchema` instead. */
  export const outboundSchema = Integrations$outboundSchema;
  /** @deprecated use `Integrations$Outbound` instead. */
  export type Outbound = Integrations$Outbound;
}

export function integrationsToJSON(integrations: Integrations): string {
  return JSON.stringify(Integrations$outboundSchema.parse(integrations));
}

export function integrationsFromJSON(
  jsonString: string,
): SafeParseResult<Integrations, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Integrations$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Integrations' from JSON`,
  );
}
