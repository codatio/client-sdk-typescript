/* tslint:disable */

import type { DirectCostPrototype } from '../shared/directcostprototype';
/* eslint-disable */

export interface CreateDirectCostRequest {
    companyId: string;
    connectionId: string;
    timeoutInMinutes?: number;
    allowSyncOnPushComplete?: boolean;
    directCostPrototype?: DirectCostPrototype | undefined;
}
