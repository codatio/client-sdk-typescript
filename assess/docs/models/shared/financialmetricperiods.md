# FinancialMetricPeriods


## Fields

| Field                                                                                                                                                                                           | Type                                                                                                                                                                                            | Required                                                                                                                                                                                        | Description                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `errors`                                                                                                                                                                                        | [FinancialMetricPeriodsErrors](../../models/shared/financialmetricperiodserrors.md)[]                                                                                                           | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `fromDate`                                                                                                                                                                                      | [RFCDate](../../types/rfcdate.md)                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                              | The date from which the report starts.                                                                                                                                                          |
| `inputs`                                                                                                                                                                                        | [FinancialMetricPeriodsInputs](../../models/shared/financialmetricperiodsinputs.md)[]                                                                                                           | :heavy_minus_sign:                                                                                                                                                                              | N/A                                                                                                                                                                                             |
| `toDate`                                                                                                                                                                                        | [RFCDate](../../types/rfcdate.md)                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                              | The date on which the report ends (inclusive of day).                                                                                                                                           |
| `value`                                                                                                                                                                                         | *number*                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                              | The top level metric value that is calculated for the specified period. <br/><br/>If the system cannot calculate for that period, the value will be null. The system will still show the metric inputs. |