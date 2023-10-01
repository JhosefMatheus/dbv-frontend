import { Box } from "@mui/material";
import { BasePageBodyProps } from "../../props";

export function BasePageBody({ children }: BasePageBodyProps): JSX.Element {
    return (
        <Box>
            {children}
        </Box>
    );
    
}