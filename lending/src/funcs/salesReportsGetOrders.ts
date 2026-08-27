/* tslint:disable */
/* eslint-disable */

import type { CodatLending, CodatLendingCore } from "../core";
import { APIPromise } from "../sdk/types/async";
import type { Result } from "../sdk/types/fp";
import { toResult } from "./_adapter";

type Call = CodatLending["sales"]["reports"]["getOrders"];

export function salesReportsGetOrders(
    client: CodatLendingCore,
    request: Parameters<Call>[0],
    options?: Parameters<Call>[1],
): APIPromise<Result<Awaited<ReturnType<Call>>, Error>> {
    return new APIPromise(toResult(() => client.sales.reports.getOrders(request, options)));
}
