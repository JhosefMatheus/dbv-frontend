import { Box } from "@mui/material";
import { BasePageHeaderProps } from "../../props";
import { BasePageHeaderStyle } from "../../styles";

export function BasePageHeader({ children }: BasePageHeaderProps): JSX.Element {
    return (
        <Box
            sx={BasePageHeaderStyle}
        >
            {children}
        </Box>
    );
}