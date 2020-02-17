import { makeProvider } from '../../lib/provider-maker';

function useApi() {
  return {};
}

export const {
  Provider: ApiProvider,
  useProvider: useApiProvider,
} = makeProvider(useApi);
