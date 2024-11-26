/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import { Result } from "../sdk/types/fp.js";
import { matchResponse, matchStatusCode, StatusCodePredicate } from "./http.js";
import { isPlainObject } from "./is-plain-object.js";
import { safeParse } from "./schemas.js";

export type Encoding =
  | "json"
  | "text"
  | "bytes"
  | "stream"
  | "sse"
  | "nil"
  | "fail";

const DEFAULT_CONTENT_TYPES: Record<Encoding, string> = {
  json: "application/json",
  text: "text/plain",
  bytes: "application/octet-stream",
  stream: "application/octet-stream",
  sse: "text/event-stream",
  nil: "*",
  fail: "*",
};

type Schema<T> = { parse(raw: unknown): T };

type MatchOptions = {
  ctype?: string;
  hdrs?: boolean;
  key?: string;
  sseSentinel?: string;
};

export type ValueMatcher<V> = MatchOptions & {
  enc: Encoding;
  codes: StatusCodePredicate;
  schema: Schema<V>;
};

export type ErrorMatcher<E> = MatchOptions & {
  enc: Encoding;
  codes: StatusCodePredicate;
  schema: Schema<E>;
  err: true;
};

export type FailMatcher = {
  enc: "fail";
  codes: StatusCodePredicate;
};

export type Matcher<T, E> = ValueMatcher<T> | ErrorMatcher<E> | FailMatcher;

export function jsonErr<E>(
  codes: StatusCodePredicate,
  schema: Schema<E>,
  options?: MatchOptions,
): ErrorMatcher<E> {
  return { ...options, err: true, enc: "json", codes, schema };
}
export function json<T>(
  codes: StatusCodePredicate,
  schema: Schema<T>,
  options?: MatchOptions,
): ValueMatcher<T> {
  return { ...options, enc: "json", codes, schema };
}

export function textErr<E>(
  codes: StatusCodePredicate,
  schema: Schema<E>,
  options?: MatchOptions,
): ErrorMatcher<E> {
  return { ...options, err: true, enc: "text", codes, schema };
}
export function text<T>(
  codes: StatusCodePredicate,
  schema: Schema<T>,
  options?: MatchOptions,
): ValueMatcher<T> {
  return { ...options, enc: "text", codes, schema };
}

export function bytesErr<E>(
  codes: StatusCodePredicate,
  schema: Schema<E>,
  options?: MatchOptions,
): ErrorMatcher<E> {
  return { ...options, err: true, enc: "bytes", codes, schema };
}
export function bytes<T>(
  codes: StatusCodePredicate,
  schema: Schema<T>,
  options?: MatchOptions,
): ValueMatcher<T> {
  return { ...options, enc: "bytes", codes, schema };
}

export function streamErr<E>(
  codes: StatusCodePredicate,
  schema: Schema<E>,
  options?: MatchOptions,
): ErrorMatcher<E> {
  return { ...options, err: true, enc: "stream", codes, schema };
}
export function stream<T>(
  codes: StatusCodePredicate,
  schema: Schema<T>,
  options?: MatchOptions,
): ValueMatcher<T> {
  return { ...options, enc: "stream", codes, schema };
}

export function sseErr<E>(
  codes: StatusCodePredicate,
  schema: Schema<E>,
  options?: MatchOptions,
): ErrorMatcher<E> {
  return { ...options, err: true, enc: "sse", codes, schema };
}
export function sse<T>(
  codes: StatusCodePredicate,
  schema: Schema<T>,
  options?: MatchOptions,
): ValueMatcher<T> {
  return { ...options, enc: "sse", codes, schema };
}

export function nilErr<E>(
  codes: StatusCodePredicate,
  schema: Schema<E>,
  options?: MatchOptions,
): ErrorMatcher<E> {
  return { ...options, err: true, enc: "nil", codes, schema };
}
export function nil<T>(
  codes: StatusCodePredicate,
  schema: Schema<T>,
  options?: MatchOptions,
): ValueMatcher<T> {
  return { ...options, enc: "nil", codes, schema };
}

export function fail(codes: StatusCodePredicate): FailMatcher {
  return { enc: "fail", codes };
}

export type MatchedValue<Matchers> = Matchers extends Matcher<infer T, any>[]
  ? T
  : never;
export type MatchedError<Matchers> = Matchers extends Matcher<any, infer E>[]
  ? E
  : never;
export type MatchFunc<T, E> = (
  response: Response,
  options?: { resultKey?: string; extraFields?: Record<string, unknown> },
) => Promise<[result: Result<T, E>, raw: unknown]>;

export function match<T, E>(
  ...matchers: Array<Matcher<T, E>>
): MatchFunc<T, E | SDKError | SDKValidationError> {
  return async function matchFunc(
    response: Response,
    options?: { resultKey?: string; extraFields?: Record<string, unknown> },
  ): Promise<
    [result: Result<T, E | SDKError | SDKValidationError>, raw: unknown]
  > {
    let raw: unknown;
    let matcher: Matcher<T, E> | undefined;
    for (const match of matchers) {
      const { codes } = match;
      const ctpattern = "ctype" in match
        ? match.ctype
        : DEFAULT_CONTENT_TYPES[match.enc];
      if (ctpattern && matchResponse(response, codes, ctpattern)) {
        matcher = match;
        break;
      } else if (!ctpattern && matchStatusCode(response, codes)) {
        matcher = match;
        break;
      }
    }

    if (!matcher) {
      const responseBody = await response.text();
      return [{
        ok: false,
        error: new SDKError(
          "Unexpected API response status or content-type",
          response,
          responseBody,
        ),
      }, responseBody];
    }

    const encoding = matcher.enc;
    switch (encoding) {
      case "json":
        raw = await response.json();
        break;
      case "bytes":
        raw = new Uint8Array(await response.arrayBuffer());
        break;
      case "stream":
        raw = response.body;
        break;
      case "text":
        raw = await response.text();
        break;
      case "sse":
        raw = response.body;
        break;
      case "nil":
        raw = await discardResponseBody(response);
        break;
      case "fail":
        raw = await response.text();
        break;
      default:
        encoding satisfies never;
        throw new Error(`Unsupported response type: ${encoding}`);
    }

    if (matcher.enc === "fail") {
      return [{
        ok: false,
        error: new SDKError(
          "API error occurred",
          response,
          typeof raw === "string" ? raw : "",
        ),
      }, raw];
    }

    const resultKey = matcher.key || options?.resultKey;
    let data: unknown;

    if ("err" in matcher) {
      data = {
        ...options?.extraFields,
        ...(matcher.hdrs ? { Headers: unpackHeaders(response.headers) } : null),
        ...(isPlainObject(raw) ? raw : null),
      };
    } else if (resultKey) {
      data = {
        ...options?.extraFields,
        ...(matcher.hdrs ? { Headers: unpackHeaders(response.headers) } : null),
        [resultKey]: raw,
      };
    } else if (matcher.hdrs) {
      data = {
        ...options?.extraFields,
        ...(matcher.hdrs ? { Headers: unpackHeaders(response.headers) } : null),
        ...(isPlainObject(raw) ? raw : null),
      };
    } else {
      data = raw;
    }

    if ("err" in matcher) {
      const result = safeParse(
        data,
        (v: unknown) => matcher.schema.parse(v),
        "Response validation failed",
      );
      return [result.ok ? { ok: false, error: result.value } : result, raw];
    } else {
      return [
        safeParse(
          data,
          (v: unknown) => matcher.schema.parse(v),
          "Response validation failed",
        ),
        raw,
      ];
    }
  };
}

const headerValRE = /, */;
/**
 * Iterates over a Headers object and returns an object with all the header
 * entries. Values are represented as an array to account for repeated headers.
 */
export function unpackHeaders(headers: Headers): Record<string, string[]> {
  const out: Record<string, string[]> = {};

  for (const [k, v] of headers.entries()) {
    out[k] = v.split(headerValRE);
  }

  return out;
}

/**
 * Discards the response body to free up resources.
 *
 * To learn why this is need, see the undici docs:
 * https://undici.nodejs.org/#/?id=garbage-collection
 */
export async function discardResponseBody(res: Response) {
  const reader = res.body?.getReader();
  if (reader == null) {
    return;
  }

  try {
    let done = false;
    while (!done) {
      const res = await reader.read();
      done = res.done;
    }
  } finally {
    reader.releaseLock();
  }
}
