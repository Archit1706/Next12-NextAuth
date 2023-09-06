import React from 'react';
import { getSession, useSession } from 'next-auth/react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Statistics from '../components/Statistics';
import Packages from '../components/Packages';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import Upload from '../components/Upload';

// import NextButton from '../components/NextButton';
// import { useInView } from 'react-intersection-observer';

const Home = () => {
  const { data: session } = useSession();

  // const [ref, inView] = useInView({
  //   threshold: 0.5,
  //   // triggerOnce: true,
  // });
  return (
    <div className=''>
      <Head>

        <title>VoiceCentri - Transforming calls into actionable feedback.</title>
        <meta name="title" content="VoiceCentri - Transforming calls into actionable feedback." />
        <meta name="description" content="Catalyze customer service excellence with our sentiment analysis platform, deciphering emotions and delivering actionable insights from incoming calls." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://voice-sentri.vercel.app/" />
        <meta property="og:title" content="VoiceCentri - Transforming calls into actionable feedback." />
        <meta property="og:description" content="Catalyze customer service excellence with our sentiment analysis platform, deciphering emotions and delivering actionable insights from incoming calls." />
        <meta property="og:image" content="https://voice-sentri.vercel.app/VoiceCentri.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://voice-sentri.vercel.app/" />
        <meta property="twitter:title" content="VoiceCentri - Transforming calls into actionable feedback." />
        <meta property="twitter:description" content="Catalyze customer service excellence with our sentiment analysis platform, deciphering emotions and delivering actionable insights from incoming calls." />
        <meta property="twitter:image" content="https://voice-sentri.vercel.app/VoiceCentri.jpg" />

        {/* manifest */}
        <link rel="manifest" href="/manifest.json" />

      </Head>

      <Navbar id="navbar" session={session} />

      <Hero id="hero" next="upload" session={session} />

      <Upload id="upload" next="features" session={session} />
      {/* <NextButton to="features" /> */}
      <Features id="features" next="contact" session={session} />

      <Statistics id="statistics" next="packages" session={session} />

      <Packages id="packages" next="contact" session={session} />

      <Footer id="footer" />
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