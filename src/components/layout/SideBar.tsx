import { Box, Typography } from "@mui/material";
import { SideBarMainBoxStyle } from "../../styles";

export function SideBar(): JSX.Element {
    return (
        <Box
            sx={SideBarMainBoxStyle}
        >
            <Typography>
                Sidebar
            </Typography>
        </Box>
    );
}