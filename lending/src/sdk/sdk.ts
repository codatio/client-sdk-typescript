/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { AccountsPayable } from "./accountspayable";
import { AccountsReceivable } from "./accountsreceivable";
import { Banking } from "./banking";
import { CodatLendingAccountingBankData } from "./codatlendingaccountingbankdata";
import { Companies } from "./companies";
import { CompanyInfo } from "./companyinfo";
import { Connections } from "./connections";
import { DataIntegrity } from "./dataintegrity";
import { ExcelReports } from "./excelreports";
import { FileUpload } from "./fileupload";
import { FinancialStatements } from "./financialstatements";
import { Liabilities } from "./liabilities";
import { LoanWriteback } from "./loanwriteback";
import { ManageData } from "./managedata";
import { Sales } from "./sales";
import { Transactions } from "./transactions";
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
    openapiDocVersion = "3.0.0";
    sdkVersion = "4.0.0";
    genVersion = "2.195.2";
    userAgent = "speakeasy-sdk/typescript 4.0.0 2.195.2 3.0.0 @codat/lending";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Lending API: Our Lending API helps you make smarter credit decisions on small businesses by enabling you to pull your customers' latest data from accounting, banking, and commerce platforms they are already using. It also includes features to help providers verify the accuracy of data and process it more efficiently.
 *
 * @remarks
 *
 * The Lending API is built on top of the latest accounting, commerce, and banking data, providing you with the most important data points you need to get a full picture of SMB creditworthiness and make a comprehensive assessment of your customers.
 *
 * [Explore product](https://docs.codat.io/lending/overview) | [See OpenAPI spec](https://github.com/codatio/oas)
 *
 * ---
 *
 * ## Endpoints
 *
 * | Endpoints            | Description                                                                                                |
 * |:---------------------|:-----------------------------------------------------------------------------------------------------------|
 * | Companies            | Create and manage your SMB users' companies.                                                               |
 * | Connections          | Create new and manage existing data connections for a company.                                             |
 * | Bank statements      | Retrieve banking data from linked bank accounts.                                                           |
 * | Sales                | Retrieve standardized sales data from a linked commerce platform.                                          |
 * | Financial statements | Financial data and reports from a linked accounting platform.                                              |
 * | Liabilities          | Debt and other liabilities.                                                                                |
 * | Accounts payable     | Data from a linked accounting platform representing money the business owes money to its suppliers.        |
 * | Accounts receivable  | Data from a linked accounting platform representing money owed to the business for sold goods or services. |
 * | Transactions         | Data from a linked accounting platform representing transactions.                                          |
 * | Data integrity       | Match mutable accounting data with immutable banking data to increase confidence in financial data.        |
 * | Company info         | View company profile from the source platform.                                                             |
 * | Excel reports        | Download reports in Excel format.                                                                          |
 * | Categories           | Manage Codat's automatic account categorization functionality.                                             |
 * | Manage data          | Control how data is retrieved from an integration.                                                         |
 * | File upload          | Endpoints to manage uploaded files.                                                                        |
 */
export class CodatLending {
    /**
     * Create and manage your Codat companies.
     */
    public companies: Companies;
    /**
     * Manage your companies' data connections.
     */
    public connections: Connections;
    public transactions: Transactions;
    /**
     * Access bank transactions from an accounting platform.
     */
    public accountingBankData: CodatLendingAccountingBankData;
    public banking: Banking;
    public accountsPayable: AccountsPayable;
    public sales: Sales;
    /**
     * View company information fetched from the source platform.
     */
    public companyInfo: CompanyInfo;
    public accountsReceivable: AccountsReceivable;
    /**
     * Endpoints to manage uploaded files.
     */
    public fileUpload: FileUpload;
    public loanWriteback: LoanWriteback;
    public financialStatements: FinancialStatements;
    public manageData: ManageData;
    /**
     * Debt and other liabilities.
     */
    public liabilities: Liabilities;
    /**
     * Match mutable accounting data with immutable banking data to increase confidence in financial data.
     */
    public dataIntegrity: DataIntegrity;
    /**
     * Download reports in Excel format.
     */
    public excelReports: ExcelReports;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.companies = new Companies(this.sdkConfiguration);
        this.connections = new Connections(this.sdkConfiguration);
        this.transactions = new Transactions(this.sdkConfiguration);
        this.accountingBankData = new CodatLendingAccountingBankData(this.sdkConfiguration);
        this.banking = new Banking(this.sdkConfiguration);
        this.accountsPayable = new AccountsPayable(this.sdkConfiguration);
        this.sales = new Sales(this.sdkConfiguration);
        this.companyInfo = new CompanyInfo(this.sdkConfiguration);
        this.accountsReceivable = new AccountsReceivable(this.sdkConfiguration);
        this.fileUpload = new FileUpload(this.sdkConfiguration);
        this.loanWriteback = new LoanWriteback(this.sdkConfiguration);
        this.financialStatements = new FinancialStatements(this.sdkConfiguration);
        this.manageData = new ManageData(this.sdkConfiguration);
        this.liabilities = new Liabilities(this.sdkConfiguration);
        this.dataIntegrity = new DataIntegrity(this.sdkConfiguration);
        this.excelReports = new ExcelReports(this.sdkConfiguration);
    }
}
