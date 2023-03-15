import { AxiosError, AxiosResponse } from "axios";

export class BackoffStrategy {
  initialInterval: number;
  maxInterval: number;
  exponent: number;
  maxElapsedTime: number;

  constructor(
    initialInterval: number,
    maxInterval: number,
    exponent: number,
    maxElapsedTime: number
  ) {
    this.initialInterval = initialInterval;
    this.maxInterval = maxInterval;
    this.exponent = exponent;
    this.maxElapsedTime = maxElapsedTime;
  }
}

export class RetryConfig {
  strategy: string;
  backoff?: BackoffStrategy;
  retryConnectionErrors: boolean;

  constructor(strategy: string, retryConnectionErrors: boolean = true) {
    this.strategy = strategy;
    this.retryConnectionErrors = retryConnectionErrors;
  }
}

export class Retries {
  config: RetryConfig;
  statusCodes: string[];

  constructor(config: RetryConfig, statusCodes: string[]) {
    this.config = config;
    this.statusCodes = statusCodes;
  }
}

class PermanentError extends Error {
  inner: unknown;

  constructor(inner: unknown) {
    super("Permanent error");
    this.inner = inner;
  }
}

class TemporaryError extends Error {
  res: AxiosResponse<any, any>;

  constructor(res: AxiosResponse<any, any>) {
    super("Temporary error");
    this.res = res;
  }
}

export async function Retry(
  fn: () => Promise<AxiosResponse<any, any>>,
  retries: Retries
): Promise<AxiosResponse<any, any>> {
  switch (retries.config.strategy) {
    case "backoff":
      return retryBackoff(
        async () => {
          try {
            const res = await fn();
            if (isRetryableResponse(res, retries.statusCodes)) {
              throw new TemporaryError(res);
            }

            return res;
          } catch (err) {
            if (err instanceof AxiosError) {
              if (err.response) {
                if (isRetryableResponse(err.response, retries.statusCodes)) {
                  throw err;
                }
                throw new PermanentError(err);
              } else if (err.request) {
                throw err;
              } else {
                throw new PermanentError(err);
              }
            } else if (err instanceof TemporaryError) {
              throw err;
            }
            throw new PermanentError(err);
          }
        },
        retries.config.backoff?.initialInterval ?? 500,
        retries.config.backoff?.maxInterval ?? 60000,
        retries.config.backoff?.exponent ?? 1.5,
        retries.config.backoff?.maxElapsedTime ?? 3600000
      );
    default:
      return await fn();
  }
}

function isRetryableResponse(
  res: AxiosResponse<any, any>,
  statusCodes: string[]
): boolean {
  for (const code of statusCodes) {
    if (code.toUpperCase().includes("X")) {
      const codeRange = parseInt(code[0]);
      if (isNaN(codeRange)) {
        throw new Error("Invalid status code range");
      }

      const s = res.status / 100;

      if (s >= codeRange && s < codeRange + 1) {
        return true;
      }
    } else if (res.status == parseInt(code)) {
      return true;
    }
  }

  return false;
}

async function retryBackoff(
  fn: () => Promise<AxiosResponse<any, any>>,
  initialInterval: number,
  maxInterval: number,
  exponent: number,
  maxElapsedTime: number
): Promise<AxiosResponse<any, any>> {
  const start = Date.now();
  let x = 0;

  while (true) {
    try {
      return await fn();
    } catch (err) {
      if (err instanceof PermanentError) {
        throw err.inner;
      }

      const now = Date.now();
      if (now - start > maxElapsedTime) {
        if (err instanceof TemporaryError) {
          return err.res;
        }

        throw err;
      }

      const d = Math.min(
        initialInterval * Math.pow(x, exponent) + Math.random() * 1000,
        maxInterval
      );

      await delay(d);
      x++;
    }
  }
}

async function delay(delay: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
