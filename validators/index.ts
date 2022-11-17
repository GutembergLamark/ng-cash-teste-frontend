import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  username: yup.string().required("O nome do usuário é obrigatório"),
  password: yup.string().required("A senha é obrigatória"),
});

export const schemaRegister = yup.object().shape({
  username: yup.string().required("O nome do usuário é obrigatório"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),
  confirmPassword: yup
    .string()
    .required("A confirmação de senha é obrigatória")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
});

export const schemaCreateTransaction = yup.object().shape({
  username: yup.string().required("O nome do usuário é obrigatório"),
  value: yup.string().required("O valor da transação é obrigatório"),
});
