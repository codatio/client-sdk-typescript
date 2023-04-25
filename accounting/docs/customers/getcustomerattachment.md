# getCustomerAttachment
Available in: `customers`

Get  customer attachment

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCustomerAttachmentRequest, GetCustomerAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCustomerAttachmentRequest = {
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "non",
};

sdk.customers.getCustomerAttachment(req).then((res: GetCustomerAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```