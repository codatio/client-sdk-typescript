/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AccountConfiguration,
  AccountConfiguration$inboundSchema,
  AccountConfiguration$Outbound,
  AccountConfiguration$outboundSchema,
} from "./accountconfiguration.js";
import {
  FeesSupplier,
  FeesSupplier$inboundSchema,
  FeesSupplier$Outbound,
  FeesSupplier$outboundSchema,
} from "./feessupplier.js";

export type FeesConfiguration = {
  feesSupplier?: FeesSupplier | undefined;
  /**
   * Boolean indicator to enable syncing fees.
   */
  syncFees?: boolean | undefined;
  accounts?: { [k: string]: AccountConfiguration } | null | undefined;
};

/** @internal */
export const FeesConfiguration$inboundSchema: z.ZodType<
  FeesConfiguration,
  z.ZodTypeDef,
  unknown
> = z.object({
  feesSupplier: FeesSupplier$inboundSchema.optional(),
  syncFees: z.boolean().optional(),
  accounts: z.nullable(z.record(AccountConfiguration$inboundSchema)).optional(),
});

/** @internal */
export type FeesConfiguration$Outbound = {
  feesSupplier?: FeesSupplier$Outbound | undefined;
  syncFees?: boolean | undefined;
  accounts?: { [k: string]: AccountConfiguration$Outbound } | null | undefined;
};

/** @internal */
export const FeesConfiguration$outboundSchema: z.ZodType<
  FeesConfiguration$Outbound,
  z.ZodTypeDef,
  FeesConfiguration
> = z.object({
  feesSupplier: FeesSupplier$outboundSchema.optional(),
  syncFees: z.boolean().optional(),
  accounts: z.nullable(z.record(AccountConfiguration$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FeesConfiguration$ {
  /** @deprecated use `FeesConfiguration$inboundSchema` instead. */
  export const inboundSchema = FeesConfiguration$inboundSchema;
  /** @deprecated use `FeesConfiguration$outboundSchema` instead. */
  export const outboundSchema = FeesConfiguration$outboundSchema;
  /** @deprecated use `FeesConfiguration$Outbound` instead. */
  export type Outbound = FeesConfiguration$Outbound;
}

export function feesConfigurationToJSON(
  feesConfiguration: FeesConfiguration,
): string {
  return JSON.stringify(
    FeesConfiguration$outboundSchema.parse(feesConfiguration),
  );
}

export function feesConfigurationFromJSON(
  jsonString: string,
): SafeParseResult<FeesConfiguration, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FeesConfiguration$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FeesConfiguration' from JSON`,
  );
}
