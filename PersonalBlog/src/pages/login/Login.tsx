import React, { ChangeEvent, useEffect, useState } from 'react';
import './Login.css';
import { Grid,Typography, TextField, Button } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import UserLogin from '../../models/UserLogin';
import {login} from '../../services/service';
function Login() {
    let navigate =useNavigate();

    const [token,setToken ] = useLocalStorage('token')
    const [userLogin, setUserLogin] =useState<UserLogin>(
        {
            id:0,
            usuario: '',
            senha:'',
            token:''
            
        }
    )

    function updateModel(e: ChangeEvent<HTMLInputElement>){
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
        //console.log(JSON.stringify(userLogin))
    }

    /*valida login*/
    useEffect(()=>{
            if(token != '')
            navigate ('/home')
    },[token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            await login (`usuarios/logar`, userLogin, setToken)
            alert('Usuario Logado com Sucesso!')
        }
        catch(error){
            alert('Dados do usuario incorretos')
    }
    
    }
    

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography id='typogr' variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{fontWeight: 'bold'}}>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight: 'bold'}}>Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} style={{
                backgroundImage: `url(https://i.imgur.com/d5bMdDJ.jpg) `,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '70vh', backgroundSize: 'cover', backgroundPosition: 'center'
            }}>

            </Grid>
        </Grid>
    );
}

export default Login;