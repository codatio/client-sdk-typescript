/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { CorsSettings } from "./corssettings.js";
import * as errors from "./models/errors/index.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";

export class ConnectionManagement extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    private _corsSettings?: CorsSettings;
    get corsSettings(): CorsSettings {
        return (this._corsSettings ??= new CorsSettings(this.options$));
    }

    /**
     * Get access token
     *
     * @remarks
     * Use the *Get access token* endpoint to retrieve a new access token for use with the [Connections SDK](https://docs.codat.io/auth-flow/optimize/connection-management). The token is only valid for one hour and applies to a single company.
     *
     * The embeddable [Connections SDK](https://docs.codat.io/auth-flow/optimize/connection-management) lets your customers control access to their data by allowing them to manage their existing connections.
     */
    async getAccessToken(
        request: operations.GetConnectionManagementAccessTokenRequest,
        options?: RequestOptions
    ): Promise<shared.ConnectionManagementAccessToken> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.GetConnectionManagementAccessTokenRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            companyId: encodeSimple$("companyId", payload$.companyId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/companies/{companyId}/connectionManagement/accessToken"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.authHeader === "function") {
            security$ = { authHeader: await this.options$.authHeader() };
        } else if (this.options$.authHeader) {
            security$ = { authHeader: this.options$.authHeader };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "get-connection-management-access-token",
            oAuth2Scopes: [],
            securitySource: this.options$.authHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["401", "402", "403", "404", "429", "4XX", "500", "503", "5XX"],
            retryConfig: options?.retries ||
                this.options$.retryConfig || {
                    strategy: "backoff",
                    backoff: {
                        initialInterval: 500,
                        maxInterval: 60000,
                        exponent: 1.5,
                        maxElapsedTime: 3600000,
                    },
                    retryConnectionErrors: true,
                },
            retryCodes: options?.retryCodes || ["408", "429", "5XX"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<shared.ConnectionManagementAccessToken>()
            .json(200, shared.ConnectionManagementAccessToken$inboundSchema)
            .json([401, 402, 403, 404, 429, 500, 503], errors.ErrorMessage$inboundSchema, {
                err: true,
            })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
