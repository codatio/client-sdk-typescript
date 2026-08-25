/* tslint:disable */

import type { AccountPrototype } from '../shared/accountprototype';
/* eslint-disable */

export interface CreateAccountRequest {
    companyId: string;
    connectionId: string;
    timeoutInMinutes?: number;
    allowSyncOnPushComplete?: boolean;
    accountPrototype?: AccountPrototype | undefined;
}
