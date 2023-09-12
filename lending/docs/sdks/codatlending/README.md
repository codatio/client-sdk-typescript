# CodatLending SDK

## Overview

Lending API: Our Lending API helps you make smarter credit decisions on small businesses by enabling you to pull your customers' latest data from accounting, banking, and commerce platforms they are already using. It also includes features to help providers verify the accuracy of data and process it more efficiently.

The Lending API is built on top of the latest accounting, commerce, and banking data, providing you with the most important data points you need to get a full picture of SMB creditworthiness and make a comprehensive assessment of your customers.

[Explore product](https://docs.codat.io/lending/overview) | [See OpenAPI spec](https://github.com/codatio/oas)

---

## Endpoints

| Endpoints            | Description                                                                                                |
|:---------------------|:-----------------------------------------------------------------------------------------------------------|
| Companies            | Create and manage your SMB users' companies.                                                               |
| Connections          | Create new and manage existing data connections for a company.                                             |
| Company info         | View company profile from the source platform.                                                             |
| Accounts payable     | Data from a linked accounting platform representing money the business owes money to its suppliers.        |
| Accounts receivable  | Data from a linked accounting platform representing money owed to the business for sold goods or services. |
| Transactions         | Data from a linked accounting platform representing transactions.                                          |
| Financial statements | Financial data and reports from a linked accounting platform.                                              |
| Bank statements              | Retrieve banking data from linked bank accounts.                                                           |
| Sales                | Retrieve standardized sales data from a linked commerce platform.                                          |
| Liabilities          | Debt and other liabilities.                                                                                |
| Data integrity       | Match mutable accounting data with immutable banking data to increase confidence in financial data.        |
| Excel reports        | Download reports in Excel format.                                                                          |
| Categories           | Manage Codat's automatic account categorization functionality.                                             |
| Manage data          | Control how data is retrieved from an integration.                                                         |
| File upload          | Endpoints to manage uploaded files.                                                                        |

### Available Operations

* [getAccountingProfile](#getaccountingprofile) - Get company accounting profile

## getAccountingProfile

Gets the latest basic info for a company.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetAccountingProfileResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.codatLending.getAccountingProfile({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetAccountingProfileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetAccountingProfileRequest](../../models/operations/getaccountingprofilerequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetAccountingProfileResponse](../../models/operations/getaccountingprofileresponse.md)>**

