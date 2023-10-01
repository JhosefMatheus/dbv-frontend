import { Box } from "@mui/material";
import { BasePageRootProps } from "../../props";
import { BasePageRootStyle } from "../../styles";

export function BasePageRoot({ children }: BasePageRootProps): JSX.Element {
    return (
        <Box
            sx={BasePageRootStyle}
        >
            {children}
        </Box>
    );
}