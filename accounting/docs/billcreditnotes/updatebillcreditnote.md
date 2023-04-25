# updateBillCreditNote
Available in: `billCreditNotes`

Posts an updated billCreditNote to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-billCreditNotes-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support updating bill credit notes.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateBillCreditNoteRequest, UpdateBillCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BillCreditNoteStatusEnum,
  BilledToTypeEnum,
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

const req: UpdateBillCreditNoteRequest = {
  billCreditNote: {
    allocatedOnDate: "2022-10-23T00:00:00Z",
    billCreditNoteNumber: "voluptas",
    currency: "asperiores",
    currencyRate: 456.59,
    discountPercentage: 4090.54,
    id: "42dac7af-515c-4c41-baa6-3aae8d67864d",
    issueDate: "2022-10-23T00:00:00Z",
    lineItems: [
      {
        accountRef: {
          id: "b675fd5e-60b3-475e-94f6-fbee41f33317",
          name: "Doyle Feest",
        },
        description: "laboriosam",
        discountAmount: 583.56,
        discountPercentage: 9167.27,
        itemRef: {
          id: "b1ea4265-55ba-43c2-8744-ed53b88f3a8d",
          name: "Terrell Heidenreich MD",
        },
        quantity: 1488.29,
        subTotal: 9679.66,
        taxAmount: 1318.52,
        taxRateRef: {
          effectiveTaxRate: 9944.01,
          id: "b7b194a2-76b2-4691-afe1-f08f4294e369",
          name: "Courtney Goldner",
        },
        totalAmount: 9700.76,
        tracking: {
          categoryRefs: [
            {
              id: "03e8b445-e80c-4a55-afd2-0e457e1858b6",
              name: "Bob Mueller",
            },
            {
              id: "e3a5aa8e-4824-4d0a-b407-5088e5186206",
              name: "Mrs. Tricia Mueller",
            },
          ],
          customerRef: {
            companyName: "dolorem",
            id: "b1194b8a-bf60-43a7-9f9d-fe0ab7da8a50",
          },
          isBilledTo: BilledToTypeEnum.Project,
          isRebilledTo: BilledToTypeEnum.Project,
          projectRef: {
            id: "187f86bc-173d-4689-aee9-526f8d986e88",
            name: "Delia Parisian",
          },
        },
        trackingCategoryRefs: [
          {
            id: "0e101256-3f94-4e29-a973-e922a57a15be",
            name: "Meghan Batz IV",
          },
          {
            id: "07e2b6e3-ab88-445f-8597-a60ff2a54a31",
            name: "Arturo Hagenes",
          },
          {
            id: "4a3e865e-7956-4f92-91a5-a9da660ff57b",
            name: "Oliver Osinski",
          },
          {
            id: "f9efc1b4-512c-4103-a648-dc2f615199eb",
            name: "Gilberto Bechtelar",
          },
        ],
        unitAmount: 9834.27,
      },
      {
        accountRef: {
          id: "e6c632ca-3aed-4011-b996-312fde047717",
          name: "Irma Wuckert",
        },
        description: "architecto",
        discountAmount: 8571.25,
        discountPercentage: 396.5,
        itemRef: {
          id: "17476360-a15d-4b6a-a606-59a1adeaab58",
          name: "Gloria Skiles",
        },
        quantity: 4053.73,
        subTotal: 2811.53,
        taxAmount: 3210.43,
        taxRateRef: {
          effectiveTaxRate: 7139.27,
          id: "08b61891-baa0-4fe1-ade0-08e6f8c5f350",
          name: "Jimmie Russel",
        },
        totalAmount: 3732.16,
        tracking: {
          categoryRefs: [
            {
              id: "34181430-1042-4181-bd52-08ece7e253b6",
              name: "Jennie Gutkowski DDS",
            },
            {
              id: "6c6e205e-16de-4ab3-bec9-578a64584273",
              name: "Ms. Armando Gottlieb",
            },
            {
              id: "162309fb-0929-4921-aefb-9f58c4d86e68",
              name: "Edwin Reichert III",
            },
          ],
          customerRef: {
            companyName: "vel",
            id: "013f59da-757a-459e-8fef-66ef1caa3383",
          },
          isBilledTo: BilledToTypeEnum.Project,
          isRebilledTo: BilledToTypeEnum.Unknown,
          projectRef: {
            id: "beb47737-3c8d-472f-a4d1-db1f2c431066",
            name: "Leigh Mante",
          },
        },
        trackingCategoryRefs: [
          {
            id: "9e1cf9e0-6e3a-4437-800a-e6b6bc9b8f75",
            name: "Terence O'Keefe",
          },
          {
            id: "5a9741d3-1135-4296-9bb8-a7202611435e",
            name: "Tracy Mills",
          },
        ],
        unitAmount: 8028.94,
      },
      {
        accountRef: {
          id: "2259b1ab-da8c-4070-a108-4cb0672d1ad8",
          name: "Daisy Tillman",
        },
        description: "sint",
        discountAmount: 4097.26,
        discountPercentage: 4218.19,
        itemRef: {
          id: "5b85efbd-02ba-4e0b-a2d7-82259e3ea4b5",
          name: "Lindsey Kreiger",
        },
        quantity: 1478.01,
        subTotal: 2536.25,
        taxAmount: 2569.16,
        taxRateRef: {
          effectiveTaxRate: 2010.1,
          id: "da7ce52b-895c-4537-8645-4efb0b34896c",
          name: "Bethany Paucek",
        },
        totalAmount: 7708.73,
        tracking: {
          categoryRefs: [
            {
              id: "be2fd570-7577-4929-977d-eac646ecb573",
              name: "Melissa Mayer",
            },
            {
              id: "eb1e5a2b-12eb-407f-916d-b99545fc95fa",
              name: "Felix Mann PhD",
            },
            {
              id: "189dbb30-fcb3-43ea-855b-197cd44e2f52",
              name: "Dwight Connelly",
            },
            {
              id: "513bb6f4-8b65-46bc-9b35-ff2e4b27537a",
              name: "Delbert Stehr",
            },
          ],
          customerRef: {
            companyName: "ducimus",
            id: "319c177d-525f-477b-914e-eb52ff785fc3",
          },
          isBilledTo: BilledToTypeEnum.NotApplicable,
          isRebilledTo: BilledToTypeEnum.Customer,
          projectRef: {
            id: "14d4c98e-0c2b-4b89-ab75-dad636c60050",
            name: "Desiree Lakin",
          },
        },
        trackingCategoryRefs: [
          {
            id: "1180f739-ae9e-4057-ab80-9e2810331f39",
            name: "Albert Stroman",
          },
        ],
        unitAmount: 4567.04,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    note: "voluptatem",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "rerum",
          currencyRate: 4116.15,
          totalAmount: 467.91,
        },
        payment: {
          accountRef: {
            id: "7f3c93c7-3b9d-4a3f-aced-a7e23f225741",
            name: "May Nolan",
          },
          currency: "distinctio",
          currencyRate: 4502.24,
          id: "544e472e-8028-457a-9b40-463a7d575f14",
          note: "aut",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "aut",
          totalAmount: 9116.57,
        },
      },
    ],
    remainingCredit: 4837.53,
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    status: BillCreditNoteStatusEnum.Submitted,
    subTotal: 2561.14,
    supplementalData: {
      content: {
        "possimus": {
          "consectetur": "nesciunt",
          "quaerat": "itaque",
        },
        "minus": {
          "distinctio": "iusto",
        },
        "quas": {
          "facilis": "amet",
        },
      },
    },
    supplierRef: {
      id: "6a08088d-100e-4fad-a200-ef0422eb2164",
      supplierName: "optio",
    },
    totalAmount: 9750.95,
    totalDiscount: 5629.48,
    totalTaxAmount: 6394.63,
    withholdingTax: [
      {
        amount: 5206.78,
        name: "Beth Jenkins",
      },
      {
        amount: 1409.57,
        name: "Faith Zulauf",
      },
      {
        amount: 6176.57,
        name: "Anthony Huel",
      },
    ],
  },
  billCreditNoteId: "voluptates",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 251627,
};

sdk.billCreditNotes.updateBillCreditNote(req).then((res: UpdateBillCreditNoteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```