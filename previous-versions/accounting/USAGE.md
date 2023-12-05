<!-- Start SDK Example Usage [usage] -->
```typescript
import { CodatAccounting } from "@codat/accounting";

async function run() {
    const sdk = new CodatAccounting({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.accountTransactions.get({
        accountTransactionId: "string",
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->