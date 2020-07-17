import { extend } from "vee-validate";
import { required, email, regex, digits } from "vee-validate/dist/rules";


extend("required", {
    ...required,
    message: "Campo requerido"
});

extend("email", {
    ...email,
    message: 'Correo no valido'
});
extend("regex", {
    ...regex,
    message: 'Curp no valida'
});
extend("digits", {
  ...digits,
  message: 'Número de teléfono no valido'
});

