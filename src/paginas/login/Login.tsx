import React from "react";
import './Login.css'
import { Grid, Box, Typography, TextField, Button, } from '@material-ui/core'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant="h3" gutterBottom color='textPrimary' component='h3' align="center" >Entrar</Typography>
                        <TextField id="usuario" label='usuario' variant="outlined" name='usuario' margin='normal' fullWidth />
                        <TextField id="senha" label='senha' variant="outlined" name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign="center">
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar

                                </Button>
                            </Link>
                        </Box>

                    </form>
                    <Box display='flex' justifyContent="center" marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta? </Typography>
                        </Box>
                             <Typography variant="subtitle1" gutterBottom align="center" style={{fontWeight:'bold'}} >Cadastre-se</ Typography>
                    </Box>

                </Box>

            </Grid>
            <Grid xs={6} style={{
                backgroundImage: `url(https://media.istockphoto.com/vectors/futuristic-gray-technology-background-for-science-and-technology-vector-id1194458591)`,
                backgroundRepeat: 'no-repeat' , width:'1200vh', minHeight:"100vh" , backgroundSize:'cover', backgroundPosition: 'center'
            }} >

            </Grid>

        </Grid>

    );


}

export default Login;