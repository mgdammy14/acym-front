import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { LOGIN } from './List.Router.Flow'
interface Props {
    admin: boolean
}
const PrivateRoutes = ({
    admin
}: Props) => {
    const location = useLocation()

    return admin ? (
        <>
            mi header
            <Outlet />
        </>
    ) : <Navigate
        to={LOGIN}
        state={{ from: location }}
        replace
    />
}

export default PrivateRoutes