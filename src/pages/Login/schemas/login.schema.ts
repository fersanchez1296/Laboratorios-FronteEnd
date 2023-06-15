import * as yup from "yup";

export const login = yup.object().shape({
  user: yup.number().required("Este campo es requerido"),
  password: yup.number().required("Este campo es requerido"),
});
