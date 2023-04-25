# createDirectCost
Available in: `directCosts`

Posts a new direct cost to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create direct cost model](https://docs.codat.io/accounting-api#/operations/get-create-directCosts-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support creating direct costs.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateDirectCostRequest, CreateDirectCostResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateDirectCostRequest = {
  directCost: {
    contactRef: {
      dataType: "modi",
      id: "c0252fe3-b4b4-4db8-b778-ebb6e1d2cf50",
    },
    currency: "aspernatur",
    currencyRate: 7116.2,
    id: "afb2cbc4-635d-45e6-9da0-28c3e951a1e3",
    issueDate: "2022-10-23T00:00:00Z",
    lineItems: [
      {
        accountRef: {
          id: "fda96648-9d7b-4786-b3e1-3a12a6b99249",
          name: "Renee Morissette",
        },
        description: "corrupti",
        discountAmount: 4996.21,
        discountPercentage: 9890.6,
        itemRef: {
          id: "5c843836-b86b-43cd-b641-5b0449f9df13",
          name: "Mario Torphy",
        },
        quantity: 7182.93,
        subTotal: 9239.82,
        taxAmount: 4493.31,
        taxRateRef: {
          effectiveTaxRate: 5339.88,
          id: "bf606825-894e-4a76-bd5c-72795b785148",
          name: "Andre Sporer",
        },
        totalAmount: 5825.36,
        tracking: {
          invoiceTo: {
            dataType: "debitis",
            id: "5635b33b-c0f9-470c-82fc-9f4844225e75",
          },
          recordRefs: [
            {
              dataType: "ducimus",
              id: "96065c0e-fa6f-493b-90a1-b8c95be1254b",
            },
            {
              dataType: "nihil",
              id: "39f4fe77-210d-41f6-958c-99c722d2bc0f",
            },
            {
              dataType: "excepturi",
              id: "4087d9ca-ae04-42dd-bcaa-c9b4caa1cfe9",
            },
          ],
        },
        trackingCategoryRefs: [
          {
            id: "15df9039-07f3-4783-9983-d42e54a85466",
            name: "Ramona Kub",
          },
          {
            id: "0233c147-1d51-4aaa-addf-5abd6487c5fc",
            name: "Gayle Lehner",
          },
          {
            id: "a00bef69-e100-4157-a30b-da7afded84a3",
            name: "Mr. Sonya Gutmann",
          },
          {
            id: "8e1a735a-c26a-4e33-bef9-71a8f46bca11",
            name: "Tonya Wintheiser",
          },
        ],
        unitAmount: 4078.27,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    note: "ipsam",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "esse",
          currencyRate: 1133.82,
          totalAmount: 1054.97,
        },
        payment: {
          accountRef: {
            id: "d08cf88e-c9f7-4b99-a550-a656ed333bb0",
            name: "Frankie Larkin",
          },
          currency: "autem",
          currencyRate: 3351.76,
          id: "432a986e-b7e1-44ca-9640-89150097019a",
          note: "eius",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "rem",
          totalAmount: 9654.94,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "blanditiis",
          currencyRate: 5149.76,
          totalAmount: 9368.8,
        },
        payment: {
          accountRef: {
            id: "ce7bf904-e011-405d-b890-8162c6beb68a",
            name: "Melba Keebler",
          },
          currency: "quidem",
          currencyRate: 4478.48,
          id: "d03a1480-f8de-430f-869d-810618d97e15",
          note: "quia",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "aspernatur",
          totalAmount: 6114.23,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "molestiae",
          currencyRate: 3286.66,
          totalAmount: 900.67,
        },
        payment: {
          accountRef: {
            id: "0da80312-292c-4c61-82a7-02bb97ee102d",
            name: "Aaron Stehr",
          },
          currency: "minima",
          currencyRate: 9483.74,
          id: "8e01bf33-eaab-4454-82ac-1704bf1cc9fc",
          note: "ex",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "dicta",
          totalAmount: 6460.23,
        },
      },
    ],
    reference: "laborum",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    subTotal: 9299.41,
    supplementalData: {
      content: {
        "voluptates": {
          "quaerat": "delectus",
          "sit": "porro",
          "labore": "molestias",
        },
        "qui": {
          "ullam": "nihil",
          "ut": "incidunt",
          "quibusdam": "doloremque",
        },
      },
    },
    taxAmount: 5244.63,
    totalAmount: 6772.03,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 129394,
};

sdk.directCosts.createDirectCost(req).then((res: CreateDirectCostResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```