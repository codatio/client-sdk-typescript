/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ConfigurationOption,
  ConfigurationOption$inboundSchema,
  ConfigurationOption$Outbound,
  ConfigurationOption$outboundSchema,
} from "./configurationoption.js";

export type SalesCustomer = {
  /**
   * Selected customer id from the list of customer records on the accounting software.
   */
  selectedCustomerId?: string | null | undefined;
  /**
   * List of customer options from the list of customer records on the accounting software.
   */
  customerOptions?: Array<ConfigurationOption> | null | undefined;
};

/** @internal */
export const SalesCustomer$inboundSchema: z.ZodType<
  SalesCustomer,
  z.ZodTypeDef,
  unknown
> = z.object({
  selectedCustomerId: z.nullable(z.string()).optional(),
  customerOptions: z.nullable(z.array(ConfigurationOption$inboundSchema))
    .optional(),
});

/** @internal */
export type SalesCustomer$Outbound = {
  selectedCustomerId?: string | null | undefined;
  customerOptions?: Array<ConfigurationOption$Outbound> | null | undefined;
};

/** @internal */
export const SalesCustomer$outboundSchema: z.ZodType<
  SalesCustomer$Outbound,
  z.ZodTypeDef,
  SalesCustomer
> = z.object({
  selectedCustomerId: z.nullable(z.string()).optional(),
  customerOptions: z.nullable(z.array(ConfigurationOption$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SalesCustomer$ {
  /** @deprecated use `SalesCustomer$inboundSchema` instead. */
  export const inboundSchema = SalesCustomer$inboundSchema;
  /** @deprecated use `SalesCustomer$outboundSchema` instead. */
  export const outboundSchema = SalesCustomer$outboundSchema;
  /** @deprecated use `SalesCustomer$Outbound` instead. */
  export type Outbound = SalesCustomer$Outbound;
}

export function salesCustomerToJSON(salesCustomer: SalesCustomer): string {
  return JSON.stringify(SalesCustomer$outboundSchema.parse(salesCustomer));
}

export function salesCustomerFromJSON(
  jsonString: string,
): SafeParseResult<SalesCustomer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SalesCustomer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SalesCustomer' from JSON`,
  );
}
