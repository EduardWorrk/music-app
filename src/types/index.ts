export type Nullable<T> = T | null;
export type Maybe<T> = T | null | undefined;

export type Action<T extends any[] = []> = (...args: T) => void;

export type MutationLifecycle<T = any> = {
  onSuccess?: Action<[response?: T]>;
  onError?: Action<[message: Maybe<string>]>;
};

export type Response<T> = {
  header: {
    status: string;
    code: number;
    error_message: string;
    warnings: string;
    results_count: number;
  };
  results: T;
};

export type ResponseError = {
  response: {
    data: {
      error: string;
    };
  };
};
