# getDirectIncome
Available in: `directIncomes`

Gets the specified direct income for a given company and connection.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetDirectIncomeRequest, GetDirectIncomeResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetDirectIncomeRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directIncomeId: "excepturi",
};

sdk.directIncomes.getDirectIncome(req).then((res: GetDirectIncomeResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```