/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { CodatSyncExpensesCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import { readableStreamToArrayBuffer } from "../lib/files.js";
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
import * as shared from "../sdk/models/shared/index.js";
import { isBlobLike } from "../sdk/types/blobs.js";
import { Result } from "../sdk/types/fp.js";
import { isReadableStream } from "../sdk/types/streams.js";

/**
 * Upload attachment
 *
 * @remarks
 * The *Upload attachment* endpoint uploads an attachment in the accounting software against the given transactionId.
 *
 * [Expense transactions](https://docs.codat.io/sync-for-expenses-api#/schemas/ExpenseTransaction) represent transactions made with a company debit or credit card. Attachments for `Adjustment` and `Transfer` transaction types are not supported for any integrations.
 *
 * **Integration-specific behaviour**
 *
 * Each accounting software supports different file formats and sizes.
 *
 * | Integration       | File size | File extension                                                                                                                                 |Supported transaction type
 * |-------------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------|--------------|
 * | **Xero**              | 3 MB      | 7Z, BMP, CSV, DOC, DOCX, EML, GIF, JPEG, JPG, KEYNOTE, MSG, NUMBERS, ODF,   ODS, ODT, PAGES, PDF, PNG, PPT, PPTX, RAR, RTF, TIF, TIFF, TXT, XLS, XLSX,   ZIP | All supported types |
 * | **QuickBooks Online** | 100 MB    | AI, CSV, DOC, DOCX, EPS, GIF, JPEG, JPG, ODS, PAGES, PDF, PNG, RTF, TIF,   TXT, XLS, XLSX, XML                                                               |  `ReimbursableExpenses`, `ExpensePayment`, `ExpenseRefund` |
 * | **NetSuite**          | 100 MB    | BMP, CSV, XLS, XLSX, JSON, PDF, PJPG, PJPEG, PNG, TXT, SVG, TIF, TIFF,   DOC, DOCX, ZIP |`ExpensePayment`, `ExpenseRefund`                                                                     |
 * | **Dynamics 365 Business Central** | 350 MB | [No explicit requirements outlined](https://learn.microsoft.com/en-gb/dynamics365/business-central/ui-how-add-link-to-record#to-attach-a-file-to-a-purchase-invoice) for text, image, and video files. | All supported types
 * | **QuickBooks Desktop** | NA      | Does not support attachment upload | N/A                                                                                                                           |
 * | **FreeAgent** | 5MB      | PNG, X-PNG, JPEG, PJG, GIF, X-PDF
 */
export async function attachmentsUpload(
  client: CodatSyncExpensesCore,
  request: operations.UploadExpenseAttachmentRequest,
  options?: RequestOptions,
): Promise<
  Result<
    shared.Attachment,
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
      operations.UploadExpenseAttachmentRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = new FormData();
  if (payload.AttachmentUpload != null) {
    if (isBlobLike(payload.AttachmentUpload.file)) {
      body.append("file", payload.AttachmentUpload.file);
    } else if (isReadableStream(payload.AttachmentUpload.file.content)) {
      const buffer = await readableStreamToArrayBuffer(
        payload.AttachmentUpload.file.content,
      );
      const blob = new Blob([buffer], { type: "application/octet-stream" });
      body.append("file", blob);
    } else {
      body.append(
        "file",
        new Blob([payload.AttachmentUpload.file.content], {
          type: "application/octet-stream",
        }),
        payload.AttachmentUpload.file.fileName,
      );
    }
  }

  const pathParams = {
    companyId: encodeSimple("companyId", payload.companyId, {
      explode: false,
      charEncoding: "percent",
    }),
    syncId: encodeSimple("syncId", payload.syncId, {
      explode: false,
      charEncoding: "percent",
    }),
    transactionId: encodeSimple("transactionId", payload.transactionId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions/{transactionId}/attachments",
  )(pathParams);

  const headers = new Headers({
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.authHeader);
  const securityInput = secConfig == null ? {} : { authHeader: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "upload-expense-attachment",
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
    shared.Attachment,
    | errors.ErrorMessage
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, shared.Attachment$inboundSchema),
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