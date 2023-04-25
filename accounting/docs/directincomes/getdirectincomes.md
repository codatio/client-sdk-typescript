# getDirectIncomes
Available in: `directIncomes`

Gets the direct incomes for a given company.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetDirectIncomesRequest, GetDirectIncomesResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetDirectIncomesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "iure",
};

sdk.directIncomes.getDirectIncomes(req).then((res: GetDirectIncomesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```