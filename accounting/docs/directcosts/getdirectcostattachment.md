# getDirectCostAttachment
Available in: `directCosts`

Gets the specified direct cost attachment for a given company.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetDirectCostAttachmentRequest, GetDirectCostAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetDirectCostAttachmentRequest = {
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.directCosts.getDirectCostAttachment(req).then((res: GetDirectCostAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```