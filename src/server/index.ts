import Elysia, { t } from "elysia";

export const app = new Elysia({ prefix: "/api" }).get(
    "/",
    () => {
        return {
            message: "Hello world!",
        };
    },
    {
        response: {
            200: t.Object({
                message: t.String(),
            }),
        },
    }
);

export type App = typeof app;
