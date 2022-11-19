import Image from "next/image";
import { motion } from "framer-motion";

import { Main } from "../styles/Home/style";

const Home = () => {
  return (
    <Main>
      <motion.section
        className="primary-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div>
          <h1>A carteira da nova geração</h1>
          <span>É para todas as idades</span>
        </div>
        <figure>
          <Image
            src="/images/home-ngcash-app.png"
            alt="ngcash app"
            width="350"
            height="350"
          />
        </figure>
      </motion.section>
    </Main>
  );
};

export default Home;
