# accountsPayableBillCreditNotes

### Available Operations

* [get](#get) - Get bill credit note
* [list](#list) - List bill credit notes

## get

The *Get bill credit note* endpoint returns a single bill credit note for a given billCreditNoteId.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support getting a specific bill credit note.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetAccountingBillCreditNoteResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountsPayableBillCreditNotes.get({
  billCreditNoteId: "placeat",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetAccountingBillCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetAccountingBillCreditNoteRequest](../../models/operations/getaccountingbillcreditnoterequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `retries`                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                             | Configuration to override the default retry behavior of the client.                                            |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetAccountingBillCreditNoteResponse](../../models/operations/getaccountingbillcreditnoteresponse.md)>**


## list

The *List bill credit notes* endpoint returns a list of [bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { ListAccountingBillCreditNotesResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountsPayableBillCreditNotes.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "voluptatum",
}).then((res: ListAccountingBillCreditNotesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.ListAccountingBillCreditNotesRequest](../../models/operations/listaccountingbillcreditnotesrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `retries`                                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                             | :heavy_minus_sign:                                                                                                 | Configuration to override the default retry behavior of the client.                                                |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.ListAccountingBillCreditNotesResponse](../../models/operations/listaccountingbillcreditnotesresponse.md)>**

