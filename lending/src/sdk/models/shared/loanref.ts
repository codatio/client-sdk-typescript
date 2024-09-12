/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type LoanRef = {
  /**
   * The id of the object being referred to.
   */
  id?: string | undefined;
  /**
   * The dataConnectionId the object being referred to is associated with.
   */
  dataConnectionId?: string | undefined;
  /**
   * The object type data is referring to, e.g. Account.
   */
  type?: string | undefined;
};

/** @internal */
export const LoanRef$inboundSchema: z.ZodType<LoanRef, z.ZodTypeDef, unknown> =
  z.object({
    id: z.string().optional(),
    dataConnectionId: z.string().optional(),
    type: z.string().optional(),
  });

/** @internal */
export type LoanRef$Outbound = {
  id?: string | undefined;
  dataConnectionId?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const LoanRef$outboundSchema: z.ZodType<
  LoanRef$Outbound,
  z.ZodTypeDef,
  LoanRef
> = z.object({
  id: z.string().optional(),
  dataConnectionId: z.string().optional(),
  type: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LoanRef$ {
  /** @deprecated use `LoanRef$inboundSchema` instead. */
  export const inboundSchema = LoanRef$inboundSchema;
  /** @deprecated use `LoanRef$outboundSchema` instead. */
  export const outboundSchema = LoanRef$outboundSchema;
  /** @deprecated use `LoanRef$Outbound` instead. */
  export type Outbound = LoanRef$Outbound;
}
