# listAvailableAccountCategories
Available in: `categories`

Lists available account categories Codat's categorisation engine can provide. 

## Example Usage
```typescript
import { CodatAssess } from "@codat/assess";
import { ListAvailableAccountCategoriesResponse } from "@codat/assess/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.categories.listAvailableAccountCategories().then((res: ListAvailableAccountCategoriesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```