<!-- Start SDK Example Usage [usage] -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.bankAccounts.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    bankAccountPrototype: {
      nominalCode: "22",
      name: "Plutus - Payables - Bank Account 12",
      accountType: "Debit",
      accountNumber: "0120 0440",
      sortCode: "50-50-50",
      currency: "GBP",
    },
  });

  console.log(result);
}

run();
```
<!-- End SDK Example Usage [usage] -->