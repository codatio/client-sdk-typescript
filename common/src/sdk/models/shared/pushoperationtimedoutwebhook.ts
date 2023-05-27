/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class PushOperationTimedOutWebhookData extends SpeakeasyBase {
    /**
     * Data type used in the push operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataType" })
    dataType?: string;

    /**
     * Unique identifier for the push operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pushOperationKey" })
    pushOperationKey?: string;
}

/**
 * Webhook request body notifying that a push push operation has timed out.
 */
export class PushOperationTimedOutWebhook extends SpeakeasyBase {
    /**
     * Unique identifier of the alert.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "alertId" })
    alertId?: string;

    /**
     * Unique identifier for your SMB in Codat.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "companyId" })
    companyId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => PushOperationTimedOutWebhookData)
    data?: PushOperationTimedOutWebhookData;

    /**
     * A human readable message about the webhook.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    /**
     * Unique identifier for the rule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ruleId" })
    ruleId?: string;

    /**
     * The type of rule.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ruleType" })
    ruleType?: string;
}
