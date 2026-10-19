/* tslint:disable */

import type { DataIntegrityDataType } from '../_internal_enums';
/* eslint-disable */

export interface GetDataIntegritySummariesRequest {
    companyId: string;
    dataType: DataIntegrityDataType;
    query?: string;
}
