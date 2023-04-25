# downloadDirectIncomeAttachment
Available in: `directIncomes`

Downloads an attachment for the specified direct income for a given company.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadDirectIncomeAttachmentRequest, DownloadDirectIncomeAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DownloadDirectIncomeAttachmentRequest = {
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directIncomeId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.directIncomes.downloadDirectIncomeAttachment(req).then((res: DownloadDirectIncomeAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```