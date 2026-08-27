/* tslint:disable */
/* eslint-disable */

import type { CodatPlatform, CodatPlatformCore } from "../core";
import { APIPromise } from "../sdk/types/async";
import type { Result } from "../sdk/types/fp";
import { toResult } from "./_adapter";

type Call = CodatPlatform["refreshData"]["byDataType"];

export function refreshDataByDataType(
    client: CodatPlatformCore,
    request: Parameters<Call>[0],
    options?: Parameters<Call>[1],
): APIPromise<Result<Awaited<ReturnType<Call>>, Error>> {
    return new APIPromise(toResult(() => client.refreshData.byDataType(request, options)));
}
