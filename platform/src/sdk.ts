/* tslint:disable */
/* eslint-disable */
import { Configuration, ConfigurationParameters } from './runtime';
import type * as shared from './sdk/models/index';
import { SDKOptions, resolveServerURL, resolveAuthHeader, resolveUserAgent, makeFetch, HTTPClient } from './lib/sdkconfig';
import { SDKHooks } from './hooks/hooks';
import { validateWebhook as runValidateWebhook } from './funcs/validateWebhook';
import {
    Companies,
    ConnectionManagement,
    Connections,
    Cors,
    CustomDataType,
    Integrations,
    PushData,
    ReadData,
    RefreshData,
    Settings,
    SupplementalData,
    Webhooks,
} from './apis/index';

export class CodatPlatform {
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

    private _cors?: Cors;
    get cors(): Cors {
        if (!this._cors) { this._cors = new Cors(this._config); }
        return this._cors;
    }

    private _companies?: Companies;
    get companies(): Companies {
        if (!this._companies) { this._companies = new Companies(this._config); }
        return this._companies;
    }

    private _connectionManagement?: ConnectionManagement;
    get connectionManagement(): ConnectionManagement {
        if (!this._connectionManagement) { this._connectionManagement = new ConnectionManagement(this._config); }
        return this._connectionManagement;
    }

    private _connections?: Connections;
    get connections(): Connections {
        if (!this._connections) { this._connections = new Connections(this._config); }
        return this._connections;
    }

    private _customDataType?: CustomDataType;
    get customDataType(): CustomDataType {
        if (!this._customDataType) { this._customDataType = new CustomDataType(this._config); }
        return this._customDataType;
    }

    private _integrations?: Integrations;
    get integrations(): Integrations {
        if (!this._integrations) { this._integrations = new Integrations(this._config); }
        return this._integrations;
    }

    private _pushData?: PushData;
    get pushData(): PushData {
        if (!this._pushData) { this._pushData = new PushData(this._config); }
        return this._pushData;
    }

    private _readData?: ReadData;
    get readData(): ReadData {
        if (!this._readData) { this._readData = new ReadData(this._config); }
        return this._readData;
    }

    private _refreshData?: RefreshData;
    get refreshData(): RefreshData {
        if (!this._refreshData) { this._refreshData = new RefreshData(this._config); }
        return this._refreshData;
    }

    private _settings?: Settings;
    get settings(): Settings {
        if (!this._settings) { this._settings = new Settings(this._config); }
        return this._settings;
    }

    private _supplementalData?: SupplementalData;
    get supplementalData(): SupplementalData {
        if (!this._supplementalData) { this._supplementalData = new SupplementalData(this._config); }
        return this._supplementalData;
    }

    private _webhooks?: Webhooks;
    get webhooks(): Webhooks {
        if (!this._webhooks) { this._webhooks = new Webhooks(this._config); }
        return this._webhooks;
    }

    async validateWebhook(args: { request: { body: string; headers: Record<string, string> | Headers; url: string; method: string; } | Request; }): Promise<shared.CompanyWebhook | shared.CompanyProductWebhook | shared.ConnectionWebhook | shared.ReadCompletedWebhook | shared.DataTypeWriteWebhook | shared.ClientRateLimitWebhook | undefined> {
        const outcome = await runValidateWebhook(this as never, { request: args.request });
        if (!outcome.ok) { throw outcome.error; }
        return outcome.value;
    }
}
