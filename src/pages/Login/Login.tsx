import { Box, Button, FormControl, FormLabel, Heading, Image, Input, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useReducer";
import { loginThunk } from "../../store/userRedux/user.thunks";
import { Link, Navigate, useLocation } from "react-router-dom";

export default function Login() {
    let location = useLocation()
    let from = location.state?.from?.pathname || '/'
    const {
        loggedIn,
    } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch();

    const [form, setForm] = useState({
        username: '',
        password: '',
    });

    const onSubmit = () => {
        console.log(form);
        dispatch(loginThunk(form.username, form.password))
    }
    return (
        <Box
            w={['full', 'md']}
            p={[8, 10]}
            mt={[20, '10hv']}
            mx='auto'
            border={['none', '1px']}
            borderColor={['', 'gray.300']}
            borderRadius={10}
        >
            {
                loggedIn && <Navigate to={from} />
            }
            <VStack spacing={4} align='flex-start' w='full'>
                <Image src='/logoSystem.jpeg' alt='Dan Abramov' />
                <VStack spacing={1} align={['flex-start', 'center']} w='full'>
                    <Heading>Iniciar sesión</Heading>
                    <Text>Ingresa tu usuario y contraseña</Text>
                </VStack>
                <FormControl>
                    <FormLabel>Usuario</FormLabel>
                    <Input rounded='none' variant='filled'
                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Contraseña</FormLabel>
                    <Input rounded='none' variant='filled' type='password'
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                </FormControl>
                <Button rounded='none' bg='#718247' color='white' w={['full', 'auto']} alignSelf='end'
                    onClick={onSubmit}
                >
                    Ingresar
                </Button>
            </VStack>
        </Box>
    );
}