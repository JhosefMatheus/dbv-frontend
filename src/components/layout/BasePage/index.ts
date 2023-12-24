import BasePageBody from "./BasePageBody";
import BasePageHeader from "./BasePageHeader";
import BasePageRoot from "./BasePageRoot";
import BasePageSubHeader from "./BasePageSubHeader";

type BasePageProps = {
  Root: typeof BasePageRoot,
  Header: typeof BasePageHeader,
  SubHeader: typeof BasePageSubHeader,
  Body: typeof BasePageBody
}

export const BasePage: BasePageProps = {
  Root: BasePageRoot,
  Header: BasePageHeader,
  SubHeader: BasePageSubHeader,
  Body: BasePageBody
}