import { Box } from "@mui/material";
import { BasePageHeaderActionsProps } from "../../props";
import { BasePageHeaderActionsStyle } from "../../styles";

export function BasePageHeaderActions({ children }: BasePageHeaderActionsProps): JSX.Element {
    return (
        <Box
            sx={BasePageHeaderActionsStyle}
        >
            {children}
        </Box>
    );
}