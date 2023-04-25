# createBankAccount
Available in: `bankAccounts`

Posts a new bank account to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call []().

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts) for integrations that support creating bank accounts.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBankAccountRequest, CreateBankAccountResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  AccountStatusEnum,
  AccountTypeEnum,
  BankAccountBankAccountTypeEnum,
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

const req: CreateBankAccountRequest = {
  bankAccount: {
    accountName: "nihil",
    accountNumber: "praesentium",
    accountType: BankAccountBankAccountTypeEnum.Debit,
    availableBalance: 557.14,
    balance: 6048.46,
    currency: "voluptate",
    iBan: "cum",
    id: "0074f154-71b5-4e6e-93b9-9d488e1e91e4",
    institution: "enim",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    nominalCode: "consequatur",
    overdraftLimit: 6674.11,
    sortCode: "quibusdam",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
  },
  allowSyncOnPushComplete: false,
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 131797,
};

sdk.bankAccounts.createBankAccount(req).then((res: CreateBankAccountResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```