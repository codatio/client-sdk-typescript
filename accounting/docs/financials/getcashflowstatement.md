# getCashFlowStatement
Available in: `financials`

Gets the latest cash flow statement for a company.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCashFlowStatementRequest, GetCashFlowStatementResponse } from "@codat/accounting/dist/sdk/models/operations";
import { ReportBasisEnum, ReportInputEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCashFlowStatementRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  periodLength: 656964,
  periodsToCompare: 1990,
  startMonth: "2022-10-23T00:00:00Z",
};

sdk.financials.getCashFlowStatement(req).then((res: GetCashFlowStatementResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```