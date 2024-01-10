# ConfigurationSchedule


## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `frequencyOptions`                                        | *string*[]                                                | :heavy_minus_sign:                                        | The available sync frequencies.                           |
| `selectedFrequency`                                       | *string*                                                  | :heavy_minus_sign:                                        | The sync frequency.                                       |
| `startDate`                                               | *string*                                                  | :heavy_minus_sign:                                        | The datetime in UTC you want to start syncing from.       |
| `syncHourUtc`                                             | *number*                                                  | :heavy_minus_sign:                                        | The hour in which the sync is initiated.                  |
| `timeZoneIanaId`                                          | *string*                                                  | :heavy_minus_sign:                                        | The [IANA](https://www.iana.org/time-zones) time zone ID. |