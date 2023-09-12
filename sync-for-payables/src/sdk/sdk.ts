/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Accounts } from "./accounts";
import { BillCreditNotes } from "./billcreditnotes";
import { BillPayments } from "./billpayments";
import { Bills } from "./bills";
import { Companies } from "./companies";
import { Connections } from "./connections";
import { JournalEntries } from "./journalentries";
import { Journals } from "./journals";
import { ManageData } from "./managedata";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { PaymentMethods } from "./paymentmethods";
import { PushOperations } from "./pushoperations";
import { Suppliers } from "./suppliers";
import { TaxRates } from "./taxrates";
import { TrackingCategories } from "./trackingcategories";
import axios from "axios";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Production
     */
    "https://api.codat.io",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "3.0.0";
    sdkVersion = "0.2.1";
    genVersion = "2.108.3";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Sync for Payables: The API for Sync for Payables.
 *
 * @remarks
 *
 * Sync for Payables is an API and a set of supporting tools built to help integrate with your customers' accounting software, and keep their supplier information, invoices, and payments in sync.
 *
 * [Read More...](https://docs.codat.io/payables/overview)
 */
export class CodatSyncPayables {
    /**
     * Accounts
     */
    public accounts: Accounts;
    /**
     * Bill credit notes
     */
    public billCreditNotes: BillCreditNotes;
    /**
     * Bill payments
     */
    public billPayments: BillPayments;
    /**
     * Bills
     */
    public bills: Bills;
    /**
     * Create and manage your Codat companies.
     */
    public companies: Companies;
    /**
     * Manage your companies' data connections.
     */
    public connections: Connections;
    /**
     * Journal entries
     */
    public journalEntries: JournalEntries;
    /**
     * Journals
     */
    public journals: Journals;
    /**
     * Asynchronously retrieve data from an integration to refresh data in Codat.
     */
    public manageData: ManageData;
    /**
     * Payment methods
     */
    public paymentMethods: PaymentMethods;
    /**
     * Access create, update and delete operations made to an SMB's data connection.
     */
    public pushOperations: PushOperations;
    /**
     * Suppliers
     */
    public suppliers: Suppliers;
    /**
     * Tax rates
     */
    public taxRates: TaxRates;
    /**
     * Tracking categories
     */
    public trackingCategories: TrackingCategories;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.accounts = new Accounts(this.sdkConfiguration);
        this.billCreditNotes = new BillCreditNotes(this.sdkConfiguration);
        this.billPayments = new BillPayments(this.sdkConfiguration);
        this.bills = new Bills(this.sdkConfiguration);
        this.companies = new Companies(this.sdkConfiguration);
        this.connections = new Connections(this.sdkConfiguration);
        this.journalEntries = new JournalEntries(this.sdkConfiguration);
        this.journals = new Journals(this.sdkConfiguration);
        this.manageData = new ManageData(this.sdkConfiguration);
        this.paymentMethods = new PaymentMethods(this.sdkConfiguration);
        this.pushOperations = new PushOperations(this.sdkConfiguration);
        this.suppliers = new Suppliers(this.sdkConfiguration);
        this.taxRates = new TaxRates(this.sdkConfiguration);
        this.trackingCategories = new TrackingCategories(this.sdkConfiguration);
    }

    /**
     * Get company accounting profile
     *
     * @remarks
     * Gets the latest basic info for a company.
     */
    async getAccountingProfile(
        req: operations.GetAccountingProfileRequest,
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.GetAccountingProfileResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAccountingProfileRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/companies/{companyId}/data/info", req);
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const globalRetryConfig = this.sdkConfiguration.retryConfig;
        let retryConfig: any = retries;
        if (!retryConfig) {
            if (globalRetryConfig) {
                retryConfig = globalRetryConfig;
            } else {
                retryConfig = new utils.RetryConfig(
                    "backoff",
                    new utils.BackoffStrategy(500, 60000, 1.5, 3600000),
                    true
                );
            }
        }
        const httpRes: AxiosResponse = await utils.Retry(() => {
            return client.request({
                validateStatus: () => true,
                url: url,
                method: "get",
                headers: headers,
                responseType: "arraybuffer",
                ...config,
            });
        }, new utils.Retries(retryConfig, ["408", "429", "5XX"]));

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetAccountingProfileResponse =
            new operations.GetAccountingProfileResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.companyInformation = utils.objectToClass(
                        JSON.parse(decodedRes),
                        operations.GetAccountingProfileCompanyInformation
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case [401, 404, 409, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.errorMessage = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.ErrorMessage
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}
