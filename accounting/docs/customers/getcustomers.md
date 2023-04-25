# getCustomers
Available in: `customers`

Gets the latest customers for a company, with pagination

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCustomersRequest, GetCustomersResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressTypeEnum, CustomerStatusEnum, PhoneNumberTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCustomersRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "vero",
};

sdk.customers.getCustomers(req).then((res: GetCustomersResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```