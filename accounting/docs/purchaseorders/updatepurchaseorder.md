# updatePurchaseOrder
Available in: `purchaseOrders`

Posts an updated purchase order to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call []().

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=purchaseOrders) for integrations that support updating purchase orders.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdatePurchaseOrderRequest, UpdatePurchaseOrderResponse } from "@codat/accounting/dist/sdk/models/operations";
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

const req: UpdatePurchaseOrderRequest = {
  purchaseOrder: {
    currency: "dolor",
    currencyRate: 2424.79,
    deliveryDate: "2022-10-23T00:00:00Z",
    expectedDeliveryDate: "2022-10-23T00:00:00Z",
    id: "74902848-826b-4b03-87fd-225e47871a88",
    issueDate: "2022-10-23T00:00:00Z",
    lineItems: [
      {
        accountRef: {
          id: "d72a2d4a-f415-48ac-ad0f-0f58c3b87b47",
          name: "Rhonda Ankunding PhD",
        },
        description: "excepturi",
        discountAmount: 5506.48,
        discountPercentage: 9007.56,
        itemRef: {
          id: "9d82c5e3-06f5-4576-b5cd-eb0286d0bc43",
          name: "Patrick Lynch",
        },
        quantity: 2190.95,
        subTotal: 4751.31,
        taxAmount: 5490.08,
        taxRateRef: {
          effectiveTaxRate: 9580.48,
          id: "2fcff81d-df7e-4088-b74e-f54c9216e892",
          name: "Emily Bergnaum",
        },
        totalAmount: 7427.97,
        trackingCategoryRefs: [
          {
            id: "fc2c8d27-0109-46b6-aad6-e3e1d9d3b660",
            name: "Ethel Hagenes Sr.",
          },
          {
            id: "aa1d5d22-47de-49b3-9461-70e768a96bb3",
            name: "Everett Kiehn",
          },
        ],
        unitAmount: 1975.93,
      },
      {
        accountRef: {
          id: "98eba1bb-f714-4335-af63-49a164249b21",
          name: "Sheri Walsh",
        },
        description: "tempore",
        discountAmount: 6131.78,
        discountPercentage: 3665.61,
        itemRef: {
          id: "1652b158-ca91-442f-8526-32b31cad692f",
          name: "Sherman Labadie",
        },
        quantity: 3433.66,
        subTotal: 555.05,
        taxAmount: 27.62,
        taxRateRef: {
          effectiveTaxRate: 3143.21,
          id: "e9d3d934-e036-4f5c-b886-64f6985530a2",
          name: "Jeremy Murazik",
        },
        totalAmount: 4284.76,
        trackingCategoryRefs: [
          {
            id: "af863c28-d040-4c69-a3d9-06f6ebd5ad7e",
            name: "Kelly DuBuque",
          },
          {
            id: "f25f634b-3730-4714-a6be-8c3e09c64d34",
            name: "Jan Schowalter",
          },
          {
            id: "9a6e5e7a-ef13-4402-a945-f53743efde11",
            name: "Hugh Crona DVM",
          },
        ],
        unitAmount: 6123.82,
      },
      {
        accountRef: {
          id: "b1f7d9af-fe69-4682-acee-fb04f8c512ca",
          name: "Marco Ullrich",
        },
        description: "voluptatem",
        discountAmount: 5033.38,
        discountPercentage: 9159.33,
        itemRef: {
          id: "d5798d38-5d46-4059-9d5c-3349576d5520",
          name: "Frankie Miller",
        },
        quantity: 1818.58,
        subTotal: 3579.41,
        taxAmount: 2057.04,
        taxRateRef: {
          effectiveTaxRate: 7058.26,
          id: "6d765886-eeae-45fd-8b39-f8a1490678f1",
          name: "Adrienne Johnson",
        },
        totalAmount: 8309.31,
        trackingCategoryRefs: [
          {
            id: "39fc9e17-5ffa-4906-ae55-9b72eb674603",
            name: "Ms. Ora Thompson",
          },
          {
            id: "76c2bede-e767-490e-90c1-6a7ba4784044",
            name: "Austin Ziemann",
          },
          {
            id: "70ef0480-91a2-4ba2-9ee6-c75af8a60a7a",
            name: "Curtis Grimes",
          },
        ],
        unitAmount: 193,
      },
      {
        accountRef: {
          id: "979e5afe-60ac-4aca-a45d-e9867551a9cc",
          name: "Ben Berge",
        },
        description: "sunt",
        discountAmount: 7629.97,
        discountPercentage: 4878.89,
        itemRef: {
          id: "9a39ae5a-4d5a-465b-8d55-62d9b7d9e2d6",
          name: "Jermaine Wiegand",
        },
        quantity: 4577.32,
        subTotal: 3923.07,
        taxAmount: 1751.03,
        taxRateRef: {
          effectiveTaxRate: 5752.06,
          id: "db875c3a-8902-482a-91f4-1cf6796ed3d7",
          name: "Ms. Elaine Schroeder",
        },
        totalAmount: 3231.27,
        trackingCategoryRefs: [
          {
            id: "1e98cce3-f716-4600-9a0e-3aa61c6fe09d",
            name: "Warren Champlin",
          },
          {
            id: "3b32c8c7-c3c7-410e-9673-d905cb4bedef",
            name: "Bernadette Block",
          },
          {
            id: "c3909955-2825-40dc-bbcd-3b121b88c1ee",
            name: "Kerry Klocko III",
          },
        ],
        unitAmount: 959.1,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    note: "adipisci",
    paymentDueDate: "2022-10-23T00:00:00Z",
    purchaseOrderNumber: "excepturi",
    shipTo: {
      address: {
        city: "Port Rachelmouth",
        country: "Venezuela",
        line1: "deserunt",
        line2: "aut",
        postalCode: "48144-2514",
        region: "facilis",
        type: AddressTypeEnum.Unknown,
      },
      contact: {
        email: "Xzavier.Hane77@hotmail.com",
        name: "Marc Treutel",
        phone: "938.276.5927 x0235",
      },
    },
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    status: PurchaseOrderStatusEnum.Void,
    subTotal: 3902.15,
    supplierRef: {
      id: "a87bb7ae-cbe5-469d-b0cb-069907f98944",
      supplierName: "vitae",
    },
    totalAmount: 2776.66,
    totalDiscount: 3416.95,
    totalTaxAmount: 1275.33,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  purchaseOrderId: "culpa",
  timeoutInMinutes: 573150,
};

sdk.purchaseOrders.updatePurchaseOrder(req).then((res: UpdatePurchaseOrderResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```