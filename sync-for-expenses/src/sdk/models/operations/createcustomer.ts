/* tslint:disable */

import type { Customer } from '../shared/customer';
/* eslint-disable */

export interface CreateCustomerRequest {
    companyId: string;
    connectionId: string;
    timeoutInMinutes?: number;
    allowSyncOnPushComplete?: boolean;
    customer?: Customer | undefined;
}
