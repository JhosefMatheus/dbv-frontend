import { Box } from "@mui/material";
import { BasePageFooterProps } from "../../props/pages/BasePage/BasePageFooter.props";

export function BasePageFooter({ children }: BasePageFooterProps): JSX.Element {
    return (
        <Box>
            {children}
        </Box>
    );
}