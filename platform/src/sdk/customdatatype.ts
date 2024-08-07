/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as errors from "./models/errors/index.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";

export class CustomDataType extends ClientSDK {
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
     * Configure custom data type
     *
     * @remarks
     * The *Configure custom data type* endpoint allows you to maintain or change the configuration required to return a custom data type for a specific integration.
     *
     * A [custom data type](https://docs.codat.io/using-the-api/custom-data) is an additional data type you can create that is not included in Codat's standardized data model.
     *
     * ### Tips and traps
     *
     * - You can only configure a single custom data type for a single platform at a time. Use the endpoint multiple times if you need to configure it for multiple platforms.
     *
     * - You can only indicate a single data source for each customer data type.
     *
     * - Make your custom configuration as similar as possible to our standard data types so you can interact with them in exactly the same way.
     */
    async configure(
        request: operations.ConfigureCustomDataTypeRequest,
        options?: RequestOptions
    ): Promise<shared.CustomDataTypeConfiguration> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ConfigureCustomDataTypeRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.CustomDataTypeConfiguration, { explode: true });

        const pathParams$ = {
            customDataIdentifier: encodeSimple$(
                "customDataIdentifier",
                payload$.customDataIdentifier,
                { explode: false, charEncoding: "percent" }
            ),
            platformKey: encodeSimple$("platformKey", payload$.platformKey, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}"
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
            operationID: "configure-custom-data-type",
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

        const [result$] = await this.matcher<shared.CustomDataTypeConfiguration>()
            .json(200, shared.CustomDataTypeConfiguration$inboundSchema)
            .json([401, 402, 403, 404, 429, 500, 503], errors.ErrorMessage$inboundSchema, {
                err: true,
            })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get custom data configuration
     *
     * @remarks
     * The *Get custom data configuration* endpoint returns existing configuration details for the specified custom data type and integration pair you previously configured.
     *
     * A [custom data type](https://docs.codat.io/using-the-api/custom-data) is an additional data type you can create that is not included in Codat's standardized data model.
     */
    async getConfiguration(
        request: operations.GetCustomDataTypeConfigurationRequest,
        options?: RequestOptions
    ): Promise<shared.CustomDataTypeRecords> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.GetCustomDataTypeConfigurationRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            customDataIdentifier: encodeSimple$(
                "customDataIdentifier",
                payload$.customDataIdentifier,
                { explode: false, charEncoding: "percent" }
            ),
            platformKey: encodeSimple$("platformKey", payload$.platformKey, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/integrations/{platformKey}/dataTypes/custom/{customDataIdentifier}"
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
            operationID: "get-custom-data-type-configuration",
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

        const [result$] = await this.matcher<shared.CustomDataTypeRecords>()
            .json(200, shared.CustomDataTypeRecords$inboundSchema)
            .json([401, 402, 403, 404, 429, 500, 503], errors.ErrorMessage$inboundSchema, {
                err: true,
            })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Refresh custom data type
     *
     * @remarks
     * The *Refresh custom data type* endpoint refreshes the specified custom data type for a given company. This is an asynchronous operation that will sync updated data from the linked integration into Codat for you to view.
     */
    async refresh(
        request: operations.RefreshCustomDataTypeRequest,
        options?: RequestOptions
    ): Promise<shared.PullOperation> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.RefreshCustomDataTypeRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            companyId: encodeSimple$("companyId", payload$.companyId, {
                explode: false,
                charEncoding: "percent",
            }),
            connectionId: encodeSimple$("connectionId", payload$.connectionId, {
                explode: false,
                charEncoding: "percent",
            }),
            customDataIdentifier: encodeSimple$(
                "customDataIdentifier",
                payload$.customDataIdentifier,
                { explode: false, charEncoding: "percent" }
            ),
        };
        const path$ = this.templateURLComponent(
            "/companies/{companyId}/connections/{connectionId}/data/queue/custom/{customDataIdentifier}"
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
            operationID: "refresh-custom-data-type",
            oAuth2Scopes: [],
            securitySource: this.options$.authHeader,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
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
            errorCodes: ["401", "402", "403", "404", "429", "451", "4XX", "500", "503", "5XX"],
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

        const [result$] = await this.matcher<shared.PullOperation>()
            .json(200, shared.PullOperation$inboundSchema)
            .json([401, 402, 403, 404, 429, 451, 500, 503], errors.ErrorMessage$inboundSchema, {
                err: true,
            })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * List custom data type records
     *
     * @remarks
     * The *List custom data type records* endpoint returns a paginated list of records pulled for the specified custom data type you previously configured.
     *
     * A [custom data type](https://docs.codat.io/using-the-api/custom-data) is an additional data type you can create that is not included in Codat's standardized data model.s endpoint returns a paginated list of records whose schema is defined [Configure custom data type](https://docs.codat.io/platform-api#/operations/configure-custom-data-type)
     */
    async list(
        request: operations.ListCustomDataTypeRecordsRequest,
        options?: RequestOptions
    ): Promise<shared.CustomDataTypeRecords> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ListCustomDataTypeRecordsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            companyId: encodeSimple$("companyId", payload$.companyId, {
                explode: false,
                charEncoding: "percent",
            }),
            connectionId: encodeSimple$("connectionId", payload$.connectionId, {
                explode: false,
                charEncoding: "percent",
            }),
            customDataIdentifier: encodeSimple$(
                "customDataIdentifier",
                payload$.customDataIdentifier,
                { explode: false, charEncoding: "percent" }
            ),
        };
        const path$ = this.templateURLComponent(
            "/companies/{companyId}/connections/{connectionId}/data/custom/{customDataIdentifier}"
        )(pathParams$);

        const query$ = encodeFormQuery$({
            page: payload$.page,
            pageSize: payload$.pageSize,
        });

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
            operationID: "list-custom-data-type-records",
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
            errorCodes: [
                "400",
                "401",
                "402",
                "403",
                "404",
                "429",
                "451",
                "4XX",
                "500",
                "503",
                "5XX",
            ],
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

        const [result$] = await this.matcher<shared.CustomDataTypeRecords>()
            .json(200, shared.CustomDataTypeRecords$inboundSchema)
            .json(
                [400, 401, 402, 403, 404, 429, 451, 500, 503],
                errors.ErrorMessage$inboundSchema,
                { err: true }
            )
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
