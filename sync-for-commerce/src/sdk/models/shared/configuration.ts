/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CommerceConfiguration,
  CommerceConfiguration$inboundSchema,
  CommerceConfiguration$Outbound,
  CommerceConfiguration$outboundSchema,
} from "./commerceconfiguration.js";
import {
  SyncSchedule,
  SyncSchedule$inboundSchema,
  SyncSchedule$Outbound,
  SyncSchedule$outboundSchema,
} from "./syncschedule.js";

export type Configuration = {
  /**
   * Unique identifier for a company.
   */
  companyId?: any | undefined;
  /**
   * The company name defined in the accounting software.
   */
  accountingSoftwareCompanyName?: string | undefined;
  /**
   * True if Sync for Commerce is enabled for the company.
   */
  enable?: boolean | undefined;
  /**
   * True if Sync for Commerce has been configured for the company.
   */
  configured?: boolean | undefined;
  schedule?: SyncSchedule | undefined;
  configuration?: CommerceConfiguration | undefined;
};

/** @internal */
export const Configuration$inboundSchema: z.ZodType<
  Configuration,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.any().optional(),
  accountingSoftwareCompanyName: z.string().optional(),
  enable: z.boolean().optional(),
  configured: z.boolean().optional(),
  schedule: SyncSchedule$inboundSchema.optional(),
  configuration: CommerceConfiguration$inboundSchema.optional(),
});

/** @internal */
export type Configuration$Outbound = {
  companyId?: any | undefined;
  accountingSoftwareCompanyName?: string | undefined;
  enable?: boolean | undefined;
  configured?: boolean | undefined;
  schedule?: SyncSchedule$Outbound | undefined;
  configuration?: CommerceConfiguration$Outbound | undefined;
};

/** @internal */
export const Configuration$outboundSchema: z.ZodType<
  Configuration$Outbound,
  z.ZodTypeDef,
  Configuration
> = z.object({
  companyId: z.any().optional(),
  accountingSoftwareCompanyName: z.string().optional(),
  enable: z.boolean().optional(),
  configured: z.boolean().optional(),
  schedule: SyncSchedule$outboundSchema.optional(),
  configuration: CommerceConfiguration$outboundSchema.optional(),
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
