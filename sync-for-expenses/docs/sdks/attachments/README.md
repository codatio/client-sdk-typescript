# Attachments

## Overview

Attach receipts to a transaction for a complete audit trail.

### Available Operations

* [upload](#upload) - Upload attachment

## upload

The *Upload attachment* endpoint uploads an attachment in the accounting software against the given transactionId. 

[Expense transactions](https://docs.codat.io/sync-for-expenses-api#/schemas/ExpenseTransaction) represent transactions made with a company debit or credit card. Attachments for `Adjustment` and `Transfer` transaction types are not supported for any integrations.

**Integration-specific behavior**

Each accounting software supports different file formats and sizes.

| Integration                       | File size | File extension                                        | Supported transactions |
|-----------------------------------|-----------|-------------------------------------------------------|------------------------|
| **Xero**                          | 3 MB      | 7Z, BMP, CSV, DOC, DOCX, EML, GIF, JPEG, JPG, KEYNOTE, MSG, NUMBERS, ODF,   ODS, ODT, PAGES, PDF, PNG, PPT, PPTX, RAR, RTF, TIF, TIFF, TXT, XLS, XLSX, ZIP | All supported types |
| **QuickBooks Online**             | 100 MB    | AI, CSV, DOC, DOCX, EPS, GIF, JPEG, JPG, ODS, PAGES, PDF, PNG, RTF, TIF, TXT, XLS, XLSX, XML                                                      | `expense-transactions.Payment`, `expense-transactions.Refund`, `reimbursable-expense-transactions` |
| **NetSuite**                      | 100 MB    | BMP, CSV, XLS, XLSX, JSON, PDF, PJPG, PJPEG, PNG, TXT, SVG, TIF, TIFF, DOC, DOCX, ZIP |`expense-transactions.Payment`, `expense-transactions.Refund`                                                                    |
| **Dynamics 365 Business Central** | 350 MB    | [No explicit requirements outlined](https://learn.microsoft.com/en-gb/dynamics365/business-central/ui-how-add-link-to-record#to-attach-a-file-to-a-purchase-invoice) for text, image, and video files. | All supported types
| **QuickBooks Desktop**            | NA        | Does not support attachment upload                     | N/A                    |
| **FreeAgent**                     | 5MB       | PNG, X-PNG, JPEG, PJG, GIF, X-PDF  | `expense-transactions.Payment`, `reimbursable-expense-transactions`
| **Zoho Books**                    | 5MB       | GIF, PNG, JPEG, JPG, BMP, PDF      | `expense-transactions.Payment`, `reimbursable-expense-transactions`        |

### Example Usage

<!-- UsageSnippet language="typescript" operationID="upload-expense-attachment" method="post" path="/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions/{transactionId}/attachments" -->
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

const codatSyncExpenses = new CodatSyncExpenses({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncExpenses.attachments.upload({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    syncId: "6fb40d5e-b13e-11ed-afa1-0242ac120002",
    transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncExpensesCore } from "@codat/sync-for-expenses/core.js";
import { attachmentsUpload } from "@codat/sync-for-expenses/funcs/attachmentsUpload.js";

// Use `CodatSyncExpensesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncExpenses = new CodatSyncExpensesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await attachmentsUpload(codatSyncExpenses, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    syncId: "6fb40d5e-b13e-11ed-afa1-0242ac120002",
    transactionId: "336694d8-2dca-4cb5-a28d-3ccb83e55eee",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("attachmentsUpload failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UploadExpenseAttachmentRequest](../../sdk/models/operations/uploadexpenseattachmentrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.Attachment](../../sdk/models/shared/attachment.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 400, 401, 402, 403, 404, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |