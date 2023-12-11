<!-- Start SDK Example Usage [usage] -->
```typescript
import { CodatCommerce } from "@codat/commerce";

async function run() {
    const sdk = new CodatCommerce({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.customers.get({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        customerId: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->