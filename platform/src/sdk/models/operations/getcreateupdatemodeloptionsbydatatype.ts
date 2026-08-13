/* tslint:disable */

import type { SchemaDataType } from '../_speakeasy_enums';
import type { DataType } from '../DataType';
/* eslint-disable */

export interface GetCreateUpdateModelOptionsByDataTypeRequest {
    companyId: string;
    connectionId: string;
    dataType: SchemaDataType;
}
