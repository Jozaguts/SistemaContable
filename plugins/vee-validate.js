import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";


extend("required", {
    ...required,
    message: "Campo requerido"
});

extend("email", {
    ...email,
    message: 'Correo no valido'
})