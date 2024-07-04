<!-- Start SDK Example Usage [usage] -->
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const result = await codatPlatform.companies.list({
        page: 1,
        pageSize: 100,
        query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
        orderBy: "-modifiedDate",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->