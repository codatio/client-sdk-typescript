# listProductCategories
Available in: `products`

Product categories are used to classify a group of products together, either by type (eg "Furniture"), or sometimes by tax profile.

## Example Usage
```typescript
import { CodatCommerce } from "@codat/commerce";
import { ListProductCategoriesRequest, ListProductCategoriesResponse } from "@codat/commerce/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListProductCategoriesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "nulla",
};

sdk.products.listProductCategories(req).then((res: ListProductCategoriesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```