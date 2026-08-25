/* tslint:disable */
/* eslint-disable */
import { Configuration, ConfigurationParameters } from './runtime';
import type * as shared from './sdk/models/index';
import { SDKOptions, resolveServerURL, resolveAuthHeader, resolveUserAgent, makeFetch, HTTPClient } from './lib/sdkconfig';
import { SDKHooks } from './hooks/hooks';
import { validateWebhook as runValidateWebhook } from './funcs/validateWebhook';
import {
    BankAccounts,
    BillPayments,
    Bills,
    Companies,
    CompanyInformation,
    Connections,
    Suppliers,
} from './apis/index';

export class CodatSyncPayables {
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

    private _bankAccounts?: BankAccounts;
    get bankAccounts(): BankAccounts {
        if (!this._bankAccounts) { this._bankAccounts = new BankAccounts(this._config); }
        return this._bankAccounts;
    }

    private _billPayments?: BillPayments;
    get billPayments(): BillPayments {
        if (!this._billPayments) { this._billPayments = new BillPayments(this._config); }
        return this._billPayments;
    }

    private _bills?: Bills;
    get bills(): Bills {
        if (!this._bills) { this._bills = new Bills(this._config); }
        return this._bills;
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

    private _suppliers?: Suppliers;
    get suppliers(): Suppliers {
        if (!this._suppliers) { this._suppliers = new Suppliers(this._config); }
        return this._suppliers;
    }

    async validateWebhook(args: { request: { body: string; headers: Record<string, string> | Headers; url: string; method: string; } | Request; }): Promise<shared.ClientRateLimitWebhook | undefined> {
        const outcome = await runValidateWebhook(this as never, { request: args.request });
        if (!outcome.ok) { throw outcome.error; }
        return outcome.value;
    }
}
