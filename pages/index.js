import React from 'react';
import { getSession, useSession } from 'next-auth/react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Statistics from '../components/Statistics';
import Packages from '../components/Packages';
// import NextButton from '../components/NextButton';
// import { useInView } from 'react-intersection-observer';

const Home = () => {
  const { data: session } = useSession();

  // const [ref, inView] = useInView({
  //   threshold: 0.5,
  //   // triggerOnce: true,
  // });
  return (
    <div className='relative'>

      <Hero id="hero" next="features" session={session} />
      {/* <NextButton to="features" /> */}
      <Features id="features" next="contact" session={session} />

      <Statistics id="statistics" next="packages" session={session} />

      <Packages id="packages" next="contact" session={session} />

    </div>
  );
}

export default Home;


export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  return {
    props: { session }
  }
}