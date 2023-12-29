import BasePageBody from "./BasePageBody";
import BasePageBreadcrumbs from "./BasePageBreadcrumbs";
import BasePageHeader from "./BasePageHeader";
import BasePageRoot from "./BasePageRoot";
import BasePageSubHeader from "./BasePageSubHeader";

type BasePageProps = {
  Root: typeof BasePageRoot,
  Header: typeof BasePageHeader,
  SubHeader: typeof BasePageSubHeader,
  Body: typeof BasePageBody,
  Breadcrumbs: typeof BasePageBreadcrumbs
}

export const BasePage: BasePageProps = {
  Root: BasePageRoot,
  Header: BasePageHeader,
  SubHeader: BasePageSubHeader,
  Body: BasePageBody,
  Breadcrumbs: BasePageBreadcrumbs
}