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
    security?: shared.Security;
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
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0";
    sdkVersion = "0.32.0";
    genVersion = "2.88.2";

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
        let securityClient = defaultClient;

        if (props?.security) {
            let security: shared.Security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase)) {
                security = new shared.Security(props.security);
            }
            securityClient = utils.createSecurityClient(defaultClient, security);
        }

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.dataIntegrity = new DataIntegrity(this.sdkConfiguration);
        this.excelReports = new ExcelReports(this.sdkConfiguration);
        this.reports = new Reports(this.sdkConfiguration);
    }
}
