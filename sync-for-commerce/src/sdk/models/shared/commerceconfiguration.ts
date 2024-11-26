/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ConfigurationMapSettings,
  ConfigurationMapSettings$inboundSchema,
  ConfigurationMapSettings$Outbound,
  ConfigurationMapSettings$outboundSchema,
} from "./configurationmapsettings.js";
import {
  FeesConfiguration,
  FeesConfiguration$inboundSchema,
  FeesConfiguration$Outbound,
  FeesConfiguration$outboundSchema,
} from "./feesconfiguration.js";
import {
  NewPaymentsConfiguration,
  NewPaymentsConfiguration$inboundSchema,
  NewPaymentsConfiguration$Outbound,
  NewPaymentsConfiguration$outboundSchema,
} from "./newpaymentsconfiguration.js";
import {
  PaymentsConfiguration,
  PaymentsConfiguration$inboundSchema,
  PaymentsConfiguration$Outbound,
  PaymentsConfiguration$outboundSchema,
} from "./paymentsconfiguration.js";
import {
  SalesConfiguration,
  SalesConfiguration$inboundSchema,
  SalesConfiguration$Outbound,
  SalesConfiguration$outboundSchema,
} from "./salesconfiguration.js";

export type CommerceConfiguration = {
  /**
   * The country code outlining where the company is based.
   */
  countryCode?: string | undefined;
  mapSettings?: ConfigurationMapSettings | undefined;
  sales?: SalesConfiguration | undefined;
  payments?: PaymentsConfiguration | undefined;
  newPayments?: NewPaymentsConfiguration | undefined;
  fees?: FeesConfiguration | undefined;
};

/** @internal */
export const CommerceConfiguration$inboundSchema: z.ZodType<
  CommerceConfiguration,
  z.ZodTypeDef,
  unknown
> = z.object({
  countryCode: z.string().optional(),
  mapSettings: ConfigurationMapSettings$inboundSchema.optional(),
  sales: SalesConfiguration$inboundSchema.optional(),
  payments: PaymentsConfiguration$inboundSchema.optional(),
  newPayments: NewPaymentsConfiguration$inboundSchema.optional(),
  fees: FeesConfiguration$inboundSchema.optional(),
});

/** @internal */
export type CommerceConfiguration$Outbound = {
  countryCode?: string | undefined;
  mapSettings?: ConfigurationMapSettings$Outbound | undefined;
  sales?: SalesConfiguration$Outbound | undefined;
  payments?: PaymentsConfiguration$Outbound | undefined;
  newPayments?: NewPaymentsConfiguration$Outbound | undefined;
  fees?: FeesConfiguration$Outbound | undefined;
};

/** @internal */
export const CommerceConfiguration$outboundSchema: z.ZodType<
  CommerceConfiguration$Outbound,
  z.ZodTypeDef,
  CommerceConfiguration
> = z.object({
  countryCode: z.string().optional(),
  mapSettings: ConfigurationMapSettings$outboundSchema.optional(),
  sales: SalesConfiguration$outboundSchema.optional(),
  payments: PaymentsConfiguration$outboundSchema.optional(),
  newPayments: NewPaymentsConfiguration$outboundSchema.optional(),
  fees: FeesConfiguration$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommerceConfiguration$ {
  /** @deprecated use `CommerceConfiguration$inboundSchema` instead. */
  export const inboundSchema = CommerceConfiguration$inboundSchema;
  /** @deprecated use `CommerceConfiguration$outboundSchema` instead. */
  export const outboundSchema = CommerceConfiguration$outboundSchema;
  /** @deprecated use `CommerceConfiguration$Outbound` instead. */
  export type Outbound = CommerceConfiguration$Outbound;
}

export function commerceConfigurationToJSON(
  commerceConfiguration: CommerceConfiguration,
): string {
  return JSON.stringify(
    CommerceConfiguration$outboundSchema.parse(commerceConfiguration),
  );
}

export function commerceConfigurationFromJSON(
  jsonString: string,
): SafeParseResult<CommerceConfiguration, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommerceConfiguration$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommerceConfiguration' from JSON`,
  );
}
