/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { CodatLendingCore } from "../core.js";
import {
  encodeFormQuery as encodeFormQuery$,
  encodeJSON as encodeJSON$,
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
 * Create account
 *
 * @remarks
 * The *Create account* endpoint creates a new [account](https://docs.codat.io/lending-api#/schemas/Account) for a given company's connection.
 *
 * [Accounts](https://docs.codat.io/lending-api#/schemas/Account) are the categories a business uses to record accounting transactions.
 *
 * **Integration-specific behaviour**
 *
 * Required data may vary by integration. To see what data to post, first call [Get create account model](https://docs.codat.io/lending-api#/operations/get-create-chartOfAccounts-model).
 *
 * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=chartOfAccounts) for integrations that support creating an account.
 */
export async function loanWritebackAccountsCreate(
  client$: CodatLendingCore,
  request: operations.CreateAccountRequest,
  options?: RequestOptions,
): Promise<
  Result<
    shared.AccountingCreateAccountResponse,
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
    (value$) => operations.CreateAccountRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = encodeJSON$("body", payload$.accountPrototype, {
    explode: true,
  });

  const pathParams$ = {
    companyId: encodeSimple$("companyId", payload$.companyId, {
      explode: false,
      charEncoding: "percent",
    }),
    connectionId: encodeSimple$("connectionId", payload$.connectionId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc(
    "/companies/{companyId}/connections/{connectionId}/push/accounts",
  )(pathParams$);

  const query$ = encodeFormQuery$({
    "allowSyncOnPushComplete": payload$.allowSyncOnPushComplete,
    "timeoutInMinutes": payload$.timeoutInMinutes,
  });

  const headers$ = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const authHeader$ = await extractSecurity(client$.options$.authHeader);
  const security$ = authHeader$ == null ? {} : { authHeader: authHeader$ };
  const context = {
    operationID: "create-account",
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
    shared.AccountingCreateAccountResponse,
    | errors.ErrorMessage
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, shared.AccountingCreateAccountResponse$inboundSchema),
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
