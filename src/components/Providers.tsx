"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 10 * 1000,
            },
        },
    });

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
};
