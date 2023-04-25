# createAccount
Available in: `accounts`

Creates a new account for a given company.

Required data may vary by integration. To see what data to post, first call [Get create account model](https://docs.codat.io/accounting-api#/operations/get-create-chartOfAccounts-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=chartOfAccounts) for integrations that support creating an account.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateAccountRequest, CreateAccountResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  AccountStatusEnum,
  AccountTypeEnum,
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

const req: CreateAccountRequest = {
  account: {
    currency: "quibusdam",
    currentBalance: 6027.63,
    description: "nulla",
    fullyQualifiedCategory: "corrupti",
    fullyQualifiedName: "illum",
    id: "69a674e0-f467-4cc8-b96e-d151a05dfc2d",
    isBankAccount: false,
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    name: "Emilio Krajcik",
    nominalCode: "esse",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    status: AccountStatusEnum.Archived,
    type: AccountTypeEnum.Liability,
    validDatatypeLinks: [
      {
        links: [
          "nam",
        ],
        property: "officia",
      },
      {
        links: [
          "fugit",
          "deleniti",
          "hic",
        ],
        property: "optio",
      },
      {
        links: [
          "beatae",
          "commodi",
          "molestiae",
        ],
        property: "modi",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 186332,
};

sdk.accounts.createAccount(req).then((res: CreateAccountResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```