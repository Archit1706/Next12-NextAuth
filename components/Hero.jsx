import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getSession, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import NextButton from "./NextButton";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/fadein";
import { GiBugleCall } from "react-icons/gi";

export default function Hero({ session, next }) {
    const router = useRouter();

    function handleSignOut() {
        signOut();
    }

    function handleLogin() {
        router.push("/login");
    }

    return (
        <div className={`${styles.container} bg-cyan-100 relative`}>
            <Head>
                <title>Sentimental Analysis</title>
            </Head>

            <section className="w-full min-h-screen">
                <motion.nav
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0 }}
                    className="py-4 md:px-4 text-center md:h-20 h-16 flex flex-row justify-between items-center"
                >
                    <div className="font-bold text-lg">
                        {/* <p className='border-l-2 border-black '></p> */}

                        <Link href="/">
                            <h1 className="text-2xl font-bold text-cyan-700">
                                <span className="font-medium text-cyan-500">
                                    Voice
                                </span>
                                Sentri
                                <GiBugleCall className="inline-block ml-1 mb-2 text-cyan-500" />
                            </h1>
                        </Link>
                    </div>

                    <div>
                        {session ? (
                            <button
                                className="m-4 border border-cyan-700 rounded-md px-4 py-2 text-cyan-700 font-semibold hover:bg-cyan-700 hover:text-cyan-100 transition duration-300 ease-in-out"
                                onClick={handleSignOut}
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                className="border-2 border-cyan-700 rounded-md px-4 py-2 text-cyan-700 font-semibold hover:bg-cyan-700 hover:text-cyan-100 transition duration-300 ease-in-out"
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                        )}
                    </div>
                </motion.nav>
                <main className="min-h-[calc(100vh - 64px)] md:min-h-[calc(100vh - 80px)] flex flex-col md:flex-row justify-center md:gap-8 lg:gap-12 items-center text-center md:text-left">
                    <motion.div
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.4 }}
                        className="md:w-1/2 h-full"
                    >
                        <div className="">
                            <h1 className="text-4xl md:text-5xl font-bold text-cyan-900 uppercase ">
                                <motion.span
                                    variants={fadeIn("up", 0.5)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="text-cyan-700 font-semibold selection:text-cyan-200 selection:bg-black"
                                >
                                    Transforming Calls into
                                </motion.span>
                                <motion.span
                                    variants={fadeIn("up", 0.6)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="selection:text-cyan-300 selection:bg-black/75"
                                >
                                    {" "}
                                    Actionable Feedback.
                                </motion.span>
                            </h1>
                            <p className="text-gray-500">
                                Discover the Power of Sentiment Analysis for
                                Your Customer Calls.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("down", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.4 }}
                        className="md:w-1/2 h-full"
                    >
                        <Image
                            src="/assets/hero.svg"
                            width={510}
                            height={510}
                        />
                    </motion.div>
                </main>
            </section>
            {/* <NextButton to={next} /> */}
        </div>
    );
}
