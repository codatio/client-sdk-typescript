# updateInvoice
Available in: `invoices`

Posts an updated invoice to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update invoice model](https://docs.codat.io/accounting-api#/operations/get-create-update-invoices-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support updating invoices.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateInvoiceRequest, UpdateInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BilledToTypeEnum1,
  DataTypeEnum,
  InvoiceStatusEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UpdateInvoiceRequest = {
  invoice: {
    additionalTaxAmount: 8977.85,
    additionalTaxPercentage: 5673.2,
    amountDue: 721.26,
    currency: "tempora",
    currencyRate: 2813.81,
    customerRef: {
      companyName: "perspiciatis",
      id: "8a9ba460-addf-4de4-90c3-7daa9182a49d",
    },
    discountPercentage: 5768.41,
    dueDate: "2022-10-23T00:00:00Z",
    id: "625d3caf-fc19-48ee-a445-2792bcd440ea",
    invoiceNumber: "occaecati",
    issueDate: "2022-10-23T00:00:00Z",
    lineItems: [
      {
        accountRef: {
          id: "becce048-6de0-4d56-973b-005503e8dc62",
          name: "Ora Wuckert",
        },
        description: "impedit",
        discountAmount: 4366.89,
        discountPercentage: 3524.16,
        isDirectIncome: false,
        itemRef: {
          id: "675f5b70-e3e4-4cfc-86a9-1ec52624d000",
          name: "Rhonda VonRueden",
        },
        quantity: 3242.38,
        subTotal: 7743.39,
        taxAmount: 8885.73,
        taxRateRef: {
          effectiveTaxRate: 6571.73,
          id: "11ac53eb-b658-47f3-8041-4c5b9acee400",
          name: "Noah Medhurst",
        },
        totalAmount: 1671.44,
        tracking: {
          categoryRefs: [
            {
              id: "af1b025f-1d14-4718-86fa-2fad0c06c5d9",
              name: "Gail King",
            },
            {
              id: "dd14fc43-b70b-4ca8-8fa7-0c43351c3dd1",
              name: "Kerry Lesch",
            },
            {
              id: "f75f4f23-f1c0-4a58-ac3a-e7d7b67feef5",
              name: "Eric Gibson",
            },
            {
              id: "95b1dbec-eff7-4c4b-956e-9278275eea76",
              name: "Carl Kozey",
            },
          ],
          customerRef: {
            companyName: "praesentium",
            id: "063f799b-7956-4c0b-8fa0-bb20a40e7c4a",
          },
          isBilledTo: BilledToTypeEnum1.Project,
          isRebilledTo: BilledToTypeEnum1.NotApplicable,
          projectRef: {
            id: "40642726-57b0-41a0-bc08-fd3921c25793",
            name: "Mercedes Kemmer V",
          },
        },
        trackingCategoryRefs: [
          {
            id: "a3efa46d-366d-4fa1-811a-091b3ec8b538",
            name: "Bonnie Stokes MD",
          },
        ],
        unitAmount: 5648.16,
      },
      {
        accountRef: {
          id: "d14fe72e-521f-4903-83df-c338397fffa6",
          name: "Justin Stroman",
        },
        description: "consequatur",
        discountAmount: 5788.09,
        discountPercentage: 9.47,
        isDirectIncome: false,
        itemRef: {
          id: "fc157ac9-fe19-461c-a9be-41c869dd7d97",
          name: "Ms. Geneva Skiles",
        },
        quantity: 1382.61,
        subTotal: 154.46,
        taxAmount: 498.92,
        taxRateRef: {
          effectiveTaxRate: 6470.89,
          id: "58ffd296-7df8-4fd8-82a8-e60be620cd9c",
          name: "Brandi Williamson",
        },
        totalAmount: 419.17,
        tracking: {
          categoryRefs: [
            {
              id: "c3752512-beae-41d8-becc-5fdcea8e7a88",
              name: "Frances Bosco",
            },
            {
              id: "2cda6d77-c1d8-4606-a237-d4227866db8a",
              name: "Clara Mertz",
            },
          ],
          customerRef: {
            companyName: "provident",
            id: "84511cc7-5e4f-40c0-84b5-bb758cc94562",
          },
          isBilledTo: BilledToTypeEnum1.Project,
          isRebilledTo: BilledToTypeEnum1.Unknown,
          projectRef: {
            id: "069685fc-d1a1-473d-84bb-e24f29834afb",
            name: "Viola Dicki",
          },
        },
        trackingCategoryRefs: [
          {
            id: "6285d4a2-9aaa-41e1-a915-6f7d2ee20950",
            name: "Mrs. Whitney Wuckert",
          },
          {
            id: "93e94480-ca37-4fb1-8789-032ac333172e",
            name: "Angelina Sporer",
          },
          {
            id: "ec74ba7e-88dd-4b36-bd1c-cc341c865734",
            name: "Miss Charlotte Yundt",
          },
        ],
        unitAmount: 2786.03,
      },
      {
        accountRef: {
          id: "0fb4ab44-1c3a-409e-b639-95d808bbe794",
          name: "Joann Herman",
        },
        description: "quo",
        discountAmount: 3668.22,
        discountPercentage: 3290.47,
        isDirectIncome: false,
        itemRef: {
          id: "0a1c426b-59c8-4366-bdcc-135582c1b855",
          name: "Dwight Lindgren",
        },
        quantity: 6061.92,
        subTotal: 8896.83,
        taxAmount: 9407.66,
        taxRateRef: {
          effectiveTaxRate: 6238.98,
          id: "32e9000a-13ad-4812-8208-efd23411898e",
          name: "Sylvia Lang",
        },
        totalAmount: 9076.15,
        tracking: {
          categoryRefs: [
            {
              id: "be8baeba-bb79-4453-ae90-351bb9763172",
              name: "Melody Kreiger",
            },
            {
              id: "5a5365a7-9f15-4271-b01c-0d361fed8dc5",
              name: "Tommie Wilkinson",
            },
            {
              id: "53e9089e-871f-4db4-9697-bdd9c985e437",
              name: "Marjorie Nitzsche",
            },
            {
              id: "72d9edd7-85be-45e7-afe5-5297ba6281f4",
              name: "Tricia Ebert",
            },
          ],
          customerRef: {
            companyName: "dolor",
            id: "394a68cc-80d3-40ff-b216-4d0a91fe9d96",
          },
          isBilledTo: BilledToTypeEnum1.Unknown,
          isRebilledTo: BilledToTypeEnum1.NotApplicable,
          projectRef: {
            id: "3b89e000-9c66-492d-a7b3-562201a6aab4",
            name: "Noah Kirlin MD",
          },
        },
        trackingCategoryRefs: [
          {
            id: "b908d4e3-0491-4aa3-9d4a-839f03bab77b",
            name: "Ryan Labadie I",
          },
          {
            id: "13984507-e0e3-49c7-a23e-cb0604652e23",
            name: "Norman Stiedemann",
          },
        ],
        unitAmount: 3772.06,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    note: "quis",
    paidOnDate: "2022-10-23T00:00:00Z",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "vero",
          currencyRate: 6032.05,
          totalAmount: 8413.46,
        },
        payment: {
          accountRef: {
            id: "e8f7f002-d198-46aa-99d3-a1d32329e458",
            name: "Maureen Veum",
          },
          currency: "qui",
          currencyRate: 6377.7,
          id: "d6bb10e2-55fd-4c48-8d6e-3308675cbf18",
          note: "voluptas",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "molestias",
          totalAmount: 3424.33,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "vel",
          currencyRate: 6468.22,
          totalAmount: 4981.83,
        },
        payment: {
          accountRef: {
            id: "e82cdf9d-0fc2-482c-a66a-f3c3f5589bea",
            name: "Marcella Daniel",
          },
          currency: "voluptates",
          currencyRate: 2652.54,
          id: "1e2ca848-22e5-413f-ad9d-2ad37c309907",
          note: "esse",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "nobis",
          totalAmount: 640.01,
        },
      },
    ],
    salesOrderRefs: [
      "rerum",
    ],
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    status: InvoiceStatusEnum.Submitted,
    subTotal: 5362.23,
    supplementalData: {
      content: {
        "iste": {
          "veritatis": "commodi",
        },
        "amet": {
          "autem": "nihil",
          "repellendus": "non",
          "rem": "voluptatum",
          "vel": "quae",
        },
      },
    },
    totalAmount: 3358.37,
    totalDiscount: 2942.68,
    totalTaxAmount: 2316.11,
    withholdingTax: [
      {
        amount: 470,
        name: "Jeff Bailey",
      },
      {
        amount: 7879.41,
        name: "Traci Wolf",
      },
      {
        amount: 251.21,
        name: "Marcia Howe",
      },
      {
        amount: 7295.54,
        name: "Debra Purdy",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  timeoutInMinutes: 590737,
};

sdk.invoices.updateInvoice(req).then((res: UpdateInvoiceResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```