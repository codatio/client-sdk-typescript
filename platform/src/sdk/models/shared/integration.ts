/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DataTypeFeature,
  DataTypeFeature$inboundSchema,
  DataTypeFeature$Outbound,
  DataTypeFeature$outboundSchema,
} from "./datatypefeature.js";
import {
  SourceType,
  SourceType$inboundSchema,
  SourceType$outboundSchema,
} from "./sourcetype.js";

/**
 * An integration that Codat supports
 */
export type Integration = {
  /**
   * A unique 4-letter key to represent a platform in each integration. View [accounting](https://docs.codat.io/integrations/accounting/overview#platform-keys), [banking](https://docs.codat.io/integrations/banking/overview#platform-keys), and [commerce](https://docs.codat.io/integrations/commerce/overview#platform-keys) platform keys.
   */
  key: string;
  /**
   * Static url for integration's logo.
   */
  logoUrl: string;
  /**
   * Name of integration.
   */
  name: string;
  /**
   * Whether this integration is enabled for your customers to use.
   */
  enabled: boolean;
  /**
   * A source-specific ID used to distinguish between different sources originating from the same data connection. In general, a data connection is a single data source. However, for TrueLayer, `sourceId` is associated with a specific bank and has a many-to-one relationship with the `integrationId`.
   */
  sourceId?: string | undefined;
  /**
   * The type of platform of the connection.
   */
  sourceType?: SourceType | undefined;
  /**
   * A Codat ID representing the integration.
   */
  integrationId?: string | undefined;
  /**
   * `True` if the integration is to an application installed and run locally on an SMBs computer.
   */
  isOfflineConnector?: boolean | undefined;
  /**
   * `True` if the integration is currently in beta release.
   */
  isBeta?: boolean | undefined;
  /**
   * The name of the data provider.
   */
  dataProvidedBy?: string | undefined;
  datatypeFeatures?: Array<DataTypeFeature> | undefined;
};

/** @internal */
export const Integration$inboundSchema: z.ZodType<
  Integration,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string(),
  logoUrl: z.string(),
  name: z.string(),
  enabled: z.boolean(),
  sourceId: z.string().optional(),
  sourceType: SourceType$inboundSchema.optional(),
  integrationId: z.string().optional(),
  isOfflineConnector: z.boolean().optional(),
  isBeta: z.boolean().optional(),
  dataProvidedBy: z.string().optional(),
  datatypeFeatures: z.array(DataTypeFeature$inboundSchema).optional(),
});

/** @internal */
export type Integration$Outbound = {
  key: string;
  logoUrl: string;
  name: string;
  enabled: boolean;
  sourceId?: string | undefined;
  sourceType?: string | undefined;
  integrationId?: string | undefined;
  isOfflineConnector?: boolean | undefined;
  isBeta?: boolean | undefined;
  dataProvidedBy?: string | undefined;
  datatypeFeatures?: Array<DataTypeFeature$Outbound> | undefined;
};

/** @internal */
export const Integration$outboundSchema: z.ZodType<
  Integration$Outbound,
  z.ZodTypeDef,
  Integration
> = z.object({
  key: z.string(),
  logoUrl: z.string(),
  name: z.string(),
  enabled: z.boolean(),
  sourceId: z.string().optional(),
  sourceType: SourceType$outboundSchema.optional(),
  integrationId: z.string().optional(),
  isOfflineConnector: z.boolean().optional(),
  isBeta: z.boolean().optional(),
  dataProvidedBy: z.string().optional(),
  datatypeFeatures: z.array(DataTypeFeature$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Integration$ {
  /** @deprecated use `Integration$inboundSchema` instead. */
  export const inboundSchema = Integration$inboundSchema;
  /** @deprecated use `Integration$outboundSchema` instead. */
  export const outboundSchema = Integration$outboundSchema;
  /** @deprecated use `Integration$Outbound` instead. */
  export type Outbound = Integration$Outbound;
}

export function integrationToJSON(integration: Integration): string {
  return JSON.stringify(Integration$outboundSchema.parse(integration));
}

export function integrationFromJSON(
  jsonString: string,
): SafeParseResult<Integration, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Integration$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Integration' from JSON`,
  );
}
