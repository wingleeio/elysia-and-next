import { HelloWorld } from "$components/HelloWorld";
import { HydrationBoundary } from "@tanstack/react-query";
import { createServerHelper } from "eden-react-query/server";
import { eden } from "$lib/eden";

export default async function Home() {
    const api = createServerHelper(eden);
    await api.index.get.prefetch();
    return (
        <HydrationBoundary state={api.dehydrate()}>
            <HelloWorld />
        </HydrationBoundary>
    );
}
