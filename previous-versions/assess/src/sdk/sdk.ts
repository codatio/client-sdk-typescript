/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { DataIntegrity } from "./dataintegrity";
import { ExcelReports } from "./excelreports";
import * as shared from "./models/shared";
import { Reports } from "./reports";
import axios from "axios";
import { AxiosInstance } from "axios";

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
    openapiDocVersion = "1.0";
    sdkVersion = "0.35.0";
    genVersion = "2.144.7";
    userAgent = "speakeasy-sdk/typescript 0.35.0 2.144.7 1.0 @codat/assess";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Assess API: Codat's financial insights API
 *
 * @remarks
 * Check that you have enabled the [data types required by Assess](https://docs.codat.io/assess/get-started#prerequisites) for all of its features to work.
 *
 * [Read more...](https://www.docs.codat.io/assess/)
 *
 * [See our OpenAPI spec](https://github.com/codatio/oas)
 */
export class CodatAssess {
    /**
     * Match mutable accounting data with immutable banking data to increase confidence in financial data
     */
    public dataIntegrity: DataIntegrity;
    /**
     * Downloadable reports
     */
    public excelReports: ExcelReports;
    /**
     * Enriched reports and analyses of financial data
     */
    public reports: Reports;

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

        this.dataIntegrity = new DataIntegrity(this.sdkConfiguration);
        this.excelReports = new ExcelReports(this.sdkConfiguration);
        this.reports = new Reports(this.sdkConfiguration);
    }
}
