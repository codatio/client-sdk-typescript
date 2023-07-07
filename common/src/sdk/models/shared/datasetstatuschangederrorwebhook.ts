/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class DatasetStatusChangedErrorWebhookData extends SpeakeasyBase {
    /**
     * Data type the sync completed for.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataType" })
    dataType?: string;

    /**
     * Unique identifier for the dataset that completed its sync.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "datasetId" })
    datasetId?: string;

    /**
     * The current status of the dataset's sync.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "datasetStatus" })
    datasetStatus?: string;
}

/**
 * Webhook request body to notify that a data synchronization has completed.
 */
export class DatasetStatusChangedErrorWebhook extends SpeakeasyBase {
    /**
     * Unique identifier of the webhook event.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "AlertId" })
    alertId?: string;

    /**
     * Unique identifier for your SMB in Codat.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "CompanyId" })
    companyId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "Data" })
    @Type(() => DatasetStatusChangedErrorWebhookData)
    data?: DatasetStatusChangedErrorWebhookData;

    /**
     * A human readable message about the webhook.
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
    @Expose({ name: "Type" })
    type?: string;
}
