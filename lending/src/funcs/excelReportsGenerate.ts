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
 * Generate Excel report
 *
 * @remarks
 * The *Generate Excel report* endpoint requests the production of a downloadable Excel file for a report type specified in the `reportType` query parameter.
 *
 * In response, the endpoint returns the [status](https://docs.codat.io/lending-api#/schemas/ExcelStatus) detailing the current state of the report generation request.
 *
 * ### Report types
 *
 * | reportType                                                                           | Description                                                                                                                                   |
 * |--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
 * | [audit](https://docs.codat.io/lending/excel/audit-report)                            | Identifies inaccurate or out-of-date accounts, helping you to make decisions with confidence.                                                   || [audit](https://docs.codat.io/lending/excel/audit-report)                            | Identify inaccurate or out-of-date accounts, helping you to make decisions with confidence.                                                   |
 * | [enhancedCashFlow](https://docs.codat.io/lending/excel/enhanced-invoices-report)     | Provides a fully categorized list of bank transactions for a company, allowing lenders to accurately forecast a company's cash flow.  |
 * | [enhancedFinancials](https://docs.codat.io/lending/excel/enhanced-financials-report) | Supports decision-making using fully categorized financial statements to allow lenders to automate their underwriting processes.                |
 * | [enhancedInvoices](https://docs.codat.io/lending/excel/enhanced-invoices-report)     | Helps verify that payments have been made against historic invoices. Great for invoice finance lenders.                                       |
 *
 * [Learn more](https://docs.codat.io/lending/excel/overview) about valid Excel report types.
 */
export async function excelReportsGenerate(
  client$: CodatLendingCore,
  request: operations.GenerateExcelReportRequest,
  options?: RequestOptions,
): Promise<
  Result<
    shared.ExcelStatus,
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
      operations.GenerateExcelReportRequest$outboundSchema.parse(value$),
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

  const path$ = pathToFunc("/data/companies/{companyId}/assess/excel")(
    pathParams$,
  );

  const query$ = encodeFormQuery$({
    "reportType": payload$.reportType,
  });

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const authHeader$ = await extractSecurity(client$.options$.authHeader);
  const security$ = authHeader$ == null ? {} : { authHeader: authHeader$ };
  const context = {
    operationID: "generate-excel-report",
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
    shared.ExcelStatus,
    | errors.ErrorMessage
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, shared.ExcelStatus$inboundSchema),
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
