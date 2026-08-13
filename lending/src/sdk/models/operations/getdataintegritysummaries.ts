/* tslint:disable */

import type { DataIntegrityDataType } from '../_speakeasy_enums';
/* eslint-disable */

export interface GetDataIntegritySummariesRequest {
    companyId: string;
    dataType: DataIntegrityDataType;
    query?: string;
}
