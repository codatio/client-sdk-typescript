<!-- Start SDK Example Usage [usage] -->
```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountingBankData.listTransactions({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    accountId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
}

run();
```
<!-- End SDK Example Usage [usage] -->