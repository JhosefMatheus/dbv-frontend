import {
    Button,
    Container,
    IconButton,
    Link,
    TextField,
    Typography
} from "@mui/material";

import styles from "./styles/SignIn.module.css";

import { useState } from "react";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { UserModel } from "./models";

export default function SignIn() {
    const [login, setLogin] = useState("");
    const [invalidLogin, setInvalidLogin] = useState(false);

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);

    function signIn(e) {
        try {
            e.preventDefault();

            if (invalidLogin || invalidPassword) {}
            
            const user = new UserModel({ login, password });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%"
            }}
        >
            <form
                className={styles.Form}
                onSubmit={signIn}
            >
                <Typography
                    variant="h4"
                    fontWeight={700}
                    fontSize="2rem"
                >
                    Entrar
                </Typography>

                <Typography
                    variant="caption"
                    mb={2}
                    fontSize="0.875rem"
                    fontWeight={400}
                    color="rgb(108, 115, 127)"
                >
                    Não possui uma conta? <Link href="#" underline="hover">Criar</Link>
                </Typography>

                <TextField
                    label="Login"
                    variant="outlined"
                    sx={{
                        mb: 2
                    }}
                    onChange={e => {
                        setLogin(e.target.value)

                        if (e.target.value !== "") {
                            setInvalidLogin(false);
                        }
                    }}
                    helperText={invalidLogin ? "Login inválido" : ""}
                    error={invalidLogin}
                    onBlur={e => {
                        if (e.target.value === "") {
                            setInvalidLogin(true);
                        }
                    }}
                />

                <TextField
                    label="Senha"
                    variant="outlined"
                    sx={{
                        mb: 2
                    }}
                    onChange={e => {
                        setPassword(e.target.value)

                        if (e.target.value !== "") {
                            setInvalidPassword(false);
                        }
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
                    type={showPassword ? "text" : "password"}
                    helperText={invalidPassword ? "Senha inválida" : ""}
                    error={invalidPassword}
                    onBlur={e => {
                        if (e.target.value === "") {
                            setInvalidPassword(true);
                        }
                    }}
                />

                <Button
                    variant="contained"
                    size="large"
                    type="submit"
                >
                    Entrar
                </Button>
            </form>
        </Container>
    );
}