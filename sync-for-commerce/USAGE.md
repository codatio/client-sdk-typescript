<!-- Start SDK Example Usage [usage] -->
```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

const codatSyncCommerce = new CodatSyncCommerce({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncCommerce.connections.getSyncFlowUrl({
    commerceKey: "<value>",
    accountingKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->