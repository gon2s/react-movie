export type HttpMethod = 'get' | 'post' | 'put' | 'delete';

export interface RequestParams {
  method: HttpMethod;
  url: string;
  queryParams?: Record<string, unknown>;
  requestBody?: FormData | unknown | string;
  isMultipart?: boolean;
}
