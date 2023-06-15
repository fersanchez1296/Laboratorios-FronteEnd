import { Form, Formik} from "formik";
import { getUser } from "../../../services";
import { useDispatch } from "react-redux";
import { createUser } from "../../../redux/states/user";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../../models";
import { login } from "../schemas/login.schema";
import CustomInput from "../CustomInput/CustomInput";


interface FormValues {
  user: string;
  password: string;
}


const Content: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues: FormValues = { user: "", password: "" };
  return (
    <div className="content flow-text">
      <p className="description">
        Lab-R es un sistema desarrollado en el CUValles para generar
        reservaciones en los laboratorios y facilitar el acceso a docentes y
        alumnos para realizar las prácticas pertinentes a sus campos de estudio.
      </p>

      <article className="login-form z-depth-3 row">
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          validationSchema={login}
          onSubmit={async (values) => {
            const data = values
            try {
              const result = await getUser(data);
              console.log(result)
              dispatch(createUser(result.data));
              navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
            } catch (error) {}
          }
          }
        >
          {({ handleSubmit, handleChange, isSubmitting, values }) => (
            <Form onSubmit={handleSubmit}>
              {/* -------------------------------------------------------------------------- */
              /*                                    input                                   */
              /* -------------------------------------------------------------------------- */}
              <CustomInput id={"user"}
                  type={"text"}
                  name={"user"}
                  value={values.user} 
                  data_icon="key"
                  data_for="user"
                  data_label_text="Usuario"
                  handleChange={handleChange}/>
              {/* -------------------------------------------------------------------------- */
              /*                                    input                                   */
              /* -------------------------------------------------------------------------- */}
              <CustomInput id={"password"}
                  type={"password"}
                  name={"password"}
                  value={values.password} 
                  data_icon="password"
                  data_for="password"
                  data_label_text="Contraseña"
                  handleChange={handleChange}/>
              {/* -------------------------------------------------------------------------- */
              /*                                    boton                                   */
              /* -------------------------------------------------------------------------- */}
              <div className="">
                <a className="" href="#/Main">
                  <button
                    className="waves-effect waves-light btn"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Ingresar<i className="material-icons right">cloud</i>
                  </button>
                </a>
              </div>
            </Form>
          )}
        </Formik>
      </article>
    </div>
  );
}
export default Content;
