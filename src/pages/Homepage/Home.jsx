import Layout from "../../components/Layouts/Layout";
import Section1 from "./Section1";
import "../../styles/HomeStyles.css";
import Section2 from "./Section2";

function Home() {
  return (
    <>
      <Layout>
        <Section1 />
        <Section2 />
      </Layout>
    </>
  );
}

export default Home;
