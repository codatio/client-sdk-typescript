/* tslint:disable */

import type { CompanyConfiguration } from '../shared/companyconfiguration';
/* eslint-disable */

export interface SetCompanyConfigurationRequest {
    companyId: string;
    companyConfiguration?: CompanyConfiguration | undefined;
}
