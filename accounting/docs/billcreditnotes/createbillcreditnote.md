# createBillCreditNote
Available in: `billCreditNotes`

Posts a new billCreditNote to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-billCreditNotes-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating bill credit notes.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBillCreditNoteRequest, CreateBillCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
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

const req: CreateBillCreditNoteRequest = {
  billCreditNote: {
    allocatedOnDate: "2022-10-23T00:00:00Z",
    billCreditNoteNumber: "aliquid",
    currency: "laborum",
    currencyRate: 8811.04,
    discountPercentage: 2497.96,
    id: "95efb9ba-88f3-4a66-9970-74ba4469b6e2",
    issueDate: "2022-10-23T00:00:00Z",
    lineItems: [
      {
        accountRef: {
          id: "41959890-afa5-463e-a516-fe4c8b711e5b",
          name: "Kristie Spencer",
        },
        description: "pariatur",
        discountAmount: 375.59,
        discountPercentage: 1624.93,
        itemRef: {
          id: "8921cddc-6926-401f-b576-b0d5f0d30c5f",
          name: "Robin D'Amore",
        },
        quantity: 4895.49,
        subTotal: 543.38,
        taxAmount: 3389.85,
        taxRateRef: {
          effectiveTaxRate: 1999.96,
          id: "202c73d5-fe9b-490c-a890-9b3fe49a8d9c",
          name: "Toby Hahn",
        },
        totalAmount: 2123.9,
        tracking: {
          categoryRefs: [
            {
              id: "323f9b77-f3a4-4100-a74e-bf69280d1ba7",
              name: "Sonya Leuschke",
            },
          ],
          customerRef: {
            companyName: "distinctio",
            id: "f737ae42-03ce-45e6-a95d-8a0d446ce2af",
          },
          isBilledTo: BilledToTypeEnum.NotApplicable,
          isRebilledTo: BilledToTypeEnum.Customer,
          projectRef: {
            id: "73cf3be4-53f8-470b-b26b-5a73429cdb1a",
            name: "Randall Cole",
          },
        },
        trackingCategoryRefs: [
          {
            id: "679d2322-715b-4f0c-bb1e-31b8b90f3443",
            name: "Ms. Joe Berge",
          },
          {
            id: "0adcf4b9-2187-49fc-a953-f73ef7fbc7ab",
            name: "Allan Greenholt",
          },
          {
            id: "39c0f5d2-cff7-4c70-a456-26d436813f16",
            name: "Marshall Wiza",
          },
        ],
        unitAmount: 7888.73,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    note: "saepe",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "impedit",
          currencyRate: 3592.71,
          totalAmount: 3331.45,
        },
        payment: {
          accountRef: {
            id: "6146c3e2-50fb-4008-842e-141aac366c8d",
            name: "Mrs. Shane Reinger",
          },
          currency: "explicabo",
          currencyRate: 5919.35,
          id: "07474778-a7bd-4466-928c-10ab3cdca425",
          note: "ab",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "cupiditate",
          totalAmount: 96.88,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "tempora",
          currencyRate: 8920.5,
          totalAmount: 3708.53,
        },
        payment: {
          accountRef: {
            id: "23c7e0bc-7178-4e47-96f2-a70c688282aa",
            name: "Leah Champlin",
          },
          currency: "fugit",
          currencyRate: 9564.06,
          id: "222e9817-ee17-4cbe-a1e6-b7b95bc0ab3c",
          note: "consequuntur",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "consequatur",
          totalAmount: 7963.92,
        },
      },
    ],
    remainingCredit: 3082.86,
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    status: BillCreditNoteStatusEnum.PartiallyPaid,
    subTotal: 2328.65,
    supplementalData: {
      content: {
        "blanditiis": {
          "a": "nulla",
          "quas": "esse",
          "quasi": "a",
        },
        "error": {
          "pariatur": "possimus",
          "quia": "eveniet",
          "asperiores": "facere",
        },
      },
    },
    supplierRef: {
      id: "121aa6f1-e674-4bdb-84f1-5756082d68ea",
      supplierName: "architecto",
    },
    totalAmount: 6091.78,
    totalDiscount: 9453.02,
    totalTaxAmount: 984.78,
    withholdingTax: [
      {
        amount: 920.27,
        name: "Mrs. Cynthia Hansen",
      },
      {
        amount: 6144.65,
        name: "Ms. Kenneth Ledner",
      },
      {
        amount: 6498.32,
        name: "Mrs. Priscilla Fritsch",
      },
      {
        amount: 2531.91,
        name: "Ms. Benjamin Hirthe DVM",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 618480,
};

sdk.billCreditNotes.createBillCreditNote(req).then((res: CreateBillCreditNoteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```