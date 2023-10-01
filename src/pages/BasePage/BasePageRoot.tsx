import { Box } from "@mui/material";
import { BasePageRootProps } from "../../props";
import { BasePageRootOuterBoxStyle, BasePageRootInnerBoxStyle, BasePageRootContentStyle } from "../../styles";
import { SideBar, TopBar } from "../../components";

export function BasePageRoot({ children }: BasePageRootProps): JSX.Element {
    return (
        <Box
            sx={BasePageRootOuterBoxStyle}
        >
            <SideBar />
            <Box
                sx={BasePageRootInnerBoxStyle}
            >
                <TopBar />
                <Box
                    sx={BasePageRootContentStyle}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
}