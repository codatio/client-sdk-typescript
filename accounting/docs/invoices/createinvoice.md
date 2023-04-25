# createInvoice
Available in: `invoices`

Posts a new invoice to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update invoice model](https://docs.codat.io/accounting-api#/operations/get-create-update-invoices-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support creating invoices.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateInvoiceRequest, CreateInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
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

const req: CreateInvoiceRequest = {
  invoice: {
    additionalTaxAmount: 5328.66,
    additionalTaxPercentage: 7276.55,
    amountDue: 952.32,
    currency: "quidem",
    currencyRate: 7452.74,
    customerRef: {
      companyName: "exercitationem",
      id: "5a292b0b-c3bb-4744-a64e-b1d03388b0d1",
    },
    discountPercentage: 7272.56,
    dueDate: "2022-10-23T00:00:00Z",
    id: "b17afee7-4b6f-4eb9-857c-7edaf39d16fb",
    invoiceNumber: "asperiores",
    issueDate: "2022-10-23T00:00:00Z",
    lineItems: [
      {
        accountRef: {
          id: "6fd162b3-03e3-4023-b93e-34316cf55b43",
          name: "Edith Herman",
        },
        description: "porro",
        discountAmount: 7629.28,
        discountPercentage: 9383.57,
        isDirectIncome: false,
        itemRef: {
          id: "1c204c4a-dcc9-4904-8519-5b8648cefa78",
          name: "Raymond Von",
        },
        quantity: 2009.91,
        subTotal: 7268.55,
        taxAmount: 6231.48,
        taxRateRef: {
          effectiveTaxRate: 200.26,
          id: "1e0952bb-b4cb-4b19-b713-d95a4169c138",
          name: "Dr. Marilyn Kuhn V",
        },
        totalAmount: 9110.26,
        tracking: {
          categoryRefs: [
            {
              id: "9e45118c-2cc5-47fb-960b-1a78ed29a9d4",
              name: "Dexter O'Kon",
            },
            {
              id: "658c2d4f-4c88-4be4-b278-fd9667e46c51",
              name: "Ernest Wolf",
            },
            {
              id: "a58dcef2-34c9-455b-9bdf-2190abd9bbcc",
              name: "Stella Cole",
            },
          ],
          customerRef: {
            companyName: "impedit",
            id: "2659ce02-8084-40c6-9ef6-8e45c8addfac",
          },
          isBilledTo: BilledToTypeEnum1.NotApplicable,
          isRebilledTo: BilledToTypeEnum1.NotApplicable,
          projectRef: {
            id: "4500430c-6632-4b43-91fd-f01c3e91e8f7",
            name: "Jermaine Jenkins",
          },
        },
        trackingCategoryRefs: [
          {
            id: "60a77ece-b26d-410f-9ef2-631c7c0f0f87",
            name: "Dixie Mueller",
          },
          {
            id: "c25fd3e0-b4a4-4a42-93c3-025711f42c7e",
            name: "Mercedes Sauer",
          },
        ],
        unitAmount: 5293.03,
      },
      {
        accountRef: {
          id: "be09e41a-7a21-45ca-92a4-ba9d59988192",
          name: "Miss Darrin Shanahan",
        },
        description: "iusto",
        discountAmount: 7563.43,
        discountPercentage: 3550.92,
        isDirectIncome: false,
        itemRef: {
          id: "3e7e7d4e-e6e8-4b90-bac3-84e2396703fe",
          name: "Jeff Casper",
        },
        quantity: 246.9,
        subTotal: 5343.17,
        taxAmount: 1834.8,
        taxRateRef: {
          effectiveTaxRate: 2965.94,
          id: "d189a36a-6b2d-427e-b707-aa60c8fe46e6",
          name: "Colleen Klein",
        },
        totalAmount: 6100.01,
        tracking: {
          categoryRefs: [
            {
              id: "b3b70ffb-b697-40ee-b70e-36097ef7c206",
              name: "Ricardo Brown PhD",
            },
            {
              id: "308714c2-0a3d-4986-b7ca-85c3fe65574d",
              name: "Shannon Witting",
            },
            {
              id: "a7c98f13-af28-4db2-8f2b-f4f3ded356d7",
              name: "Lawrence Gleichner",
            },
            {
              id: "1cd98196-d55a-4f69-a1c4-b79ae33681c2",
              name: "Marianne Effertz",
            },
          ],
          customerRef: {
            companyName: "voluptate",
            id: "c0e17cb1-2c5b-4a82-9fe2-2cd5cba6fbfe",
          },
          isBilledTo: BilledToTypeEnum1.Project,
          isRebilledTo: BilledToTypeEnum1.NotApplicable,
          projectRef: {
            id: "32af6813-d65b-4fec-ac2d-d6916f7fc7dd",
            name: "Clinton Beer",
          },
        },
        trackingCategoryRefs: [
          {
            id: "0e607589-4d61-4c14-8d90-227e37c0d977",
            name: "Douglas Nicolas",
          },
          {
            id: "91abe975-1b10-46d2-be03-e69815aae99f",
            name: "Levi Tremblay",
          },
        ],
        unitAmount: 4467.12,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    note: "odit",
    paidOnDate: "2022-10-23T00:00:00Z",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "eligendi",
          currencyRate: 6230.66,
          totalAmount: 8582.27,
        },
        payment: {
          accountRef: {
            id: "4f2d8a44-640c-4a60-9b73-a2f93f467dc0",
            name: "Max Schuppe",
          },
          currency: "voluptas",
          currencyRate: 885.63,
          id: "22026ab8-f277-4485-8197-6af980da7a08",
          note: "unde",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "hic",
          totalAmount: 8024.26,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "numquam",
          currencyRate: 2838.48,
          totalAmount: 8519.16,
        },
        payment: {
          accountRef: {
            id: "b274530e-5cc7-4c6d-8cbc-fdcd334b6f62",
            name: "Whitney Schiller",
          },
          currency: "mollitia",
          currencyRate: 7064.71,
          id: "50aee5e0-da8b-49af-aad0-5486e7b413cb",
          note: "saepe",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "magni",
          totalAmount: 8253.89,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "et",
          currencyRate: 4767.65,
          totalAmount: 4100.45,
        },
        payment: {
          accountRef: {
            id: "dc1c43d4-0f61-4d17-9157-cbe5ee4f7211",
            name: "Miguel Adams",
          },
          currency: "quia",
          currencyRate: 9804.11,
          id: "32e3b49d-be0f-423b-bb6d-9948d6eded47",
          note: "odio",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "voluptas",
          totalAmount: 5378.51,
        },
      },
    ],
    salesOrderRefs: [
      "reiciendis",
    ],
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    status: InvoiceStatusEnum.Paid,
    subTotal: 4379.2,
    supplementalData: {
      content: {
        "ab": {
          "deserunt": "blanditiis",
          "dolores": "necessitatibus",
        },
        "nemo": {
          "totam": "eos",
          "delectus": "illum",
          "consequuntur": "praesentium",
          "fugiat": "beatae",
        },
        "perferendis": {
          "aperiam": "harum",
          "iusto": "debitis",
        },
      },
    },
    totalAmount: 5723.68,
    totalDiscount: 1083.49,
    totalTaxAmount: 1890.08,
    withholdingTax: [
      {
        amount: 1850.41,
        name: "Preston Gorczany",
      },
      {
        amount: 7102.56,
        name: "Lena Fisher Jr.",
      },
      {
        amount: 5027.38,
        name: "Miss Ray Hoeger",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 336692,
};

sdk.invoices.createInvoice(req).then((res: CreateInvoiceResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```