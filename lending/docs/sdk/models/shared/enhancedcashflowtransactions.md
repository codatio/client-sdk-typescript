# EnhancedCashFlowTransactions

> **Categorization engine**
>
> The categorization engine uses machine learning and has been fully trained against Plaid and TrueLayer banking data sources. It is not fully trained against the Basiq banking data source.

The Enhanced Cash Flow Transactions endpoint provides a fully categorized list of banking transactions for a company. Accounts and transaction data are obtained from the company's banking data sources.

## Example Usage

```typescript
import { EnhancedCashFlowTransactions } from "@codat/lending/sdk/models/shared";

let value: EnhancedCashFlowTransactions = {
  reportInfo: {
    pageNumber: 1,
    pageSize: 100,
    totalResults: 2401,
    reportName: "Cash Flow transactions report",
    companyName: "Example Company",
    generatedDate: "2023-01-25T22:36:05.125Z",
  },
  dataSources: [
    {
      accounts: [
        {
          sourceRef: {
            sourceType: "Banking",
          },
          platformName: "Plaid",
          accountProvider: "Bank of Sandbox",
          accountName: "Business Current Account",
          accountType: "Debit",
          currency: "USD",
          currentBalance: 1000,
          id: "4f78a6b0-e9bb-40f2-82fd-f3a2daa1fd0a",
          identifiers: [
            {
              type: "Debit",
              subType: "Current",
              number: 12345678,
              bankCode: 123456,
              iban: "US123456789",
              bic: "US123456789",
              maskedAccountNumber: 1234,
            },
          ],
        },
        {
          sourceRef: {
            sourceType: "Banking",
          },
          platformName: "Plaid",
          accountProvider: "Bank of Sandbox",
          accountName: "Business Saving Account",
          accountType: "Debit",
          currency: "USD",
          currentBalance: 5321,
          id: "12345678-1234-1234-1234-123456789012",
          identifiers: [
            {
              type: "Debit",
              subType: "Saving",
              number: 87654321,
              bankCode: 654321,
              iban: "US987654321",
              bic: "US987654321",
              maskedAccountNumber: 4321,
            },
          ],
        },
      ],
    },
  ],
  reportItems: [
    {
      transactions: [
        {
          sourceRef: {
            sourceType: "Banking",
          },
        },
        {
          id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          date: "2023-01-25",
          description: "Payment to supplier",
          amount: 100,
          currency: "USD",
          transactionCategory: {
            confidence: 92.7,
            confidences: [
              92.7,
              95,
              96,
            ],
            levels: [
              "Asset",
              "Current",
              "Bank",
            ],
          },
          platformName: "Plaid",
          counterpartyNames: [
            "Counterparty",
          ],
          accountRef: {
            id: "4f78a6b0-e9bb-40f2-82fd-f3a2daa1fd0a",
            name: "Business Current Account",
          },
          modifiedDate: "2023-01-25T22:36:05.125Z",
        },
        {
          sourceRef: {
            sourceType: "Banking",
          },
        },
        {
          id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          date: "2023-01-25",
          description: "Payment to supplier",
          amount: 100,
          currency: "USD",
          transactionCategory: "None",
          platformName: "Plaid",
          counterpartyNames: [],
          accountRef: {
            id: "12345678-1234-1234-1234-123456789012",
            name: "Business Saving Account",
          },
          modifiedDate: "2023-01-25T22:36:05.125Z",
          confidence: 92.7,
          levels: [
            "Expense",
            "Operating",
          ],
          confidences: [
            92.7,
            95,
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       | Example                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `reportInfo`                                                                                                                                                                      | [shared.ReportInfo](../../../sdk/models/shared/reportinfo.md)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                | Report additional information, which is specific to Lending reports.                                                                                                              | {<br/>"Example 1": {<br/>"value": {<br/>"pageNumber": 0,<br/>"pageSize": 0,<br/>"totalResults": 0,<br/>"reportName": "string",<br/>"companyName": "string",<br/>"generatedDate": "2023-01-26T07:36:40.487Z"<br/>}<br/>}<br/>} |
| `dataSources`                                                                                                                                                                     | [shared.DataSource](../../../sdk/models/shared/datasource.md)[]                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                | N/A                                                                                                                                                                               |                                                                                                                                                                                   |
| `reportItems`                                                                                                                                                                     | [shared.EnhancedCashFlowItem](../../../sdk/models/shared/enhancedcashflowitem.md)[]                                                                                               | :heavy_minus_sign:                                                                                                                                                                | N/A                                                                                                                                                                               |                                                                                                                                                                                   |