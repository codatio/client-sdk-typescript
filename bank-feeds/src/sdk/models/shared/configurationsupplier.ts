/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ConfigurationContactRef,
  ConfigurationContactRef$inboundSchema,
  ConfigurationContactRef$Outbound,
  ConfigurationContactRef$outboundSchema,
} from "./configurationcontactref.js";

export type ConfigurationSupplier = {
  /**
   * Unique identifier for the supplier.
   */
  selectedSupplierId?: string | undefined;
  supplierOptions?: Array<ConfigurationContactRef> | undefined;
};

/** @internal */
export const ConfigurationSupplier$inboundSchema: z.ZodType<
  ConfigurationSupplier,
  z.ZodTypeDef,
  unknown
> = z.object({
  selectedSupplierId: z.string().optional(),
  supplierOptions: z.array(ConfigurationContactRef$inboundSchema).optional(),
});

/** @internal */
export type ConfigurationSupplier$Outbound = {
  selectedSupplierId?: string | undefined;
  supplierOptions?: Array<ConfigurationContactRef$Outbound> | undefined;
};

/** @internal */
export const ConfigurationSupplier$outboundSchema: z.ZodType<
  ConfigurationSupplier$Outbound,
  z.ZodTypeDef,
  ConfigurationSupplier
> = z.object({
  selectedSupplierId: z.string().optional(),
  supplierOptions: z.array(ConfigurationContactRef$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConfigurationSupplier$ {
  /** @deprecated use `ConfigurationSupplier$inboundSchema` instead. */
  export const inboundSchema = ConfigurationSupplier$inboundSchema;
  /** @deprecated use `ConfigurationSupplier$outboundSchema` instead. */
  export const outboundSchema = ConfigurationSupplier$outboundSchema;
  /** @deprecated use `ConfigurationSupplier$Outbound` instead. */
  export type Outbound = ConfigurationSupplier$Outbound;
}

export function configurationSupplierToJSON(
  configurationSupplier: ConfigurationSupplier,
): string {
  return JSON.stringify(
    ConfigurationSupplier$outboundSchema.parse(configurationSupplier),
  );
}

export function configurationSupplierFromJSON(
  jsonString: string,
): SafeParseResult<ConfigurationSupplier, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ConfigurationSupplier$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConfigurationSupplier' from JSON`,
  );
}
