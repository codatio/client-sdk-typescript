/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
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
import { Result } from "../sdk/types/fp.js";

/**
 * Generate loan transactions report
 *
 * @remarks
 * The _Generate loan transactions_ endpoint requests the generation of the Loan Transactions report.
 *
 * Learn more about Codat's liabilities feature [here](https://docs.codat.io/lending/features/liabilities-overview).
 *
 * Make sure you have [synced a company](https://docs.codat.io/lending-api#/operations/refresh-company-data) recently before calling the endpoint.
 */
export async function liabilitiesGenerateLoanTransactions(
  client$: CodatLendingCore,
  request: operations.GenerateLoanTransactionsRequest,
  options?: RequestOptions,
): Promise<
  Result<
    void,
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
      operations.GenerateLoanTransactionsRequest$outboundSchema.parse(value$),
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
  };

  const path$ = pathToFunc(
    "/companies/{companyId}/reports/liabilities/loans/transactions",
  )(pathParams$);

  const query$ = encodeFormQuery$({
    "sourceType": payload$.sourceType,
  });

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const authHeader$ = await extractSecurity(client$.options$.authHeader);
  const security$ = authHeader$ == null ? {} : { authHeader: authHeader$ };
  const context = {
    operationID: "generate-loan-transactions",
    oAuth2Scopes: [],
    securitySource: client$.options$.authHeader,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "POST",
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
    void,
    | errors.ErrorMessage
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.nil(202, z.void()),
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
