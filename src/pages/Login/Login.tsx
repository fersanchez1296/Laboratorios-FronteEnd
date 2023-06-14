import './css/login.css'
import { useDispatch } from "react-redux";
// import { getUser } from "../../services";
import { UserKey, resetUser } from "../../redux/states/user";
// , createUser
import { useNavigate } from "react-router-dom";
import {  PublicRoutes} from "../../models";
// PrivateRoutes,
import { useEffect } from "react";
import { clearLocalStorage } from "../../utilities";
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    clearLocalStorage(UserKey)
    dispatch(resetUser())
    navigate(`/${PublicRoutes.LOGIN}`, {replace : true})
  },[])

  // const login = async () => {
  //   try {
  //     const result = await getUser("219341143");
  //     console.log(result[0].rol)
  //     dispatch(createUser(result[0]));
  //     navigate(`/${PrivateRoutes.PRIVATE}`, {replace : true})
  //   } catch (error) {}
  // };
  return (
    <div className='login'>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default Login;
