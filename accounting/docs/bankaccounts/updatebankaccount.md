# updateBankAccount
Available in: `bankAccounts`

Posts an updated bank account to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call []().

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankAccounts) for integrations that support updating bank accounts.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateBankAccountRequest, UpdateBankAccountResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
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

const req: UpdateBankAccountRequest = {
  bankAccount: {
    accountName: "quibusdam",
    accountNumber: "labore",
    accountType: BankAccountBankAccountTypeEnum.Unknown,
    availableBalance: 1831.91,
    balance: 3978.21,
    currency: "cupiditate",
    iBan: "quos",
    id: "02d502a9-4bb4-4f63-8969-e9a3efa77dfb",
    institution: "dicta",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    nominalCode: "magnam",
    overdraftLimit: 7670.24,
    sortCode: "facere",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
  },
  bankAccountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 411820,
};

sdk.bankAccounts.updateBankAccount(req).then((res: UpdateBankAccountResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```