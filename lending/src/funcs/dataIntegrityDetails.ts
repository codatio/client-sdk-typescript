/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { CodatLendingCore } from "../core.js";
import {
  encodeFormQuery as encodeFormQuery$,
  encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
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
import { Result } from "../sdk/types/fp.js";

/**
 * List data integrity details
 *
 * @remarks
 * The *List data integrity details* endpoint returns the match result record by record for a given data type, filtered based on a query string in the same way as summary results.
 *
 * The [details](https://docs.codat.io/lending-api#/schemas/DataIntegrityDetails) are paginated and support ordering, following the same conventions as our other data endpoints.
 */
export async function dataIntegrityDetails(
  client$: CodatLendingCore,
  request: operations.ListDataIntegrityDetailsRequest,
  options?: RequestOptions,
): Promise<
  Result<
    shared.DataIntegrityDetails,
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
  const input$ = request;

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) =>
      operations.ListDataIntegrityDetailsRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = null;

  const pathParams$ = {
    companyId: encodeSimple$("companyId", payload$.companyId, {
      explode: false,
      charEncoding: "percent",
    }),
    dataType: encodeSimple$("dataType", payload$.dataType, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc(
    "/data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/details",
  )(pathParams$);

  const query$ = encodeFormQuery$({
    "orderBy": payload$.orderBy,
    "page": payload$.page,
    "pageSize": payload$.pageSize,
    "query": payload$.query,
  });

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const authHeader$ = await extractSecurity(client$.options$.authHeader);
  const security$ = authHeader$ == null ? {} : { authHeader: authHeader$ };
  const context = {
    operationID: "list-data-integrity-details",
    oAuth2Scopes: [],
    securitySource: client$.options$.authHeader,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "GET",
    path: path$,
    headers: headers$,
    query: query$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: [
      "400",
      "401",
      "402",
      "403",
      "404",
      "429",
      "4XX",
      "500",
      "503",
      "5XX",
    ],
    retryConfig: options?.retries
      || client$.options$.retryConfig
      || {
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
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields$ = {
    HttpMeta: { Response: response, Request: request$ },
  };

  const [result$] = await m$.match<
    shared.DataIntegrityDetails,
    | errors.ErrorMessage
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, shared.DataIntegrityDetails$inboundSchema),
    m$.jsonErr(
      [400, 401, 402, 403, 404, 429, 500, 503],
      errors.ErrorMessage$inboundSchema,
    ),
    m$.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
