/* tslint:disable */
/* eslint-disable */

import type { CodatPlatform, CodatPlatformCore } from "../core";
import { APIPromise } from "../sdk/types/async";
import type { Result } from "../sdk/types/fp";
import { toResult } from "./_adapter";

type Call = CodatPlatform["cors"]["get"];

export function corsGet(
    client: CodatPlatformCore,
    request?: Record<string, never>,
    options?: Parameters<Call>[0],
): APIPromise<Result<Awaited<ReturnType<Call>>, Error>> {
    void request;
    return new APIPromise(toResult(() => client.cors.get(options)));
}
