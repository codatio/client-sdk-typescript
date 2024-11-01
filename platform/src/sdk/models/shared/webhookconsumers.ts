/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  WebhookConsumer,
  WebhookConsumer$inboundSchema,
  WebhookConsumer$Outbound,
  WebhookConsumer$outboundSchema,
} from "./webhookconsumer.js";

export type WebhookConsumers = {
  results?: Array<WebhookConsumer> | undefined;
};

/** @internal */
export const WebhookConsumers$inboundSchema: z.ZodType<
  WebhookConsumers,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.array(WebhookConsumer$inboundSchema).optional(),
});

/** @internal */
export type WebhookConsumers$Outbound = {
  results?: Array<WebhookConsumer$Outbound> | undefined;
};

/** @internal */
export const WebhookConsumers$outboundSchema: z.ZodType<
  WebhookConsumers$Outbound,
  z.ZodTypeDef,
  WebhookConsumers
> = z.object({
  results: z.array(WebhookConsumer$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookConsumers$ {
  /** @deprecated use `WebhookConsumers$inboundSchema` instead. */
  export const inboundSchema = WebhookConsumers$inboundSchema;
  /** @deprecated use `WebhookConsumers$outboundSchema` instead. */
  export const outboundSchema = WebhookConsumers$outboundSchema;
  /** @deprecated use `WebhookConsumers$Outbound` instead. */
  export type Outbound = WebhookConsumers$Outbound;
}
