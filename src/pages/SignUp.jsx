import {
    Alert,
    Button,
    Container,
    IconButton,
    Link,
    TextField,
    Typography,
    Slide
} from "@mui/material";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import styles from "../style/SignUp.module.css";

import { useState } from "react";
import UserModel from "../models/UserModel";

import UnauthorizedException from "../exceptions/UnauthorizedExceptioin";
import ServerSideException from "../exceptions/ServerSideException";
import EmptyFieldException from "../exceptions/EmptyFieldException";
import InvalidPasswordException from "../exceptions/InvalidPasswordException";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [validName, setValidName] = useState(true);

    const [login, setLogin] = useState("");
    const [validLogin, setValidLogin] = useState(true);

    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(true);

    const [confirmPassword, setConfirmPassword] = useState("");
    const [validConfirmPassword, setValidConfirmPassword] = useState(true);

    const [showPassword, setShowPassword] = useState(false);

    const [alertOpen, setAlertOpen] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    async function onSubmit(e) {
        e.preventDefault();

        try {
            const user = new UserModel({ name, login, password, confirmPassword });

            const { message } = await user.signUp();

            navigate(
                "/",
                {
                    state: {
                        message,
                        severityWarning: "success"
                    }
                });

        } catch (error) {
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

                !name && setValidName(false);
                !login && setValidLogin(false);
                !password && setValidPassword(false);
                !confirmPassword && setValidConfirmPassword(false);

            } else if (error instanceof InvalidPasswordException) {
                setAlertSeverity(error.severityAlert);
                setAlertMessage(error.message);

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
                    fontWeight={700}
                    fontSize="2rem"
                >
                    Gerência de Desbravadores
                </Typography>

                <Typography
                    variant="caption"
                    fontSize="0.875rem"
                    color="rgb(108, 115, 127)"
                    sx={{
                        mb: 4
                    }}
                >
                    Preencha os campos abaixo para criar uma conta.
                </Typography>

                <TextField
                    label="Nome"
                    onChange={e => setName(e.target.value)}
                    onBlur={(e) => {
                        if (e.target.value === "") {
                            setValidName(false);
                        } else {
                            setValidName(true);
                        }
                    }}
                    sx={{
                        mb: 2
                    }}
                    error={!validName}
                    helperText={!validName ? "Campo obrigatório" : ""}
                />

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
                        mb: 2
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

                <TextField
                    label="Confirmar senha"
                    type={showPassword ? "text" : "password"}
                    onChange={e => setConfirmPassword(e.target.value)}
                    onBlur={(e) => {
                        if (e.target.value === "") {
                            setValidConfirmPassword(false);
                        } else {
                            setValidConfirmPassword(true);
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
                    error={!validConfirmPassword}
                    helperText={!validConfirmPassword ? "Campo obrigatório" : ""}
                />

                <Button
                    variant="contained"
                    sx={{
                        mb: 2,
                        borderRadius: "0.875rem"
                    }}
                    size="large"
                    type="submit"
                >
                    Criar conta
                </Button>

                <Typography
                    variant="caption"
                    fontSize="0.875rem"
                    color="rgb(108, 115, 127)"
                >
                    Já possui uma conta? <Link href="/" underline="hover">Entrar</Link>
                </Typography>
            </form>
        </Container>
    );
}