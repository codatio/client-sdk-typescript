/* tslint:disable */

import type { DataIntegrityDataType } from '../_internal_enums';
/* eslint-disable */

export interface ListDataIntegrityDetailsRequest {
    companyId: string;
    dataType: DataIntegrityDataType;
    page?: number;
    pageSize?: number;
    query?: string;
    orderBy?: string;
}
