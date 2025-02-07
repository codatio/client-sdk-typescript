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

export type NewPaymentsConfiguration = {
  /**
   * Boolean indicator for syncing payments.
   */
  syncPayments?: boolean | undefined;
  accounts?: { [k: string]: AccountConfiguration } | null | undefined;
};

/** @internal */
export const NewPaymentsConfiguration$inboundSchema: z.ZodType<
  NewPaymentsConfiguration,
  z.ZodTypeDef,
  unknown
> = z.object({
  syncPayments: z.boolean().optional(),
  accounts: z.nullable(z.record(AccountConfiguration$inboundSchema)).optional(),
});

/** @internal */
export type NewPaymentsConfiguration$Outbound = {
  syncPayments?: boolean | undefined;
  accounts?: { [k: string]: AccountConfiguration$Outbound } | null | undefined;
};

/** @internal */
export const NewPaymentsConfiguration$outboundSchema: z.ZodType<
  NewPaymentsConfiguration$Outbound,
  z.ZodTypeDef,
  NewPaymentsConfiguration
> = z.object({
  syncPayments: z.boolean().optional(),
  accounts: z.nullable(z.record(AccountConfiguration$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NewPaymentsConfiguration$ {
  /** @deprecated use `NewPaymentsConfiguration$inboundSchema` instead. */
  export const inboundSchema = NewPaymentsConfiguration$inboundSchema;
  /** @deprecated use `NewPaymentsConfiguration$outboundSchema` instead. */
  export const outboundSchema = NewPaymentsConfiguration$outboundSchema;
  /** @deprecated use `NewPaymentsConfiguration$Outbound` instead. */
  export type Outbound = NewPaymentsConfiguration$Outbound;
}

export function newPaymentsConfigurationToJSON(
  newPaymentsConfiguration: NewPaymentsConfiguration,
): string {
  return JSON.stringify(
    NewPaymentsConfiguration$outboundSchema.parse(newPaymentsConfiguration),
  );
}

export function newPaymentsConfigurationFromJSON(
  jsonString: string,
): SafeParseResult<NewPaymentsConfiguration, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NewPaymentsConfiguration$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NewPaymentsConfiguration' from JSON`,
  );
}
