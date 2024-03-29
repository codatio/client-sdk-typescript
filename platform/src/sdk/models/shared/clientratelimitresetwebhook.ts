/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientRateLimitResetWebhookData } from "./clientratelimitresetwebhookdata";
import { Expose, Type } from "class-transformer";

/**
 * Webhook request body for a client that has had their rate limit reset.
 */
export class ClientRateLimitResetWebhook extends SpeakeasyBase {
    /**
     * Unique identifier of the webhook event.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "AlertId" })
    alertId?: string;

    /**
     * Unique identifier for your client in Codat.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ClientId" })
    clientId?: string;

    /**
     * Name of your client in Codat.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ClientName" })
    clientName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "Data" })
    @Type(() => ClientRateLimitResetWebhookData)
    data?: ClientRateLimitResetWebhookData;

    /**
     * A human-readable message about the webhook.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Message" })
    message?: string;

    /**
     * Unique identifier for the rule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "RuleId" })
    ruleId?: string;

    /**
     * The type of rule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "RuleType" })
    ruleType?: string;
}
