/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { CodatBankFeedsCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
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
import { Result } from "../sdk/types/fp.js";

/**
 * Create source account
 *
 * @remarks
 * The _Create Source Account_ endpoint allows you to create a representation of a bank account within Codat's domain. The company can then map the source account to an existing or new target account in their accounting software.
 *
 * #### Account mapping variability
 *
 * The method of mapping the source account to the target account varies depending on the accounting software your company uses.
 *
 * #### Mapping options:
 *
 * 1. **API Mapping**: Integrate the mapping journey directly into your application for a seamless user experience.
 * 2. **Codat UI Mapping**: If you prefer a quicker setup, you can utilize Codat's provided user interface for mapping.
 * 3. **Accounting Platform Mapping**: For some accounting software, the mapping process must be conducted within the software itself.
 *
 * ### Integration-specific behaviour
 *
 * | Bank Feed Integration | API Mapping | Codat UI Mapping | Accounting Platform Mapping |
 * | --------------------- | ----------- | ---------------- | --------------------------- |
 * | Xero                  | ✅          | ✅               |                             |
 * | FreeAgent             | ✅          | ✅               |                             |
 * | Oracle NetSuite       | ✅          | ✅               |                             |
 * | Exact Online (NL)     | ✅          | ✅               |                             |
 * | QuickBooks Online     |             |                  | ✅                          |
 * | Sage                  |             |                  | ✅                          |
 *
 * > ### Versioning
 * > If you are integrating the Bank Feeds API with Codat after August 1, 2024, please use the v2 version of the API, as detailed in the schema below. For integrations completed before August 1, 2024, select the v1 version from the schema dropdown below.
 */
export async function sourceAccountsCreate(
  client: CodatBankFeedsCore,
  request: operations.CreateSourceAccountRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.CreateSourceAccountResponseBody,
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
  const parsed = safeParse(
    request,
    (value) =>
      operations.CreateSourceAccountRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.RequestBody, { explode: true });

  const pathParams = {
    companyId: encodeSimple("companyId", payload.companyId, {
      explode: false,
      charEncoding: "percent",
    }),
    connectionId: encodeSimple("connectionId", payload.connectionId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts",
  )(pathParams);

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.authHeader);
  const securityInput = secConfig == null ? {} : { authHeader: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "create-source-account",
    oAuth2Scopes: [],
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
    method: "POST",
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
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
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    operations.CreateSourceAccountResponseBody,
    | errors.ErrorMessage
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.CreateSourceAccountResponseBody$inboundSchema),
    M.jsonErr(
      [400, 401, 402, 403, 404, 429, 500, 503],
      errors.ErrorMessage$inboundSchema,
    ),
    M.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
