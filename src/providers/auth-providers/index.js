import { makeProvider } from '../../lib/provider-maker';

function useAuth() {
  return {};
}

export const {
  Provider: AuthProvider,
  useProvider: useAuthProvider,
} = makeProvider(useAuth);
