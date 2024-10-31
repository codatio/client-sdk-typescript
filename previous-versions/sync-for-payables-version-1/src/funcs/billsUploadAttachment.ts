/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { CodatSyncPayablesCore } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import { readableStreamToArrayBuffer } from "../lib/files.js";
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
import { isBlobLike } from "../sdk/types/blobs.js";
import { Result } from "../sdk/types/fp.js";
import { isReadableStream } from "../sdk/types/streams.js";

/**
 * Upload bill attachment
 *
 * @remarks
 * The *Upload bill attachment* endpoint uploads an attachment and assigns it against a specific `billId`.
 *
 * [Bills](https://docs.codat.io/sync-for-payables-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.
 *
 * **Integration-specific behaviour**
 *
 * For more details on supported file types by integration see [Attachments](https://docs.codat.io/sync-for-payables-api#/schemas/Attachment).
 *
 * Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support uploading a bill attachment.
 */
export async function billsUploadAttachment(
  client$: CodatSyncPayablesCore,
  request: operations.UploadBillAttachmentRequest,
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
      operations.UploadBillAttachmentRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = new FormData();
  if (payload$.AttachmentUpload != null) {
    if (isBlobLike(payload$.AttachmentUpload.file)) {
      body$.append("file", payload$.AttachmentUpload.file);
    } else if (isReadableStream(payload$.AttachmentUpload.file.content)) {
      const buffer = await readableStreamToArrayBuffer(
        payload$.AttachmentUpload.file.content,
      );
      const blob = new Blob([buffer], { type: "application/octet-stream" });
      body$.append("file", blob);
    } else {
      body$.append(
        "file",
        new Blob([payload$.AttachmentUpload.file.content], {
          type: "application/octet-stream",
        }),
        payload$.AttachmentUpload.file.fileName,
      );
    }
  }

  const pathParams$ = {
    billId: encodeSimple$("billId", payload$.billId, {
      explode: false,
      charEncoding: "percent",
    }),
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
    "/companies/{companyId}/connections/{connectionId}/push/bills/{billId}/attachments",
  )(pathParams$);

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const authHeader$ = await extractSecurity(client$.options$.authHeader);
  const security$ = authHeader$ == null ? {} : { authHeader: authHeader$ };
  const context = {
    operationID: "upload-bill-attachment",
    oAuth2Scopes: [],
    securitySource: client$.options$.authHeader,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "POST",
    path: path$,
    headers: headers$,
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
    m$.nil(200, z.void()),
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