import * as Yup from "yup";
const { yupResolver } = require("@hookform/resolvers/yup");

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .email("Informe um e-mail válido")
    .required("Informe seu e-mail"),
  password: Yup.string().required("Informe sua senha"),
});

export default yupResolver(validationSchema);
