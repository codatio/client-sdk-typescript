# createDirectIncome
Available in: `directIncomes`

Posts a new direct income to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create direct income model](https://docs.codat.io/accounting-api#/operations/get-create-directIncomes-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support creating direct incomes.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateDirectIncomeRequest, CreateDirectIncomeResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateDirectIncomeRequest = {
  directIncome: {
    contactRef: {
      dataType: "est",
      id: "aee79e3c-71ad-431b-acb8-3d2378ae3bfc",
    },
    currency: "sed",
    currencyRate: 2220.93,
    id: "d9450a98-6a49-45ba-8707-f06b28ecc864",
    issueDate: "2022-10-23T00:00:00Z",
    lineItems: [
      {
        accountRef: {
          id: "2386f62c-969c-44cc-ab78-890a3fd3c81d",
          name: "Samuel Aufderhar",
        },
        description: "optio",
        discountAmount: 1614.81,
        discountPercentage: 2485.3,
        itemRef: {
          id: "df931da3-edb5-41fa-994a-cc9435137726",
          name: "Peter Hand",
        },
        quantity: 1199.27,
        subTotal: 7214.48,
        taxAmount: 5545.08,
        taxRateRef: {
          effectiveTaxRate: 2429.72,
          id: "2a56d691-80ff-460e-b9a6-658e69a4b843",
          name: "Chad Leannon",
        },
        totalAmount: 6893.09,
        trackingCategoryRefs: [
          {
            id: "c75c68c6-0659-4468-8e30-4d8849bf8214",
            name: "Vincent Erdman",
          },
          {
            id: "96bb0c69-e372-4db1-b44b-a9f78a5c0ed7",
            name: "Gerard Roberts DVM",
          },
          {
            id: "97261fb0-c58d-427b-9199-6b5b4b50eef7",
            name: "Christina Rice",
          },
          {
            id: "7ab0344b-1710-4688-9eeb-ef897f3dd0cc",
            name: "Curtis Fahey Sr.",
          },
        ],
        unitAmount: 6984.45,
      },
      {
        accountRef: {
          id: "3e4e080a-a104-4186-ac75-9e02f3702c5c",
          name: "Clay Conn",
        },
        description: "consequatur",
        discountAmount: 9158.97,
        discountPercentage: 6344.86,
        itemRef: {
          id: "d3104fa4-4707-4bf3-b5b4-4282821fdb2f",
          name: "Velma Vandervort",
        },
        quantity: 1639.27,
        subTotal: 3850.8,
        taxAmount: 4833.56,
        taxRateRef: {
          effectiveTaxRate: 7908.48,
          id: "71cc8d3c-d425-48d0-b58a-82c808fe2751",
          name: "Billy Aufderhar",
        },
        totalAmount: 7989.54,
        trackingCategoryRefs: [
          {
            id: "449e143f-9619-4bb7-940d-5a11fa436e62",
            name: "Faye Champlin",
          },
        ],
        unitAmount: 9421.67,
      },
      {
        accountRef: {
          id: "95c9d237-397c-4785-b5db-4f500183febd",
          name: "Brett Kling",
        },
        description: "reprehenderit",
        discountAmount: 1612.08,
        discountPercentage: 378.34,
        itemRef: {
          id: "6dab7500-52a5-4647-adc4-39ed8c4320f4",
          name: "Dr. Julia Gibson",
        },
        quantity: 2790.04,
        subTotal: 5208.11,
        taxAmount: 4808.49,
        taxRateRef: {
          effectiveTaxRate: 6503.19,
          id: "c693b94c-3b9d-4248-8d79-5aa42fc40566",
          name: "Roman Kassulke",
        },
        totalAmount: 604.91,
        trackingCategoryRefs: [
          {
            id: "6d212494-5081-49d7-83b1-b41844060e00",
            name: "Carolyn Bednar I",
          },
        ],
        unitAmount: 2449.14,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    note: "repellendus",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "error",
          currencyRate: 563.11,
          totalAmount: 1094.16,
        },
        payment: {
          accountRef: {
            id: "f5afd2a6-c448-446a-a9d8-9253c8962f48",
            name: "Franklin Prohaska",
          },
          currency: "et",
          currencyRate: 9102.24,
          id: "4652d3c3-43d6-4177-8af4-91247725e621",
          note: "iste",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "aut",
          totalAmount: 5779.63,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "vero",
          currencyRate: 6231.5,
          totalAmount: 781.11,
        },
        payment: {
          accountRef: {
            id: "044a5de5-9ac7-4706-a70c-f1cf59326052",
            name: "Teresa VonRueden",
          },
          currency: "harum",
          currencyRate: 7414,
          id: "426897d9-9a2d-4335-a70e-93ee6cf59f35",
          note: "voluptatum",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "dolorum",
          totalAmount: 6400.46,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "earum",
          currencyRate: 6662.73,
          totalAmount: 7892.14,
        },
        payment: {
          accountRef: {
            id: "ae323a31-bf7b-4a1c-8977-16c802cc9e0c",
            name: "Marcella Monahan",
          },
          currency: "dolores",
          currencyRate: 2361.24,
          id: "f1aa63ed-9cf1-4c85-abcb-a51ef2454a47",
          note: "voluptatibus",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "dolorum",
          totalAmount: 8037.82,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "repellat",
          currencyRate: 860.51,
          totalAmount: 779.96,
        },
        payment: {
          accountRef: {
            id: "6cdd5444-a756-4287-bc7d-d9efaf43dc62",
            name: "Dr. Terri Collier",
          },
          currency: "et",
          currencyRate: 2236.18,
          id: "8f30df3d-b022-4faa-965f-b8f652ebb9d3",
          note: "praesentium",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "non",
          totalAmount: 5332.9,
        },
      },
    ],
    reference: "dolor",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    subTotal: 5464.65,
    supplementalData: {
      content: {
        "molestias": {
          "fugit": "labore",
        },
        "neque": {
          "sed": "error",
          "ratione": "facere",
          "est": "soluta",
        },
      },
    },
    taxAmount: 2065,
    totalAmount: 212.77,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 878395,
};

sdk.directIncomes.createDirectIncome(req).then((res: CreateDirectIncomeResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```