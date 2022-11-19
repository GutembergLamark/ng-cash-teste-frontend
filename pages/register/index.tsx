import { motion } from "framer-motion";

import FormRegister from "../../components/Forms/FormRegister";

import { Main } from "../../styles/Register/style";

const Register = () => {
  return (
    <Main>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Cadastro</h1>
        <FormRegister />
      </motion.section>
    </Main>
  );
};

export default Register;
