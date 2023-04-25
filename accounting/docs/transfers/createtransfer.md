# createTransfer
Available in: `transfers`

Posts a new transfer to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create transfer model](https://docs.codat.io/accounting-api#/operations/get-create-transfers-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=transfers) for integrations that support creating transfers.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateTransferRequest, CreateTransferResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateTransferRequest = {
  transfer: {
    contactRef: {
      dataType: "quae",
      id: "8b38f1b6-1a33-41a5-8dc1-0294f92fed93",
    },
    date: "2022-10-23T00:00:00Z",
    depositedRecordRefs: [
      "expedita",
      "mollitia",
      "quas",
    ],
    description: "asperiores",
    from: {
      accountRef: {
        id: "71e2992c-20ee-4122-8ac3-adc647d240bc",
        name: "Pamela Watsica",
      },
      amount: 5375.31,
      currency: "explicabo",
    },
    id: "824ccc6a-2f0f-45b9-93cb-11a7687d3100",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    supplementalData: {
      content: {
        "deleniti": {
          "sed": "cum",
          "sint": "soluta",
          "voluptatem": "repellendus",
          "dignissimos": "quaerat",
        },
        "nisi": {
          "quia": "dolorum",
          "nihil": "quisquam",
          "molestiae": "fugiat",
          "ab": "debitis",
        },
        "dolorum": {
          "voluptates": "quam",
        },
        "iste": {
          "similique": "sint",
          "nobis": "distinctio",
          "earum": "veniam",
          "maiores": "et",
        },
      },
    },
    to: {
      accountRef: {
        id: "79f650b1-e707-4e7e-8396-713bacce072a",
        name: "Ms. Taylor Jacobson IV",
      },
      amount: 8177.85,
      currency: "magni",
    },
    trackingCategoryRefs: [
      {
        id: "9c10c185-16fd-478b-a262-1272628fa503",
        name: "Chester Cole",
      },
      {
        id: "7e72b3a6-5024-4b15-bf9b-b6ef72a50871",
        name: "Wade Medhurst",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.transfers.createTransfer(req).then((res: CreateTransferResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```