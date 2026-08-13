/* tslint:disable */

import type { UnlinkConnectionUpdateConnection } from '../UpdateConnection';
/* eslint-disable */

export interface UnlinkConnectionRequest {
    companyId: string;
    connectionId: string;
    requestBody?: UnlinkConnectionUpdateConnection;
}
