import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/useReducer'
import { LOGIN } from './List.Router.Flow'
import links, { ILink } from './links'
import Login from '../pages/Login/Login'
import PrivateRoutes from './PrivateRoutes'

const AppRouter = () => {
    const dispatch = useAppDispatch()
    const {
        user,
        loading,
        token,
    } = useAppSelector(state => state.user)

    // useEffect(() => {
    //     dispatch(refreshToken())
    // }, [dispatch])

    const renderRoutes = (item: ILink, index: number) => {
        if (item.subMenu) {
            if (item.path === "") {
            } else {
                return (
                    <Route key={index} path={item.path} element={<item.element />}>
                        <Route index element={<item.subElement />} />
                        {
                            item.subMenu.map((subItem, subIndex) => {
                                if (subItem.path !== "") {
                                    return <Route path={subItem.path} key={subIndex} element={<subItem.element />} />
                                }
                            })
                        }
                    </Route>
                )
            }
        } else {
            return (
                <Route key={index} path={item.path} element={<item.element />} />
            )
        }
    }

    return (
        <Routes>
            <Route path="/" element={<PrivateRoutes admin={
                token ? true : false
                // true
            } />}>
                <Route index element={<Navigate to="/" />} />
                {
                    links.map((link, index) => renderRoutes(link, index))
                }
            </Route>
            <Route path={LOGIN} element={<Login />} />
            {/* <Route path={LOGIN} element={<Login />}>
                <Route index element={<FormLogin />} />
                <Route path={RECOVER_PASSWORD} element={<FormRecoverPassword />} />
            </Route> */}
            {/* <Route path={CHANGE_PASSWORD} element={<ChangePassword />} /> */}
        </Routes >
    )
}

export default AppRouter