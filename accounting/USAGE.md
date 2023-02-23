<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAccountTransactionRequest, GetAccountTransactionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetAccountTransactionRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    accountTransactionId: "unde",
    companyId: "deserunt",
    connectionId: "porro",
  },
};

sdk.accountTransactions.getAccountTransaction(req).then((res: GetAccountTransactionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->