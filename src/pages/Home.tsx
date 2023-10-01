import { Button, Typography } from "@mui/material";
import { BasePage } from "./BasePage";

export function Home(): JSX.Element {
    return (
        <BasePage.Root>
            <BasePage.Breadcrumbs>
                <Typography>
                    Início
                </Typography>
            </BasePage.Breadcrumbs>
            
            <BasePage.Header>
                <BasePage.HeaderTitle>
                    <Typography
                        variant="h4"
                        fontSize="2rem"
                        fontWeight={700}
                    >
                        Início
                    </Typography>
                </BasePage.HeaderTitle>
            </BasePage.Header>
        </BasePage.Root>
    );
}