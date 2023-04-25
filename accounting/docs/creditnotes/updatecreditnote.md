# updateCreditNote
Available in: `creditNotes`

Posts an updated credit note to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-creditNotes-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes) for integrations that support updating a credit note.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateCreditNoteRequest, UpdateCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BilledToTypeEnum1,
  CreditNoteStatusEnum,
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

const req: UpdateCreditNoteRequest = {
  creditNote: {
    additionalTaxAmount: 613,
    additionalTaxPercentage: 3298.36,
    allocatedOnDate: "2022-10-23T00:00:00Z",
    creditNoteNumber: "sint",
    currency: "minus",
    currencyRate: 5674.41,
    customerRef: {
      companyName: "porro",
      id: "3f567e0e-2527-465b-9d62-fcdace1f0121",
    },
    discountPercentage: 3888.89,
    id: "ce2239e8-f25c-4d0d-99d9-59f439e39266",
    issueDate: "2022-10-23T00:00:00Z",
    lineItems: [
      {
        accountRef: {
          id: "bd95f7aa-2b24-4113-a95d-1e6698fcc459",
          name: "Bonnie Carroll",
        },
        description: "dolores",
        discountAmount: 5658.09,
        discountPercentage: 4624.26,
        isDirectIncome: false,
        itemRef: {
          id: "76763342-5403-48bf-b597-1e9819055738",
          name: "Benny Ward",
        },
        quantity: 6636.42,
        subTotal: 7673.61,
        taxAmount: 4498.67,
        taxRateRef: {
          effectiveTaxRate: 9508.94,
          id: "da39594d-66bc-42ae-8806-32b9954b6fa2",
          name: "Ruth Kemmer",
        },
        totalAmount: 5646.65,
        tracking: {
          categoryRefs: [
            {
              id: "28553cb1-0006-4bef-8921-ec2053b74936",
              name: "Brandi Schaefer",
            },
            {
              id: "e0f2bf19-588d-440d-83f3-deba297be3e9",
              name: "Maryann Rolfson PhD",
            },
            {
              id: "f868fd52-405c-4b33-9d49-2f4f127fb0e0",
              name: "Moses Brekke",
            },
          ],
          customerRef: {
            companyName: "fugit",
            id: "17978d0a-cca7-47ae-b7b7-021a52046b64",
          },
          isBilledTo: BilledToTypeEnum1.Project,
          isRebilledTo: BilledToTypeEnum1.NotApplicable,
          projectRef: {
            id: "9fb0e67e-094f-4dfe-9554-0ef53a34a1b8",
            name: "Lamar Mertz",
          },
        },
        trackingCategoryRefs: [
          {
            id: "1adc05d8-5ae2-4dfb-b0fb-3874290d3365",
            name: "Janet Torphy",
          },
        ],
        unitAmount: 993.43,
      },
      {
        accountRef: {
          id: "6ef89451-bd76-4eee-b518-c4da1fad3551",
          name: "Faith Baumbach",
        },
        description: "dolore",
        discountAmount: 9328.83,
        discountPercentage: 3163.35,
        isDirectIncome: false,
        itemRef: {
          id: "b72f0f54-8568-4a04-a4e0-0a1d6eb94346",
          name: "Mrs. Dana Swaniawski V",
        },
        quantity: 3105.42,
        subTotal: 9999.32,
        taxAmount: 7093,
        taxRateRef: {
          effectiveTaxRate: 7284.66,
          id: "a5cceff5-cb01-4fe5-9e52-8a45ac82b85f",
          name: "Dr. Marco Schulist",
        },
        totalAmount: 7142.4,
        tracking: {
          categoryRefs: [
            {
              id: "8da4127d-d597-4ff4-b11a-a1bc74b86cec",
              name: "Kelly Goyette",
            },
            {
              id: "7b4848bd-6a6f-4044-9d2c-3b808094373e",
              name: "Katie Bailey",
            },
            {
              id: "9bebbad0-2f25-486b-8f15-2558daa95be6",
              name: "Jody Altenwerth",
            },
          ],
          customerRef: {
            companyName: "enim",
            id: "6c354aa4-32b4-47e1-b63c-5208c23e9802",
          },
          isBilledTo: BilledToTypeEnum1.Project,
          isRebilledTo: BilledToTypeEnum1.NotApplicable,
          projectRef: {
            id: "2f0d45eb-4a8b-4674-ae5c-fc18edc7f787",
            name: "Travis Dach I",
          },
        },
        trackingCategoryRefs: [
          {
            id: "3d3ed0c5-670e-4f42-bd3c-9f1cc503f6c3",
            name: "Preston Runte MD",
          },
          {
            id: "6290f957-f385-4189-ad7e-f807aae03f33",
            name: "Dana Kuhlman",
          },
          {
            id: "b9de4032-ba26-4fd3-a8ba-9216bcb41583",
            name: "Marianne Koelpin",
          },
        ],
        unitAmount: 2708.4,
      },
      {
        accountRef: {
          id: "1723133e-dc04-46bc-9163-bbca49227c42",
          name: "Brandon Cummings",
        },
        description: "ipsam",
        discountAmount: 1931.99,
        discountPercentage: 3126.17,
        isDirectIncome: false,
        itemRef: {
          id: "0495c5db-b3c5-47c1-a498-1e8aa257ddc1",
          name: "Dennis Considine",
        },
        quantity: 8734.29,
        subTotal: 8953.49,
        taxAmount: 4286.45,
        taxRateRef: {
          effectiveTaxRate: 2501.01,
          id: "bfcc5469-d401-45df-a796-206bef2b0a3e",
          name: "Miss Lori Sawayn",
        },
        totalAmount: 173.42,
        tracking: {
          categoryRefs: [
            {
              id: "0e9aac2e-9135-4586-918f-9f97a4bfad2b",
              name: "Erik Stehr",
            },
          ],
          customerRef: {
            companyName: "quo",
            id: "a84ad99b-41d6-4124-b531-870cf68b03ad",
          },
          isBilledTo: BilledToTypeEnum1.Unknown,
          isRebilledTo: BilledToTypeEnum1.Unknown,
          projectRef: {
            id: "1bd43d1f-0cb0-4a00-83eb-22d9b3a70d94",
            name: "Grant Oberbrunner",
          },
        },
        trackingCategoryRefs: [
          {
            id: "c57d1fed-c205-40d3-8dc3-ce185472f9ee",
            name: "Natasha Boyer",
          },
        ],
        unitAmount: 6250.09,
      },
      {
        accountRef: {
          id: "8be3444e-ac8b-43a2-875c-6c1fe606d07d",
          name: "Joanna Mueller",
        },
        description: "nihil",
        discountAmount: 6406.81,
        discountPercentage: 9201.94,
        isDirectIncome: false,
        itemRef: {
          id: "50c16661-a1d9-4136-a7e8-d53213f3f658",
          name: "Lynn Considine",
        },
        quantity: 4758.59,
        subTotal: 4218.34,
        taxAmount: 3058.33,
        taxRateRef: {
          effectiveTaxRate: 8030.15,
          id: "59f0a56c-ebca-4da2-9ca7-9181c9567166",
          name: "Brooke Hand MD",
        },
        totalAmount: 3255.27,
        tracking: {
          categoryRefs: [
            {
              id: "65163a36-3851-42ab-a521-b9f2e072467b",
              name: "Miss Homer Gislason",
            },
            {
              id: "05fab0d6-50ed-4f22-a94d-20ec90ea41d1",
              name: "Leroy Huels",
            },
          ],
          customerRef: {
            companyName: "praesentium",
            id: "5156fff7-3fdf-454f-9d5e-a9543398dafb",
          },
          isBilledTo: BilledToTypeEnum1.Unknown,
          isRebilledTo: BilledToTypeEnum1.Unknown,
          projectRef: {
            id: "a8d63388-e4d8-4039-aa5f-9b18a244fd61",
            name: "Charles Emmerich",
          },
        },
        trackingCategoryRefs: [
          {
            id: "cd38ed0d-c671-4dc7-b1e3-af15920c90d1",
            name: "Mr. Clifford Morissette",
          },
          {
            id: "2bd89c8a-3263-49da-9b7b-6902b881a94f",
            name: "Emma Dickinson",
          },
          {
            id: "4a8f0af8-c691-4d73-ad9f-baf9476a2ae8",
            name: "Benny Ryan DDS",
          },
        ],
        unitAmount: 5567.19,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    note: "culpa",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "nostrum",
          currencyRate: 1196.85,
          totalAmount: 1793.01,
        },
        payment: {
          accountRef: {
            id: "c7378489-3075-40a0-8e96-6ec736d43194",
            name: "Belinda Lockman",
          },
          currency: "atque",
          currencyRate: 2239.23,
          id: "c92398ed-3d3a-4b7c-a3c5-ca8649a70cfd",
          note: "veniam",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "pariatur",
          totalAmount: 4175.19,
        },
      },
    ],
    remainingCredit: 6115.25,
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    status: CreditNoteStatusEnum.Paid,
    subTotal: 6125.84,
    supplementalData: {
      content: {
        "in": {
          "voluptatem": "voluptas",
        },
        "magnam": {
          "quae": "ipsa",
          "iure": "voluptate",
        },
        "illum": {
          "perspiciatis": "accusamus",
        },
      },
    },
    totalAmount: 6755.33,
    totalDiscount: 5296.77,
    totalTaxAmount: 1880.08,
    withholdingTax: [
      {
        amount: 2619.53,
        name: "Russell Weber II",
      },
      {
        amount: 7320.16,
        name: "Blake Connelly V",
      },
      {
        amount: 3475.83,
        name: "Lynn Hahn",
      },
      {
        amount: 6009.33,
        name: "Veronica Schultz",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  creditNoteId: "et",
  forceUpdate: false,
  timeoutInMinutes: 510079,
};

sdk.creditNotes.updateCreditNote(req).then((res: UpdateCreditNoteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```