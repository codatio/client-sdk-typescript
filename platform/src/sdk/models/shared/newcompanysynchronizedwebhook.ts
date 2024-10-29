/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";

/**
 * Webhook request body to notify that a new company has successfully synchronized at least one dataType for the first time.
 */
export type NewCompanySynchronizedWebhook = {
  /**
   * Unique identifier for your client in Codat.
   */
  clientId?: string | undefined;
  /**
   * Name of your client in Codat.
   */
  clientName?: string | undefined;
  /**
   * Unique identifier for your SMB in Codat.
   */
  companyId?: string | undefined;
  /**
   * Unique identifier for a company's data connection.
   */
  dataConnectionId?: string | undefined;
  /**
   * Unique identifier for the rule.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  ruleId?: string | undefined;
  /**
   * The type of rule.
   */
  ruleType?: string | undefined;
  /**
   * Unique identifier of the webhook event.
   */
  alertId?: string | undefined;
  /**
   * A human-readable message about the webhook.
   */
  message?: string | undefined;
};

/** @internal */
export const NewCompanySynchronizedWebhook$inboundSchema: z.ZodType<
  NewCompanySynchronizedWebhook,
  z.ZodTypeDef,
  unknown
> = z.object({
  ClientId: z.string().optional(),
  ClientName: z.string().optional(),
  CompanyId: z.string().optional(),
  DataConnectionId: z.string().optional(),
  RuleId: z.string().optional(),
  RuleType: z.string().optional(),
  AlertId: z.string().optional(),
  Message: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "ClientId": "clientId",
    "ClientName": "clientName",
    "CompanyId": "companyId",
    "DataConnectionId": "dataConnectionId",
    "RuleId": "ruleId",
    "RuleType": "ruleType",
    "AlertId": "alertId",
    "Message": "message",
  });
});

/** @internal */
export type NewCompanySynchronizedWebhook$Outbound = {
  ClientId?: string | undefined;
  ClientName?: string | undefined;
  CompanyId?: string | undefined;
  DataConnectionId?: string | undefined;
  RuleId?: string | undefined;
  RuleType?: string | undefined;
  AlertId?: string | undefined;
  Message?: string | undefined;
};

/** @internal */
export const NewCompanySynchronizedWebhook$outboundSchema: z.ZodType<
  NewCompanySynchronizedWebhook$Outbound,
  z.ZodTypeDef,
  NewCompanySynchronizedWebhook
> = z.object({
  clientId: z.string().optional(),
  clientName: z.string().optional(),
  companyId: z.string().optional(),
  dataConnectionId: z.string().optional(),
  ruleId: z.string().optional(),
  ruleType: z.string().optional(),
  alertId: z.string().optional(),
  message: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    clientId: "ClientId",
    clientName: "ClientName",
    companyId: "CompanyId",
    dataConnectionId: "DataConnectionId",
    ruleId: "RuleId",
    ruleType: "RuleType",
    alertId: "AlertId",
    message: "Message",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NewCompanySynchronizedWebhook$ {
  /** @deprecated use `NewCompanySynchronizedWebhook$inboundSchema` instead. */
  export const inboundSchema = NewCompanySynchronizedWebhook$inboundSchema;
  /** @deprecated use `NewCompanySynchronizedWebhook$outboundSchema` instead. */
  export const outboundSchema = NewCompanySynchronizedWebhook$outboundSchema;
  /** @deprecated use `NewCompanySynchronizedWebhook$Outbound` instead. */
  export type Outbound = NewCompanySynchronizedWebhook$Outbound;
}
