import React from 'react';
import { AppBar, Toolbar, Typography, Box, } from '@material-ui/core';
import { Link , useNavigate} from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/action';

function Navbar() {

    
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    let navigate = useNavigate(); 
    const dispatch = useDispatch();

    
    function goLogout(){
        dispatch(addToken(''));
        alert ("Usuario deslogado")
        navigate('/login')
    }

    var navBarComponent;

    if(token != ""){
        navBarComponent=  <AppBar position="static">
        <Toolbar variant="dense">
            <Box className='cursor' >
                <Typography variant="h5" color="inherit">
                    BlogPessoal
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Link to='/home' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Home
                        </Typography>
                    </Box>
                </Link>
                <Link to='/posts' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Postagens
                        </Typography>
                    </Box>
                </Link>
                <Link to='/temas' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            Temas
                        </Typography>
                    </Box>
                </Link>
                <Link to='/formularioTema' className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        Cadastrar Tema
                    </Typography>
                </Box>
                </Link>
                    <Box mx={1} className="cursor" onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            Logout
                        </Typography>
                    </Box>
            </Box>

        </Toolbar>
    </AppBar>
    }

    return (
        <>
        {navBarComponent}       
        </>
    )
}

export default Navbar;