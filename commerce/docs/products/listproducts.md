# listProducts
Available in: `products`

The Products data type provides the company's product inventory, and includes the price and quantity of all products, and product variants, available for sale.

## Example Usage
```typescript
import { CodatCommerce } from "@codat/commerce";
import { ListProductsRequest, ListProductsResponse } from "@codat/commerce/dist/sdk/models/operations";
import { ProductVariantStatusEnum } from "@codat/commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListProductsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "corrupti",
};

sdk.products.listProducts(req).then((res: ListProductsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```