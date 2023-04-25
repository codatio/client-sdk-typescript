# createItem
Available in: `items`

Posts a new item to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create item model](https://docs.codat.io/accounting-api#/operations/get-create-items-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items) for integrations that support creating items.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateItemRequest, CreateItemResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, ItemStatusEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateItemRequest = {
  item: {
    billItem: {
      accountRef: {
        id: "2743fd6c-2a10-4e6c-a978-ec256a5b0922",
        name: "Melba Schmeler",
      },
      description: "dignissimos",
      taxRateRef: {
        effectiveTaxRate: 6172.71,
        id: "96c977bb-c57f-4389-a8a8-600c58d67d63",
        name: "Eddie Murphy",
      },
      unitPrice: 3900.58,
    },
    code: "quos",
    id: "464579cf-c6c0-4e50-bf56-831f1d8ed87b",
    invoiceItem: {
      accountRef: {
        id: "28e8afab-c986-4e24-9e43-b2342417d13e",
        name: "Miss Jeannie Hudson",
      },
      description: "cupiditate",
      taxRateRef: {
        effectiveTaxRate: 6338.87,
        id: "e4ae8ab4-a9c4-492c-9e8b-a5d4aa4a508b",
        name: "Miss Rodney Ledner",
      },
      unitPrice: 5704.27,
    },
    isBillItem: false,
    isInvoiceItem: false,
    itemStatus: ItemStatusEnum.Active,
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    name: "Jordan Stiedemann",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    type: "beatae",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 697543,
};

sdk.items.createItem(req).then((res: CreateItemResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```