# createBill
Available in: `bills`

Posts a new bill to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update bill model](https://docs.codat.io/accounting-api#/operations/get-create-update-bills-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills) for integrations that support creating a bill.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBillRequest, CreateBillResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BilledToTypeEnum,
  BillStatusEnum,
  DataTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateBillRequest = {
  bill: {
    amountDue: 8487.22,
    currency: "facilis",
    currencyRate: 2476.18,
    dueDate: "2022-10-23T00:00:00Z",
    id: "adebd5da-ea4c-4506-a8aa-94c02644cf5e",
    issueDate: "2022-10-23T00:00:00Z",
    lineItems: [
      {
        accountRef: {
          id: "d9a4578a-dc1a-4c60-8dec-001ac802e2ec",
          name: "Sonia Wiegand",
        },
        description: "maiores",
        discountAmount: 6.91,
        discountPercentage: 9926.67,
        isDirectCost: false,
        itemRef: {
          id: "816ff347-7c13-4e90-ac14-125b0960a668",
          name: "Dana Berge",
        },
        quantity: 4625.83,
        subTotal: 1693.12,
        taxAmount: 6463.29,
        taxRateRef: {
          effectiveTaxRate: 9650.95,
          id: "923c5949-f83f-4350-8f87-6ffb901c6ecb",
          name: "Joel Von",
        },
        totalAmount: 1940.58,
        tracking: {
          categoryRefs: [
            {
              id: "f789ffaf-eda5-43e5-ae6e-0ac184c2b9c2",
              name: "Bessie Schmidt",
            },
            {
              id: "373a40e1-942f-432e-9505-5756f5d56d0b",
              name: "Joseph Olson",
            },
            {
              id: "dfe13db4-f62c-4ba3-b894-1aebc0b80a69",
              name: "Rhonda Schuster",
            },
            {
              id: "2ecfcc8f-8950-410f-9dd3-d6fa1804e54c",
              name: "Ms. Russell Wunsch",
            },
          ],
          customerRef: {
            companyName: "est",
            id: "363c8873-e484-4380-b1f6-b8ca275a60a0",
          },
          isBilledTo: BilledToTypeEnum.NotApplicable,
          isRebilledTo: BilledToTypeEnum.Project,
          projectRef: {
            id: "495cc699-171b-451c-9bdb-1cf4b888ebdf",
            name: "Randall Schmeler",
          },
        },
        trackingCategoryRefs: [
          {
            id: "99bc7fc0-b2dc-4e10-873e-42b006d67887",
            name: "Rickey Oberbrunner",
          },
          {
            id: "81a58208-c54f-4efa-9c95-f2eac5565d30",
            name: "Bethany Zboncak",
          },
          {
            id: "81206e28-13fa-44a4-9c48-0d3f2132af03",
            name: "Sarah Collier",
          },
        ],
        unitAmount: 735.74,
      },
      {
        accountRef: {
          id: "4f4cc6f1-8bf9-4621-a6a4-f77a87ee3e4b",
          name: "Lance Hintz",
        },
        description: "aliquid",
        discountAmount: 3398.43,
        discountPercentage: 7044.02,
        isDirectCost: false,
        itemRef: {
          id: "34418e3b-b91c-48d9-b5e0-e8419d8f84f1",
          name: "Clara Wyman",
        },
        quantity: 89.04,
        subTotal: 4587.23,
        taxAmount: 8913.02,
        taxRateRef: {
          effectiveTaxRate: 8174.54,
          id: "cc4aa5f3-cabd-4905-a972-e056728227b2",
          name: "Antonio Beer",
        },
        totalAmount: 4570.63,
        tracking: {
          categoryRefs: [
            {
              id: "bf7a4fa8-7cf5-435a-afae-54ebf60c321f",
              name: "Tammy Farrell",
            },
          ],
          customerRef: {
            companyName: "nostrum",
            id: "d2367fe1-a0cc-48df-b9f0-a396d90c364b",
          },
          isBilledTo: BilledToTypeEnum.NotApplicable,
          isRebilledTo: BilledToTypeEnum.Project,
          projectRef: {
            id: "15dfbace-188b-41c4-ae2c-8c6ce611feeb",
            name: "Angelica Kulas",
          },
        },
        trackingCategoryRefs: [
          {
            id: "b6eec743-78ba-4253-9774-7dc915ad2caf",
            name: "Angel Sporer",
          },
          {
            id: "23dc0f5a-e2f3-4a6b-b008-78756143f5a6",
            name: "Eduardo Larkin",
          },
          {
            id: "5554080d-40bc-4acc-acbd-6b5f3ec90930",
            name: "Kristie Mohr",
          },
          {
            id: "bad25538-19b4-474b-8ed2-0e56248fff63",
            name: "Mr. Matt McLaughlin",
          },
        ],
        unitAmount: 7211.38,
      },
      {
        accountRef: {
          id: "dcab6267-6696-4e1e-8002-21b335d89acb",
          name: "Raquel Rolfson",
        },
        description: "id",
        discountAmount: 5420.17,
        discountPercentage: 8453.65,
        isDirectCost: false,
        itemRef: {
          id: "0c549ef0-3004-4978-a61f-a1cf20688f77",
          name: "Justin Willms",
        },
        quantity: 4515.89,
        subTotal: 779.92,
        taxAmount: 8156.11,
        taxRateRef: {
          effectiveTaxRate: 8049.36,
          id: "a163f2a3-c80a-497f-b334-cddf857a9e61",
          name: "Darren Johnson",
        },
        totalAmount: 6484.97,
        tracking: {
          categoryRefs: [
            {
              id: "21d29dfc-94d6-4fec-9799-390066a6d2d0",
              name: "Linda Frami",
            },
            {
              id: "338cec08-6fa2-41e9-952c-b3119167b8e3",
              name: "Julian Stanton I",
            },
            {
              id: "408d6d36-4ffd-4455-906d-1263d48e935c",
              name: "Nichole Marks",
            },
          ],
          customerRef: {
            companyName: "dicta",
            id: "f30be3e4-3202-4d72-9657-6506641870d9",
          },
          isBilledTo: BilledToTypeEnum.Project,
          isRebilledTo: BilledToTypeEnum.Unknown,
          projectRef: {
            id: "1f9ad030-c4ec-4c11-a083-6429068b8502",
            name: "Jon Hessel",
          },
        },
        trackingCategoryRefs: [
          {
            id: "73bc845e-320a-4319-b4ba-df947c9a867b",
            name: "Barry Daugherty",
          },
          {
            id: "6665816d-dca8-4ef5-9fcb-4c593ec12cda",
            name: "Marty Beer",
          },
          {
            id: "7afedbd8-0df4-448a-87f9-390c58880983",
            name: "Blake Purdy",
          },
          {
            id: "ef3ffdd9-f7f0-479a-b4d3-5724cdb0f4d2",
            name: "Roger Bradtke",
          },
        ],
        unitAmount: 8548,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    note: "enim",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "laudantium",
          currencyRate: 2653.03,
          totalAmount: 3017.01,
        },
        payment: {
          accountRef: {
            id: "eded85a9-065e-4628-bdfc-2032b6c87992",
            name: "Melody Kreiger I",
          },
          currency: "ad",
          currencyRate: 5398.86,
          id: "4f7ae12c-6891-4f82-8e11-57172305377d",
          note: "minus",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "a",
          totalAmount: 6863.01,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "totam",
          currencyRate: 5875.39,
          totalAmount: 8701,
        },
        payment: {
          accountRef: {
            id: "f975e356-6860-492e-9c3d-dc5f111dea10",
            name: "Jeanne Stracke",
          },
          currency: "architecto",
          currencyRate: 6659.52,
          id: "4d190feb-2178-40bc-8c0d-bbddb484708f",
          note: "facilis",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "aliquam",
          totalAmount: 9229.15,
        },
      },
    ],
    purchaseOrderRefs: [
      {
        id: "91e6bc15-8c4c-44e5-8599-ea342260e9b2",
        purchaseOrderNumber: "accusantium",
      },
    ],
    reference: "consequatur",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    status: BillStatusEnum.Void,
    subTotal: 9277.54,
    supplementalData: {
      content: {
        "deleniti": {
          "et": "expedita",
          "quibusdam": "quos",
          "maiores": "quidem",
        },
        "in": {
          "doloremque": "fuga",
          "dicta": "architecto",
          "suscipit": "eligendi",
        },
      },
    },
    supplierRef: {
      id: "e723d409-7fa3-40e9-af72-5b29122030d8",
      supplierName: "velit",
    },
    taxAmount: 9427.8,
    totalAmount: 3564.85,
    withholdingTax: [
      {
        amount: 9319.53,
        name: "Mathew Kunde",
      },
      {
        amount: 8287.35,
        name: "Theresa Terry",
      },
      {
        amount: 988.05,
        name: "Ivan Gulgowski",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 546089,
};

sdk.bills.createBill(req).then((res: CreateBillResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```