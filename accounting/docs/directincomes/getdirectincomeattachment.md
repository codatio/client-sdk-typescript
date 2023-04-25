# getDirectIncomeAttachment
Available in: `directIncomes`

Gets the specified direct income attachment for a given company.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetDirectIncomeAttachmentRequest, GetDirectIncomeAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetDirectIncomeAttachmentRequest = {
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directIncomeId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  timeoutInMinutes: 119472,
};

sdk.directIncomes.getDirectIncomeAttachment(req).then((res: GetDirectIncomeAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```