# createPurchaseOrder
Available in: `purchaseOrders`

Posts a new purchase order to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update purchase order model](https://docs.codat.io/accounting-api#/operations/get-create-update-purchaseOrders-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) for integrations that support creating purchase orders.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreatePurchaseOrderRequest, CreatePurchaseOrderResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  AddressTypeEnum,
  DataTypeEnum,
  PurchaseOrderStatusEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreatePurchaseOrderRequest = {
  purchaseOrder: {
    currency: "et",
    currencyRate: 5307.21,
    deliveryDate: "2022-10-23T00:00:00Z",
    expectedDeliveryDate: "2022-10-23T00:00:00Z",
    id: "4439b3de-8756-4ccc-a470-cd2147b6e615",
    issueDate: "2022-10-23T00:00:00Z",
    lineItems: [
      {
        accountRef: {
          id: "cf01d0d8-c3a4-4b9a-9bf9-35dfe974fa4b",
          name: "Tasha Mante V",
        },
        description: "molestiae",
        discountAmount: 8810.35,
        discountPercentage: 8368.04,
        itemRef: {
          id: "a623442e-1a92-437e-9984-c80b479e8919",
          name: "Ms. Connie Romaguera",
        },
        quantity: 6399.68,
        subTotal: 5263.14,
        taxAmount: 8167.53,
        taxRateRef: {
          effectiveTaxRate: 4265.02,
          id: "9c568921-4fa2-4020-be4f-ae038cd7f1bc",
          name: "Nichole Ortiz",
        },
        totalAmount: 9965.51,
        trackingCategoryRefs: [
          {
            id: "fc2ccba4-bef0-4df6-8eae-db2ee70be069",
            name: "Archie Feeney",
          },
          {
            id: "dd704080-e0a3-4fc7-ba5a-034b11499243",
            name: "Emilio O'Keefe",
          },
        ],
        unitAmount: 5196.11,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    note: "in",
    paymentDueDate: "2022-10-23T00:00:00Z",
    purchaseOrderNumber: "est",
    shipTo: {
      address: {
        city: "South Caesar",
        country: "Reunion",
        line1: "esse",
        line2: "sit",
        postalCode: "61328-1120",
        region: "dicta",
        type: AddressTypeEnum.Unknown,
      },
      contact: {
        email: "Joyce60@yahoo.com",
        name: "Elias Bednar",
        phone: "1-810-778-1385",
      },
    },
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    status: PurchaseOrderStatusEnum.Closed,
    subTotal: 7865.82,
    supplierRef: {
      id: "306b786b-3d37-4bd2-84a1-f340bb36f677",
      supplierName: "dolorum",
    },
    totalAmount: 2612.94,
    totalDiscount: 5072.49,
    totalTaxAmount: 3603.33,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 80773,
};

sdk.purchaseOrders.createPurchaseOrder(req).then((res: CreatePurchaseOrderResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```