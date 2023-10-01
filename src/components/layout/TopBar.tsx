import { Box, IconButton } from "@mui/material";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { TopBarMainBoxStyle } from "../../styles";

export function TopBar(): JSX.Element {
    return (
        <Box
            sx={TopBarMainBoxStyle}
        >
            <IconButton>
                <MenuIcon
                    fontSize="large"
                />
            </IconButton>

            <IconButton>
                <AccountCircleIcon
                    fontSize="large"
                />
            </IconButton>
        </Box>
    );
}