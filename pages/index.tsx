import Image from "next/image";
import { Main } from "../styles/Home/style";

const Home = () => {
  return (
    <Main>
      <section className="primary-section">
        <div>
          <h1>A carteira da nova geração</h1>
          <span>É para todas as idades</span>
        </div>
        <figure>
          <Image src="/home-ngcash-app.png" alt="ngcash app" width="350" height="350"/>
        </figure>
      </section>
    </Main>
  );
};

export default Home;
