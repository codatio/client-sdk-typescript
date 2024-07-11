/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as retries$ from "../lib/retries.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as errors from "./models/errors/index.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import * as z from "zod";

export class SupplementalData extends ClientSDK {
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

    /**
     * Configure
     *
     * @remarks
     * The *Configure* endpoint allows you to maintain or change configuration required to return supplemental data for each integration and data type combination.
     *
     * [Supplemental data](https://docs.codat.io/using-the-api/additional-data) is additional data you can include in Codat's standard data types.
     *
     * **Integration-specific behaviour**
     * See the *examples* for integration-specific frequently requested properties.
     */
    async configure(
        request: operations.ConfigureSupplementalDataRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<void> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ConfigureSupplementalDataRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.SupplementalDataConfiguration, {
            explode: true,
        });

        const pathParams$ = {
            dataType: encodeSimple$("dataType", payload$.dataType, {
                explode: false,
                charEncoding: "percent",
            }),
            platformKey: encodeSimple$("platformKey", payload$.platformKey, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
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
            operationID: "configure-supplemental-data",
            oAuth2Scopes: [],
            securitySource: this.options$.authHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 60000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, {
                    context,
                    errorCodes: ["401", "402", "403", "404", "429", "4XX", "500", "503", "5XX"],
                });
            },
            { config: retryConfig, statusCodes: ["408", "429", "5XX"] }
        );

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<void>()
            .void(200, z.void())
            .json([401, 402, 403, 404, 429, 500, 503], errors.ErrorMessage$inboundSchema, {
                err: true,
            })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get configuration
     *
     * @remarks
     * The *Get configuration* endpoint returns supplemental data configuration previously created for each integration and data type combination.
     *
     * [Supplemental data](https://docs.codat.io/using-the-api/additional-data) is additional data you can include in Codat's standard data types.
     */
    async getConfiguration(
        request: operations.GetSupplementalDataConfigurationRequest,
        options?: RequestOptions & { retries?: retries$.RetryConfig }
    ): Promise<shared.SupplementalDataConfiguration> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.GetSupplementalDataConfigurationRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            dataType: encodeSimple$("dataType", payload$.dataType, {
                explode: false,
                charEncoding: "percent",
            }),
            platformKey: encodeSimple$("platformKey", payload$.platformKey, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/integrations/{platformKey}/dataTypes/{dataType}/supplementalDataConfig"
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
            operationID: "get-supplemental-data-configuration",
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

        const retryConfig = options?.retries ||
            this.options$.retryConfig || {
                strategy: "backoff",
                backoff: {
                    initialInterval: 500,
                    maxInterval: 60000,
                    exponent: 1.5,
                    maxElapsedTime: 3600000,
                },
                retryConnectionErrors: true,
            };

        const response = await retries$.retry(
            () => {
                const cloned = request$.clone();
                return this.do$(cloned, {
                    context,
                    errorCodes: ["401", "402", "403", "404", "429", "4XX", "500", "503", "5XX"],
                });
            },
            { config: retryConfig, statusCodes: ["408", "429", "5XX"] }
        );

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<shared.SupplementalDataConfiguration>()
            .json(200, shared.SupplementalDataConfiguration$inboundSchema)
            .json([401, 402, 403, 404, 429, 500, 503], errors.ErrorMessage$inboundSchema, {
                err: true,
            })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
