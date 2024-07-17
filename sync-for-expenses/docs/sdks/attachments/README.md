# Attachments
(*attachments*)

## Overview

Attach receipts to a transaction for a complete audit trail.

### Available Operations

* [upload](#upload) - Upload attachment

## upload

The *Upload attachment* endpoint uploads an attachment in the accounting software against the given transactionId. 

[Expense transactions](https://docs.codat.io/sync-for-expenses-api#/schemas/ExpenseTransaction) represent transactions made with a company debit or credit card. 

**Integration-specific behaviour**

Each accounting software supports different file formats and sizes.

| Integration | File Size | File Extension                                                                                                      |  
|-------------|-------------|--------------------------------------------------------------------------------------------------------------|
| Xero | 4MB  | 7Z, BMP, CSV, DOC, DOCX, EML, GIF, JPEG, JPG, KEYNOTE, MSG, NUMBERS, ODF, ODS, ODT, PAGES, PDF, PNG, PPT, PPTX, RAR, RTF, TIF, TIFF, TXT, XLS, XLSX, ZIP |
| QuickBooks Online | 100MB | AI, CSV, DOC, DOCX, EPS, GIF, JPEG, JPG, ODS, PAGES, PDF, PNG, RTF, TIF, TXT, XLS, XLSX, XML  |
| NetSuite | 100MB | BMP, CSV, XLS, XLSX, JSON, PDF, PJPG, PJPEG, PNG, TXT, SVG, TIF, TIFF, DOC, DOCX, ZIP |
| Dynamics 365 Business Central | 350 MB | Dynamics do not explicitly outline which file types are supported but they do state <a className="external" href="https://learn.microsoft.com/en-gb/dynamics365/business-central/ui-how-add-link-to-record#to-attach-a-file-to-a-purchase-invoice" target="_blank">here</a> that "You can attach any type of file, such as text, image, or video files". |

### Example Usage

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

  // Handle the result
  console.log(result)
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

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 400,401,402,403,404,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |
