/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ErrorMessage, ErrorMessage$ } from "./errormessage";
import { WebhookConsumers, WebhookConsumers$ } from "./webhookconsumers";
import * as z from "zod";

export type ListWebhookConsumersResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * The request made is not valid.
     */
    errorMessage?: ErrorMessage | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * OK
     */
    webhookConsumers?: WebhookConsumers | undefined;
};

/** @internal */
export namespace ListWebhookConsumersResponse$ {
    export const inboundSchema: z.ZodType<ListWebhookConsumersResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            ErrorMessage: ErrorMessage$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            webhookConsumers: WebhookConsumers$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ErrorMessage === undefined ? null : { errorMessage: v.ErrorMessage }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.webhookConsumers === undefined
                    ? null
                    : { webhookConsumers: v.webhookConsumers }),
            };
        });

    export type Outbound = {
        ContentType: string;
        ErrorMessage?: ErrorMessage$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        webhookConsumers?: WebhookConsumers$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListWebhookConsumersResponse> = z
        .object({
            contentType: z.string(),
            errorMessage: ErrorMessage$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            webhookConsumers: WebhookConsumers$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.errorMessage === undefined ? null : { ErrorMessage: v.errorMessage }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.webhookConsumers === undefined
                    ? null
                    : { webhookConsumers: v.webhookConsumers }),
            };
        });
}
