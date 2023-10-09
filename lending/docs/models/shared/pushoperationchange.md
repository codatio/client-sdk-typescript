# PushOperationChange


## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `attachmentId`                                                  | *string*                                                        | :heavy_minus_sign:                                              | Unique identifier for the attachment created otherwise null.    |
| `recordRef`                                                     | Record<string, *any*>                                           | :heavy_minus_sign:                                              | N/A                                                             |
| `type`                                                          | [PushChangeType](../../models/shared/pushchangetype.md)         | :heavy_minus_sign:                                              | Type of change being applied to record in third party platform. |