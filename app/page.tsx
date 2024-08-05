import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    redirect: {
      destination: "/dashboard",
      permanent: false,
    },
  };
}

const Home = () => {
  return null; // This component won't actually render
};

export default Home;
