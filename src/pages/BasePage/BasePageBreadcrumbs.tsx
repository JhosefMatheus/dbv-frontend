import { Breadcrumbs } from "@mui/material";
import { BasePageBreadcrumbsProps } from "../../props";

export function BasePageBreadCrumbs({ children }: BasePageBreadcrumbsProps): JSX.Element {
    return (
        <Breadcrumbs>
            {children}
        </Breadcrumbs>
    );
}