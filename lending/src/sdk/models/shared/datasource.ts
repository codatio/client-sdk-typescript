/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Accounts,
  Accounts$inboundSchema,
  Accounts$Outbound,
  Accounts$outboundSchema,
} from "./accounts.js";

export type DataSource = {
  /**
   * An array containing bank account data for each connected banking data source that have the following data types enabled: `banking-accounts`, `banking-transactions`.
   */
  accounts?: Array<Accounts> | undefined;
};

/** @internal */
export const DataSource$inboundSchema: z.ZodType<
  DataSource,
  z.ZodTypeDef,
  unknown
> = z.object({
  accounts: z.array(Accounts$inboundSchema).optional(),
});

/** @internal */
export type DataSource$Outbound = {
  accounts?: Array<Accounts$Outbound> | undefined;
};

/** @internal */
export const DataSource$outboundSchema: z.ZodType<
  DataSource$Outbound,
  z.ZodTypeDef,
  DataSource
> = z.object({
  accounts: z.array(Accounts$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DataSource$ {
  /** @deprecated use `DataSource$inboundSchema` instead. */
  export const inboundSchema = DataSource$inboundSchema;
  /** @deprecated use `DataSource$outboundSchema` instead. */
  export const outboundSchema = DataSource$outboundSchema;
  /** @deprecated use `DataSource$Outbound` instead. */
  export type Outbound = DataSource$Outbound;
}

export function dataSourceToJSON(dataSource: DataSource): string {
  return JSON.stringify(DataSource$outboundSchema.parse(dataSource));
}

export function dataSourceFromJSON(
  jsonString: string,
): SafeParseResult<DataSource, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DataSource$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DataSource' from JSON`,
  );
}
