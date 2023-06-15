# Tracking


## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `invoiceTo`                                                                                                              | [TrackingRecordReference](../../models/shared/trackingrecordreference.md)                                                | :heavy_minus_sign:                                                                                                       | Links to the underlying record or data type.<br/><br/>Found on:<br/><br/>- Journal entries<br/>- Account transactions<br/>- Invoices<br/>- Transfers |
| `recordRefs`                                                                                                             | [InvoiceTo](../../models/shared/invoiceto.md)[]                                                                          | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |