import React, { ChangeEvent, useEffect, useState } from 'react'
import { Grid, Box, Typography, TextField, Button, } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';

import { login } from "../../service/Service";
import UserLogin from "../../models/UserLogin";
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/action';
import {toast} from 'react-toastify';

function Login() {

    let history = useNavigate();
    const dispatch = useDispatch();

    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    useEffect(()=>{
        if(token != ''){
            dispatch(addToken(token));
            history ('/home')
        }
    }, [token])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,

            [e.target.name]: e.target.value
        })
    }

    async function logar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`/usuarios/logar`, userLogin, setToken)
           
            toast.success('Usuario Logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        catch (error) {
            toast.warn('Email ou senha incorretos, erro ao fazer o login', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={logar}>
                        <Typography variant="h3" gutterBottom color='textPrimary' component='h3' align="center" className="textos1" >Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label='usuario' variant="outlined" name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label='senha' variant="outlined" name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign="center">
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                        </Box>

                    </form>
                    <Box display='flex' justifyContent="center" marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta? </Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant="subtitle1" gutterBottom align="center" className="textos1" >Cadastre-se</ Typography>
                        </Link>
                    </Box>

                </Box>

            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>

        </Grid>

    );


}

export default Login;