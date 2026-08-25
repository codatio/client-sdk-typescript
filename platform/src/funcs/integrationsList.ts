/* tslint:disable */
/* eslint-disable */

import type { CodatPlatform, CodatPlatformCore } from "../core";
import { APIPromise } from "../sdk/types/async";
import type { Result } from "../sdk/types/fp";
import { toResult } from "./_adapter";

type Call = CodatPlatform["integrations"]["list"];

export function integrationsList(
    client: CodatPlatformCore,
    request?: Parameters<Call>[0],
    options?: Parameters<Call>[1],
): APIPromise<Result<Awaited<ReturnType<Call>>, Error>> {
    return new APIPromise(toResult(() => client.integrations.list(request, options)));
}
