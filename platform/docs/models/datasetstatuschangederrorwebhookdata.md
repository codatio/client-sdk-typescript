# DatasetStatusChangedErrorWebhookData


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `dataType`                                                 | [models.PropertieDataType](../models/propertiedatatype.md) | :heavy_minus_sign:                                         | Available data types                                       | invoices                                                   |
| `datasetStatus`                                            | *string*                                                   | :heavy_minus_sign:                                         | The current status of the dataset's sync.                  |                                                            |
| `datasetId`                                                | *string*                                                   | :heavy_minus_sign:                                         | Unique identifier for the dataset that completed its sync. |                                                            |