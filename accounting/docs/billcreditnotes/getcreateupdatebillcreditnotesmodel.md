# getCreateUpdateBillCreditNotesModel
Available in: `billCreditNotes`

Get create/update bill credit note model.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating and updating bill credit notes.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import {
  GetCreateUpdateBillCreditNotesModelRequest,
  GetCreateUpdateBillCreditNotesModelResponse,
} from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateUpdateBillCreditNotesModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.billCreditNotes.getCreateUpdateBillCreditNotesModel(req).then((res: GetCreateUpdateBillCreditNotesModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```