# EnhancedCashFlowTransactions

> **Categorization engine**
>
> The categorization engine uses machine learning and has been fully trained against Plaid and TrueLayer banking data sources. It is not fully trained against the Basiq banking data source.

The Enhanced Cash Flow Transactions endpoint provides a fully categorized list of banking transactions for a company. Accounts and transaction data are obtained from the company's banking data sources.


## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `dataSources`                                                                       | [shared.DataSource](../../../sdk/models/shared/datasource.md)[]                     | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `reportInfo`                                                                        | [shared.ReportInfo](../../../sdk/models/shared/reportinfo.md)                       | :heavy_minus_sign:                                                                  | Report additional information, which is specific to Lending API reports.            |
| `reportItems`                                                                       | [shared.EnhancedCashFlowItem](../../../sdk/models/shared/enhancedcashflowitem.md)[] | :heavy_minus_sign:                                                                  | N/A                                                                                 |