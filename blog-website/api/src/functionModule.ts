import type { HttpFunctionOptions } from '@azure/functions';

export interface FunctionModule {
  name: string;
  options: HttpFunctionOptions;
}
