import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Data remains fresh for 5 minutes
      gcTime: 1000 * 60 * 10,   // Cache garbage collected after 10 minutes (formerly cacheTime)
      refetchOnWindowFocus: false, // Don't spam refetches when switching browser tabs
      retry: 1,                 // Retry failed requests once before throwing error
    },
  },
});