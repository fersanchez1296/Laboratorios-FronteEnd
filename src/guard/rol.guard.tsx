import { useSelector } from "react-redux";
import { PrivateRoutes} from "../models"
import { AppStore } from "../redux/store";
import { Navigate, Outlet } from "react-router-dom";
import { Roles } from "../models/roles";


interface Props {
  rol : Roles
}

function RoleGuard({rol} : Props) {
    const userState = useSelector((store : AppStore) => store.user)
    
  return (
     userState.rol === rol ? <Outlet/> : <Navigate replace to={PrivateRoutes.PRIVATE}/>
  )
}
export default RoleGuard