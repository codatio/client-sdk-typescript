/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  ApiKeyDetails,
  ApiKeyDetails$inboundSchema,
  ApiKeyDetails$Outbound,
  ApiKeyDetails$outboundSchema,
} from "./apikeydetails.js";

export type ApiKeys = {
  results?: Array<ApiKeyDetails> | undefined;
};

/** @internal */
export const ApiKeys$inboundSchema: z.ZodType<ApiKeys, z.ZodTypeDef, unknown> =
  z.object({
    results: z.array(ApiKeyDetails$inboundSchema).optional(),
  });

/** @internal */
export type ApiKeys$Outbound = {
  results?: Array<ApiKeyDetails$Outbound> | undefined;
};

/** @internal */
export const ApiKeys$outboundSchema: z.ZodType<
  ApiKeys$Outbound,
  z.ZodTypeDef,
  ApiKeys
> = z.object({
  results: z.array(ApiKeyDetails$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApiKeys$ {
  /** @deprecated use `ApiKeys$inboundSchema` instead. */
  export const inboundSchema = ApiKeys$inboundSchema;
  /** @deprecated use `ApiKeys$outboundSchema` instead. */
  export const outboundSchema = ApiKeys$outboundSchema;
  /** @deprecated use `ApiKeys$Outbound` instead. */
  export type Outbound = ApiKeys$Outbound;
}
