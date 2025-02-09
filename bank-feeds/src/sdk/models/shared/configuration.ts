/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ConfigurationSchedule,
  ConfigurationSchedule$inboundSchema,
  ConfigurationSchedule$Outbound,
  ConfigurationSchedule$outboundSchema,
} from "./configurationschedule.js";
import {
  SyncConfiguration,
  SyncConfiguration$inboundSchema,
  SyncConfiguration$Outbound,
  SyncConfiguration$outboundSchema,
} from "./syncconfiguration.js";

export type Configuration = {
  /**
   * Unique identifier for your SMB in Codat.
   */
  companyId?: string | undefined;
  /**
   * The company name defined in the accounting software.
   */
  accountingSoftwareCompanyName?: string | undefined;
  /**
   * Enabled or disable bank feeds.
   */
  enabled?: boolean | undefined;
  /**
   * True if the company has been configured.
   */
  configured?: boolean | undefined;
  schedule?: ConfigurationSchedule | undefined;
  configuration?: SyncConfiguration | undefined;
};

/** @internal */
export const Configuration$inboundSchema: z.ZodType<
  Configuration,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string().optional(),
  accountingSoftwareCompanyName: z.string().optional(),
  enabled: z.boolean().optional(),
  configured: z.boolean().optional(),
  schedule: ConfigurationSchedule$inboundSchema.optional(),
  configuration: SyncConfiguration$inboundSchema.optional(),
});

/** @internal */
export type Configuration$Outbound = {
  companyId?: string | undefined;
  accountingSoftwareCompanyName?: string | undefined;
  enabled?: boolean | undefined;
  configured?: boolean | undefined;
  schedule?: ConfigurationSchedule$Outbound | undefined;
  configuration?: SyncConfiguration$Outbound | undefined;
};

/** @internal */
export const Configuration$outboundSchema: z.ZodType<
  Configuration$Outbound,
  z.ZodTypeDef,
  Configuration
> = z.object({
  companyId: z.string().optional(),
  accountingSoftwareCompanyName: z.string().optional(),
  enabled: z.boolean().optional(),
  configured: z.boolean().optional(),
  schedule: ConfigurationSchedule$outboundSchema.optional(),
  configuration: SyncConfiguration$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Configuration$ {
  /** @deprecated use `Configuration$inboundSchema` instead. */
  export const inboundSchema = Configuration$inboundSchema;
  /** @deprecated use `Configuration$outboundSchema` instead. */
  export const outboundSchema = Configuration$outboundSchema;
  /** @deprecated use `Configuration$Outbound` instead. */
  export type Outbound = Configuration$Outbound;
}

export function configurationToJSON(configuration: Configuration): string {
  return JSON.stringify(Configuration$outboundSchema.parse(configuration));
}

export function configurationFromJSON(
  jsonString: string,
): SafeParseResult<Configuration, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Configuration$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Configuration' from JSON`,
  );
}
