import {
    Alert,
    Button,
    Container,
    IconButton,
    Link,
    Slide,
    TextField,
    Typography
} from "@mui/material";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import styles from "../style/SignIn.module.css";

import {
    useState
} from "react";

import UserModel from "../models/UserModel";

import ServerSideException from "../exceptions/ServerSideException";
import UnauthorizedException from "../exceptions/UnauthorizedExceptioin";
import EmptyFieldException from "../exceptions/EmptyFieldException";

export default function SignIn() {
    const [login, setLogin] = useState("");
    const [validLogin, setValidLogin] = useState(true);

    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const [alertOpen, setAlertOpen] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const user = new UserModel({ login, password });

            const { message } = await user.signIn();

            setAlertOpen(true);
            setAlertSeverity("success");
            setAlertMessage(message);

        } catch(error) {
            setAlertOpen(true);

            if (error instanceof UnauthorizedException) {
                setAlertSeverity(error.severityAlert);
                setAlertMessage(error.message);

            } else if (error instanceof ServerSideException) {
                setAlertSeverity(error.severityAlert);
                setAlertMessage(error.message);

            } else if (error instanceof EmptyFieldException) {
                setAlertSeverity(error.severityAlert);
                setAlertMessage(error.message);

                !login && setValidLogin(false);
                !password && setValidPassword(false);

            } else {
                setAlertSeverity("error");
                setAlertMessage(error.message);

            }
        }
    }

    return (
        <Container
            sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <form
                className={styles.Form}
                onSubmit={onSubmit}
            >
                <Slide
                    direction="down"
                    in={alertOpen}
                    mountOnEnter
                    unmountOnExit
                >
                    <Alert
                        severity={alertSeverity}
                        onClose={() => setAlertOpen(false)}
                        sx={{
                            mb: 2
                        }}
                    >
                        {alertMessage}
                    </Alert>
                </Slide>

                <Typography
                    variant="h4"
                    fontSize="2rem"
                    fontWeight={700}
                >
                    Gerência de Desbravadores
                </Typography>

                <Typography
                    variant="caption"
                    color="rgb(108, 115, 127)"
                    fontSize="0.875rem"
                    mb={4}
                >
                    Entre no sistema de gerência de desbravadores
                </Typography>

                <TextField
                    label="Login"
                    onChange={e => setLogin(e.target.value)}
                    onBlur={(e) => {
                        if (e.target.value === "") {
                            setValidLogin(false);
                        } else {
                            setValidLogin(true);
                        }
                    }}
                    sx={{
                        mb: 2
                    }}
                    error={!validLogin}
                    helperText={!validLogin ? "Campo obrigatório" : ""}
                />

                <TextField
                    label="Senha"
                    type={showPassword ? "text" : "password"}
                    onChange={e => setPassword(e.target.value)}
                    onBlur={(e) => {
                        if (e.target.value === "") {
                            setValidPassword(false);
                        } else {
                            setValidPassword(true);
                        }
                    }}
                    sx={{
                        mb: 4
                    }}
                    InputProps={{
                        endAdornment: (
                            <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {
                                    showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />
                                }
                            </IconButton>
                        )
                    }}
                    error={!validPassword}
                    helperText={!validPassword ? "Campo obrigatório" : ""}
                />

                <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    sx={{
                        borderRadius: "0.875rem",
                        fontWeight: 600,
                        textTransform: "none",
                        fontSize: "0.9735rem",
                        mb: 1
                    }}
                >
                    Entrar
                </Button>

                <Typography
                    variant="caption"
                    color="rgb(108, 115, 127)"
                    fontSize="0.875rem"
                >
                    Não possui uma conta? <Link underline="hover" href="/sign-up">Criar</Link>
                </Typography>
            </form>
        </Container>
    );
}