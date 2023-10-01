export type Page = {
    id: number;
    name: string;
    description: string;
    href: string;
    active: boolean;
    component: JSX.Element;
}