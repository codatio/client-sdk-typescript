/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConnectionStatus } from "./connectionstatus";
import { Expose, Type } from "class-transformer";

export class CompanyDataConnectionStatusChangedWebhookData extends SpeakeasyBase {
    /**
     * Unique identifier for a company's data connection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dataConnectionId" })
    dataConnectionId?: string;

    /**
     * The current authorization status of the data connection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "newStatus" })
    newStatus?: ConnectionStatus;

    /**
     * The current authorization status of the data connection.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "oldStatus" })
    oldStatus?: ConnectionStatus;

    /**
     * A unique 4-letter key to represent a platform in each integration. View [accounting](https://docs.codat.io/integrations/accounting/accounting-platform-keys), [banking](https://docs.codat.io/integrations/banking/banking-platform-keys), and [commerce](https://docs.codat.io/integrations/commerce/commerce-platform-keys) platform keys.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "platformKey" })
    platformKey?: string;
}

/**
 * Webhook request body for a company's data connection status changed.
 */
export class CompanyDataConnectionStatusChangedWebhook extends SpeakeasyBase {
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
    @Type(() => CompanyDataConnectionStatusChangedWebhookData)
    data?: CompanyDataConnectionStatusChangedWebhookData;

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
