/* tslint:disable */

import type { DataType } from '../DataType';
import type { SupplementalDataConfiguration } from '../shared/supplementaldataconfiguration';
/* eslint-disable */

export interface ConfigureSupplementalDataRequest {
    platformKey: string;
    dataType: DataType;
    supplementalDataConfiguration?: SupplementalDataConfiguration | undefined;
}
