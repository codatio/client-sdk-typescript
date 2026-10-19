/* tslint:disable */

import type { SchemaDataType } from '../_internal_enums';
import type { DataType } from '../DataType';
/* eslint-disable */

export interface RefreshDataTypeRequest {
    companyId: string;
    dataType: SchemaDataType;
    connectionId?: string;
}
