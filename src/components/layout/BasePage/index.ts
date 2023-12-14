import BasePageAlert from "./BasePageAlert";
import BasePageHeader from "./BasePageHeader";
import BasePageRoot from "./BasePageRoot";

type BasePageProps = {
  Root: typeof BasePageRoot,
  Alert: typeof BasePageAlert,
  Header: typeof BasePageHeader
}

export const BasePage: BasePageProps = {
  Root: BasePageRoot,
  Alert: BasePageAlert,
  Header: BasePageHeader
}