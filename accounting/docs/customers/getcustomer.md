# getCustomer
Available in: `customers`

Gets a single customer corresponding to the given ID.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCustomerRequest, GetCustomerResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressTypeEnum, CustomerStatusEnum, PhoneNumberTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCustomerRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  customerId: "tenetur",
};

sdk.customers.getCustomer(req).then((res: GetCustomerResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```