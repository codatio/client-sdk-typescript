/* tslint:disable */

import type { DataType } from '../shared/datatype';
/* eslint-disable */

export interface RefreshDataTypeRequest {
    companyId: string;
    dataType: DataType;
    connectionId?: string;
}
