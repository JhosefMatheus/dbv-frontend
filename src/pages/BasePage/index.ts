import { BasePageBody } from "./BasePageBody";
import { BasePageBreadCrumbs } from "./BasePageBreadcrumbs";
import { BasePageFooter } from "./BasePageFooter";
import { BasePageHeader } from "./BasePageHeader";
import { BasePageHeaderActions } from "./BasePageHeaderActions";
import { BasePageHeaderTitle } from "./BasePageHeaderTitle";
import { BasePageRoot } from "./Root";

export const BasePage = {
    Root: BasePageRoot,
    Breadcrumbs: BasePageBreadCrumbs,
    Header: BasePageHeader,
    HeaderTitle: BasePageHeaderTitle,
    HeaderActions: BasePageHeaderActions,
    Body: BasePageBody,
    Footer: BasePageFooter
}