/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as errors from "./models/errors/index.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";

export class Adjustments extends ClientSDK {
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
     * Create adjustment transaction
     *
     * @remarks
     * Use the *Create adjustment expense* endpoint to create an [adjustment](https://docs.codat.io/sync-for-expenses-api#/schemas/AdjustmentTransactionRequest) in the accounting platform for a given company's connection.
     *
     * Adjustments represent write-offs and transaction alterations, such as foreign exchange adjustments, in the form of a journal entry.
     *
     * The _Create adjustment_ endpoint is currently only available for QuickBooks Desktop.
     */
    async create(
        request: operations.CreateAdjustmentTransactionRequest,
        options?: RequestOptions
    ): Promise<shared.AdjustmentTransactionResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateAdjustmentTransactionRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            companyId: encodeSimple$("companyId", payload$.companyId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/companies/{companyId}/sync/expenses/adjustment-transactions"
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
            operationID: "create-adjustment-transaction",
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
            errorCodes: ["400", "401", "402", "403", "404", "429", "4XX", "500", "503", "5XX"],
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

        const [result$] = await this.matcher<shared.AdjustmentTransactionResponse>()
            .json(200, shared.AdjustmentTransactionResponse$inboundSchema)
            .json([400, 401, 402, 403, 404, 429, 500, 503], errors.ErrorMessage$inboundSchema, {
                err: true,
            })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
