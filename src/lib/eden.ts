import { App, app } from "$server";

import { pact } from "eden-react-query";
import { treaty } from "@elysiajs/eden";

export const { api: eden } = treaty<App>(typeof window === "undefined" ? app : window.location.origin);

export const api = pact(eden);
