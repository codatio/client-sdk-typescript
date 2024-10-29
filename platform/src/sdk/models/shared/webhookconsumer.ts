/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * A webhook consumer is an HTTP endpoint that developers can configure to subscribe to Codat's supported event types.
 *
 * @remarks
 *
 * See our documentation for more details on [Codat's webhook service](https://docs.codat.io/using-the-api/webhooks/overview).
 */
export type WebhookConsumer = {
  /**
   * Unique identifier for the webhook consumer.
   */
  id?: string | undefined;
  /**
   * The URL that will consume webhook events dispatched by Codat.
   */
  url?: string | undefined;
  /**
   * Flag that enables or disables the endpoint from receiving events. Disabled when set to `true`.
   */
  disabled?: boolean | null | undefined;
  /**
   * An array of event types the webhook consumer subscribes to.
   */
  eventTypes?: Array<string> | undefined;
  /**
   * Company tags provide an additional way to filter messages, independent of event types. Company tags are case-sensitive, and only messages from companies with matching tags will be sent to this endpoint. Use the format `tagKey:tagValue`.
   */
  companyTags?: Array<string> | undefined;
  /**
   * Unique identifier of the company to indicate company-specific events. The associated webhook consumer will receive events only for the specified ID.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  companyId?: string | null | undefined;
};

/** @internal */
export const WebhookConsumer$inboundSchema: z.ZodType<
  WebhookConsumer,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  url: z.string().optional(),
  disabled: z.nullable(z.boolean().default(false)),
  eventTypes: z.array(z.string()).optional(),
  companyTags: z.array(z.string()).optional(),
  companyId: z.nullable(z.string()).optional(),
});

/** @internal */
export type WebhookConsumer$Outbound = {
  id?: string | undefined;
  url?: string | undefined;
  disabled: boolean | null;
  eventTypes?: Array<string> | undefined;
  companyTags?: Array<string> | undefined;
  companyId?: string | null | undefined;
};

/** @internal */
export const WebhookConsumer$outboundSchema: z.ZodType<
  WebhookConsumer$Outbound,
  z.ZodTypeDef,
  WebhookConsumer
> = z.object({
  id: z.string().optional(),
  url: z.string().optional(),
  disabled: z.nullable(z.boolean().default(false)),
  eventTypes: z.array(z.string()).optional(),
  companyTags: z.array(z.string()).optional(),
  companyId: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookConsumer$ {
  /** @deprecated use `WebhookConsumer$inboundSchema` instead. */
  export const inboundSchema = WebhookConsumer$inboundSchema;
  /** @deprecated use `WebhookConsumer$outboundSchema` instead. */
  export const outboundSchema = WebhookConsumer$outboundSchema;
  /** @deprecated use `WebhookConsumer$Outbound` instead. */
  export type Outbound = WebhookConsumer$Outbound;
}
