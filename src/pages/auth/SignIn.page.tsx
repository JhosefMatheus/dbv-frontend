import {
    Alert,
    Button,
    CircularProgress,
    Container,
    Grow,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";

import {
    MainContainer,
    LoginTextField,
    PasswordTextField,
    SubmitButton,
    AlertStyle
} from "../../styles";

import {
    useState
} from "react";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { UserModel } from "../../models";
import { SignInResponse } from "../../responses";
import { EmptyFieldException } from "../../exceptions";
import { SeverityWarningEnum } from "../../enums";

export function SignIn(): JSX.Element {
    const [alertOpen, setAlertOpen] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [alertSeverity, setAlertSeverity] = useState<SeverityWarningEnum>(SeverityWarningEnum.INFO);

    const [login, setLogin] = useState<string>("");
    const [validLogin, setValidLogin] = useState<boolean>(true);

    const [password, setPassword] = useState<string>("");
    const [validPassword, setValidPassword] = useState<boolean>(true);
    const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

    const [loadSignIn, setLoadSignIn] = useState<boolean>(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        try {
            e.preventDefault();

            setLoadSignIn(true);

            const user: UserModel = new UserModel({ login, password });

            const signInResponse: SignInResponse = await user.signIn();

            setAlertMessage(signInResponse.message);
            setAlertSeverity(signInResponse.severityWarning);
            setAlertOpen(true);
        } catch (error: any) {
            if (error instanceof EmptyFieldException) {
                !login && setValidLogin(false);
                !password && setValidPassword(false);

                setAlertMessage(error.message);
                setAlertSeverity(error.SeverityWarning);
                setAlertOpen(true);
            } else {
                setAlertMessage(error.message);
                setAlertSeverity(error.SeverityWarning || SeverityWarningEnum.ERROR);
                setAlertOpen(true);
            }
        } finally {
            setLoadSignIn(false);
        }
    }

    return (
        <Container
            sx={MainContainer}
        >
            <form
                style={{
                    width: "50%"
                }}
                onSubmit={handleSubmit}
            >
                <Grow
                    in={alertOpen}
                    mountOnEnter
                    unmountOnExit
                >
                    <Alert
                        onClose={() => setAlertOpen(false)}
                        severity={alertSeverity}
                        sx={AlertStyle}
                    >
                        {alertMessage}
                    </Alert>
                </Grow>

                <Typography
                    variant="h4"
                    fontSize="2rem"
                    fontWeight={700}
                >
                    Login
                </Typography>

                <TextField
                    label="Login"
                    fullWidth
                    sx={LoginTextField}
                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                        const text: string = e.target.value;

                        setLogin(text);

                        if (!text) {
                            setValidLogin(false);
                        } else {
                            setValidLogin(true);
                        }
                    }}
                    onBlur={(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
                        const text: string = e.target.value;

                        if (!text) {
                            setValidLogin(false);
                        }
                    }}
                    error={!validLogin}
                    helperText={!validLogin ? "Campo obrigatório" : ""}
                />

                <TextField
                    label="Senha"
                    fullWidth
                    type={visiblePassword ? "text" : "password"}
                    sx={PasswordTextField}
                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                        const text: string = e.target.value;

                        setPassword(text);

                        if (!text) {
                            setValidPassword(false);
                        } else {
                            setValidPassword(true);
                        }
                    }}
                    onBlur={(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
                        const text: string = e.target.value;

                        if (!text) {
                            setValidPassword(false);
                        }
                    }}
                    error={!validPassword}
                    helperText={!validPassword ? "Campo obrigatório" : ""}
                    InputProps={{
                        endAdornment: (
                            <IconButton
                                onClick={() => setVisiblePassword(!visiblePassword)}
                            >
                                {visiblePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        )
                    }}
                />

                <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={SubmitButton}
                    size="large"
                >
                    {loadSignIn ? <CircularProgress color="inherit" size="1.65rem" /> : "Entrar"}
                </Button>
            </form>
        </Container>
    );
}