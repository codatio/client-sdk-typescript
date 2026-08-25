/* tslint:disable */

import type { Customer } from '../shared/customer';
/* eslint-disable */

export interface UpdateCustomerRequest {
    companyId: string;
    connectionId: string;
    customerId: string;
    timeoutInMinutes?: number;
    allowSyncOnPushComplete?: boolean;
    forceUpdate?: boolean;
    customer?: Customer | undefined;
}
