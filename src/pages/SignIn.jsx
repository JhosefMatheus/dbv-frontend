import {
    Button,
    Container,
    IconButton,
    Link,
    TextField,
    Typography
} from "@mui/material";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import styles from "../style/SignIn.module.css";

import {
    useState
} from "react";

export default function SignIn() {
    const [login, setLogin] = useState("");
    const [validLogin, setValidLogin] = useState(true);

    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    function onSubmit(e) {
        e.preventDefault();
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