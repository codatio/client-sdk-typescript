/* tslint:disable */
/* eslint-disable */
import { Configuration as SDKConfiguration, ConfigurationParameters } from './runtime';
import type * as shared from './sdk/models/index';
import { SDKOptions, resolveServerURL, resolveAuthHeader, resolveUserAgent, makeFetch, HTTPClient } from './lib/sdkconfig';
import { SDKHooks } from './hooks/hooks';
import { validateWebhook as runValidateWebhook } from './funcs/validateWebhook';
import {
    Accounts,
    Adjustments,
    Attachments,
    BankAccounts,
    Companies,
    CompanyInfo,
    Configuration,
    Connections,
    Customers,
    Expenses,
    ManageData,
    MappingOptions,
    PushOperations,
    Reimbursements,
    Suppliers,
    Sync,
    TransactionStatus,
    Transfers,
} from './apis/index';

export class CodatSyncExpenses {
    private readonly _config: SDKConfiguration;

    constructor(options: SDKOptions | ConfigurationParameters | SDKConfiguration = {}) {
        if (options instanceof SDKConfiguration) {
            this._config = options;
            return;
        }
        const opts = options as SDKOptions & ConfigurationParameters;
        const hooks = new SDKHooks();
        const baseURL = opts.basePath ?? resolveServerURL(opts);
        let parsedBaseURL: URL | null = null;
        try { parsedBaseURL = new URL(baseURL); } catch { parsedBaseURL = null; }
        const init = hooks.sdkInit({ baseURL: parsedBaseURL, client: opts.httpClient ?? new HTTPClient() });
        const resolvedBaseURL = init.baseURL ? init.baseURL.toString().replace(/\/+$/, '') : baseURL;
        this._config = new SDKConfiguration({
            ...opts,
            basePath: resolvedBaseURL,
            apiKey: opts.apiKey ?? resolveAuthHeader(opts.authHeader),
            fetchApi: opts.fetchApi ?? makeFetch({ ...opts, httpClient: init.client }, hooks),
            headers: { ...(opts.headers ?? {}), ...resolveUserAgent(opts.userAgent) },
        });
    }

    private _accounts?: Accounts;
    get accounts(): Accounts {
        if (!this._accounts) { this._accounts = new Accounts(this._config); }
        return this._accounts;
    }

    private _adjustments?: Adjustments;
    get adjustments(): Adjustments {
        if (!this._adjustments) { this._adjustments = new Adjustments(this._config); }
        return this._adjustments;
    }

    private _attachments?: Attachments;
    get attachments(): Attachments {
        if (!this._attachments) { this._attachments = new Attachments(this._config); }
        return this._attachments;
    }

    private _bankAccounts?: BankAccounts;
    get bankAccounts(): BankAccounts {
        if (!this._bankAccounts) { this._bankAccounts = new BankAccounts(this._config); }
        return this._bankAccounts;
    }

    private _companies?: Companies;
    get companies(): Companies {
        if (!this._companies) { this._companies = new Companies(this._config); }
        return this._companies;
    }

    private _companyInfo?: CompanyInfo;
    get companyInfo(): CompanyInfo {
        if (!this._companyInfo) { this._companyInfo = new CompanyInfo(this._config); }
        return this._companyInfo;
    }

    private _configuration?: Configuration;
    get configuration(): Configuration {
        if (!this._configuration) { this._configuration = new Configuration(this._config); }
        return this._configuration;
    }

    private _connections?: Connections;
    get connections(): Connections {
        if (!this._connections) { this._connections = new Connections(this._config); }
        return this._connections;
    }

    private _customers?: Customers;
    get customers(): Customers {
        if (!this._customers) { this._customers = new Customers(this._config); }
        return this._customers;
    }

    private _expenses?: Expenses;
    get expenses(): Expenses {
        if (!this._expenses) { this._expenses = new Expenses(this._config); }
        return this._expenses;
    }

    private _manageData?: ManageData;
    get manageData(): ManageData {
        if (!this._manageData) { this._manageData = new ManageData(this._config); }
        return this._manageData;
    }

    private _mappingOptions?: MappingOptions;
    get mappingOptions(): MappingOptions {
        if (!this._mappingOptions) { this._mappingOptions = new MappingOptions(this._config); }
        return this._mappingOptions;
    }

    private _pushOperations?: PushOperations;
    get pushOperations(): PushOperations {
        if (!this._pushOperations) { this._pushOperations = new PushOperations(this._config); }
        return this._pushOperations;
    }

    private _reimbursements?: Reimbursements;
    get reimbursements(): Reimbursements {
        if (!this._reimbursements) { this._reimbursements = new Reimbursements(this._config); }
        return this._reimbursements;
    }

    private _suppliers?: Suppliers;
    get suppliers(): Suppliers {
        if (!this._suppliers) { this._suppliers = new Suppliers(this._config); }
        return this._suppliers;
    }

    private _sync?: Sync;
    get sync(): Sync {
        if (!this._sync) { this._sync = new Sync(this._config); }
        return this._sync;
    }

    private _transactionStatus?: TransactionStatus;
    get transactionStatus(): TransactionStatus {
        if (!this._transactionStatus) { this._transactionStatus = new TransactionStatus(this._config); }
        return this._transactionStatus;
    }

    private _transfers?: Transfers;
    get transfers(): Transfers {
        if (!this._transfers) { this._transfers = new Transfers(this._config); }
        return this._transfers;
    }

    async validateWebhook(args: { request: { body: string; headers: Record<string, string> | Headers; url: string; method: string; } | Request; }): Promise<shared.ExpensesSyncWebhook | shared.ClientRateLimitWebhook | undefined> {
        const outcome = await runValidateWebhook(this as never, { request: args.request });
        if (!outcome.ok) { throw outcome.error; }
        return outcome.value;
    }
}
