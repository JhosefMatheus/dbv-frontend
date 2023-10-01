import { Page } from "../types";
import { Home } from "./Home";

export * from "./auth";

export const pages: Page[] = [
    {
        id: 1,
        name: "Início",
        description: "Página inicial.",
        href: "/home",
        active: true,
        component: <Home />
    }
];