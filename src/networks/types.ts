export type HttpMethod = 'get' | 'post' | 'put' | 'delete';

export interface RequestParams {
  method: HttpMethod;
  url: string;
  queryParams?: Record<string, unknown>;
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  requestBody?: FormData | unknown | string;
  isMultipart?: boolean;
}

export interface Response<T> {
  dates: {
    maximum: number;
    minimum: number;
  };
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
