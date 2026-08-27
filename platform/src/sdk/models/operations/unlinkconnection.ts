/* tslint:disable */

import type { UpdateConnectionStatus } from '../shared/updateconnectionstatus';
/* eslint-disable */

export interface UnlinkConnectionRequest {
    companyId: string;
    connectionId: string;
    updateConnectionStatus?: UpdateConnectionStatus | undefined;
}
