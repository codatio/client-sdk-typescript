/* tslint:disable */
/* eslint-disable */
import { Configuration, ConfigurationParameters } from './runtime';
import type * as shared from './sdk/models/index';
import { SDKOptions, resolveServerURL, resolveAuthHeader, resolveUserAgent, makeFetch, HTTPClient } from './lib/sdkconfig';
import { SDKHooks } from './hooks/hooks';
import { validateWebhook as runValidateWebhook } from './funcs/validateWebhook';
import {
    AccountMapping,
    BankAccounts,
    Companies,
    CompanyInformation,
    Connections,
    ManagedBankFeeds,
    SourceAccounts,
    Transactions,
} from './apis/index';

export class CodatBankFeeds {
    private readonly _config: Configuration;

    constructor(options: SDKOptions | ConfigurationParameters | Configuration = {}) {
        if (options instanceof Configuration) {
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
        this._config = new Configuration({
            ...opts,
            basePath: resolvedBaseURL,
            apiKey: opts.apiKey ?? resolveAuthHeader(opts.authHeader),
            fetchApi: opts.fetchApi ?? makeFetch({ ...opts, httpClient: init.client }, hooks),
            headers: { ...(opts.headers ?? {}), ...resolveUserAgent(opts.userAgent) },
        });
    }

    private _accountMapping?: AccountMapping;
    get accountMapping(): AccountMapping {
        if (!this._accountMapping) { this._accountMapping = new AccountMapping(this._config); }
        return this._accountMapping;
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

    private _companyInformation?: CompanyInformation;
    get companyInformation(): CompanyInformation {
        if (!this._companyInformation) { this._companyInformation = new CompanyInformation(this._config); }
        return this._companyInformation;
    }

    private _connections?: Connections;
    get connections(): Connections {
        if (!this._connections) { this._connections = new Connections(this._config); }
        return this._connections;
    }

    private _managedBankFeeds?: ManagedBankFeeds;
    get managedBankFeeds(): ManagedBankFeeds {
        if (!this._managedBankFeeds) { this._managedBankFeeds = new ManagedBankFeeds(this._config); }
        return this._managedBankFeeds;
    }

    private _sourceAccounts?: SourceAccounts;
    get sourceAccounts(): SourceAccounts {
        if (!this._sourceAccounts) { this._sourceAccounts = new SourceAccounts(this._config); }
        return this._sourceAccounts;
    }

    private _transactions?: Transactions;
    get transactions(): Transactions {
        if (!this._transactions) { this._transactions = new Transactions(this._config); }
        return this._transactions;
    }

    async validateWebhook(args: { request: { body: string; headers: Record<string, string> | Headers; url: string; method: string; } | Request; }): Promise<shared.ClientRateLimitWebhook | shared.SourceAccountWebhook | undefined> {
        const outcome = await runValidateWebhook(this as never, { request: args.request });
        if (!outcome.ok) { throw outcome.error; }
        return outcome.value;
    }
}
