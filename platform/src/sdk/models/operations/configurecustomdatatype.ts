/* tslint:disable */

import type { CustomDataTypeConfiguration } from '../shared/customdatatypeconfiguration';
/* eslint-disable */

export interface ConfigureCustomDataTypeRequest {
    platformKey: string;
    customDataIdentifier: string;
    customDataTypeConfiguration?: CustomDataTypeConfiguration | undefined;
}
