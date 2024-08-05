"use client";

import { api } from "$lib/eden";

export const HelloWorld = () => {
    const { data, error, isLoading } = api.index.get.useQuery({});

    if (error) return <main>Error</main>;
    if (isLoading) return <main>Loading...</main>;

    return <main>{data.message}</main>;
};
