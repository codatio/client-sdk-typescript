<!-- Start SDK Example Usage [usage] -->
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const codatBankFeeds = new CodatBankFeeds({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatBankFeeds.companies.create({
    name: "Technicalium",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->