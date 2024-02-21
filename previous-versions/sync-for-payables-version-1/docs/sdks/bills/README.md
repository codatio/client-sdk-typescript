# Bills
(*bills*)

## Overview

Bills

### Available Operations

* [list](#list) - List bills

## list

The *List bills* endpoint returns a list of [bills](https://docs.codat.io/sync-for-payables-api#/schemas/Bill) for a given company's connection.

By default, the endpoint will return all bills irrespective of payment status. To filter outstanding bills use the `outstandingBills=true` query parameter to return all unpaid and partially paid bills. 

[Bills](https://docs.codat.io/sync-for-payables-api#/schemas/Bill) are invoices that represent the SMB's financial obligations to their supplier for a purchase of goods or services.
    

### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { BillStatus } from "@codat/sync-for-payables/dist/sdk/models/shared";

async function run() {
  const sdk = new CodatSyncPayables({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.bills.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    page: 1,
    pageSize: 100,
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    status: [
      BillStatus.Open,
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListBillsRequest](../../sdk/models/operations/listbillsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `retries`                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                       | :heavy_minus_sign:                                                             | Configuration to override the default retry behavior of the client.            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListBillsResponse](../../sdk/models/operations/listbillsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
