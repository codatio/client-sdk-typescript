/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { CodatLendingCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import * as errors from "../sdk/models/errors/index.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import * as shared from "../sdk/models/shared/index.js";
import { APICall, APIPromise } from "../sdk/types/async.js";
import { Result } from "../sdk/types/fp.js";

/**
 * List direct cost attachments
 *
 * @remarks
 * The *List direct cost attachments* endpoint returns a list of attachments available to download for given `directCostId`.
 *
 * [Direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.
 */
export function transactionsDirectCostsListAttachments(
  client: CodatLendingCore,
  request: operations.ListAccountingDirectCostAttachmentsRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    shared.Attachments,
    | errors.ErrorMessage
    | errors.ErrorMessage
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: CodatLendingCore,
  request: operations.ListAccountingDirectCostAttachmentsRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      shared.Attachments,
      | errors.ErrorMessage
      | errors.ErrorMessage
      | SDKError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.ListAccountingDirectCostAttachmentsRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    companyId: encodeSimple("companyId", payload.companyId, {
      explode: false,
      charEncoding: "percent",
    }),
    connectionId: encodeSimple("connectionId", payload.connectionId, {
      explode: false,
      charEncoding: "percent",
    }),
    directCostId: encodeSimple("directCostId", payload.directCostId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/companies/{companyId}/connections/{connectionId}/data/directCosts/{directCostId}/attachments",
  )(pathParams);

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.authHeader);
  const securityInput = secConfig == null ? {} : { authHeader: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "list-accounting-direct-cost-attachments",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.authHeader,
    retryConfig: options?.retries
      || client._options.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 500,
          maxInterval: 60000,
          exponent: 1.5,
          maxElapsedTime: 3600000,
        },
        retryConnectionErrors: true,
      }
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["408", "429", "5XX"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: [
      "401",
      "402",
      "403",
      "404",
      "409",
      "429",
      "4XX",
      "500",
      "503",
      "5XX",
    ],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    shared.Attachments,
    | errors.ErrorMessage
    | errors.ErrorMessage
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, shared.Attachments$inboundSchema),
    M.jsonErr(
      [401, 402, 403, 404, 409, 429],
      errors.ErrorMessage$inboundSchema,
    ),
    M.jsonErr([500, 503], errors.ErrorMessage$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
