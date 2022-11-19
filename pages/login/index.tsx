import { motion } from "framer-motion";

import FormLogin from "../../components/Forms/FormLogin";

import { Main } from "../../styles/Login/style";

const Login = () => {
  return (
    <Main>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Login</h1>
        <FormLogin />
      </motion.section>
    </Main>
  );
};

export default Login;
