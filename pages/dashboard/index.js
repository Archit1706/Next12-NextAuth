import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { getSession, useSession, signOut } from "next-auth/react"
import Navbar from '../../components/Navbar';
import DashLayout from '../../layout/DashLayout'
import { TbReportSearch } from 'react-icons/tb'
import { BiSolidPhoneCall, BiChat } from 'react-icons/bi';
import LineChart from '../../components/Charts/LineChart';
import { Line } from 'react-chartjs-2'
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";


export default function Dashboard() {

    const { data: session } = useSession()

    function handleSignOut() {
        signOut()
    }

    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    return (
        // <DashLayout>
        <div className='container flex flex-col justify-center items-center text-center gap-2 md:gap-4 p-4 bg-cyan-50'>
            {/* <div className={styles.container}> */}
            <Head>
                <title>VoiceSentri | Dashboard</title>
            </Head>

            {/* <Navbar session={session} /> */}
            {/* <section className="w-full min-h-screen"> */}
            {/* <main className="min-h-[calc(100vh - 64px)] md:min-h-[calc(100vh - 80px)] flex flex-col md:flex-row justify-center md:gap-8 lg:gap-12 items-center text-center md:text-left "> */}
            {/* </main> */}
            {/* </section> */}
            {/* {session ? User({ session, handleSignOut }) : Guest()} */}
            <div className="bg-gradient-to-br from-cyan-100 to-cyan-300 shadow-sm shadow-cyan-600 w-full h-12 flex justify-center items-center rounded-md">
                <h1 className='text-2xl md:text-3xl font-bold text-cyan-600'>Dashboard</h1>
            </div>
            <div className='w-full h-auto flex justify-center items-center flex-col md:flex-row gap-2 md:gap-4' ref={ref}>
                <div className='w-full md:w-1/3 h-28 bg-gradient-to-br from-cyan-100 to-cyan-300 shadow-sm shadow-cyan-600 rounded-md flex justify-center items-center flex-row gap-2 md:gap-4'>
                    <div className='flex justify-center items-center rounded-full bg-white shadow-md shadow-cyan-600 '>
                        <BiSolidPhoneCall className='text-cyan-600 h-20 w-20 p-4' />
                    </div>
                    <div className='w-2/3 h-full flex justify-center items-center flex-col gap-2'>
                        <h1 className='text-2xl font-bold text-cyan-600'>Calls Analyzed</h1>
                        <h1 className='text-3xl font-bold text-cyan-800'>
                            {inView ? (
                                <CountUp
                                    start={0}
                                    end={6}
                                    duration={2}
                                    decimals={0}
                                    suffix={""}
                                />
                            ) : (
                                0
                            )}
                        </h1>
                    </div>
                </div>
                <div className='w-full md:w-1/3 h-28 bg-gradient-to-br from-cyan-100 to-cyan-300 shadow-sm shadow-cyan-600 rounded-md flex justify-center items-center flex-row gap-2 md:gap-4'>
                    <div className='flex justify-center items-center rounded-full bg-white shadow-md shadow-cyan-600 '>
                        <TbReportSearch className='text-cyan-600 h-20 w-20 p-4' />
                    </div>
                    <div className='w-2/3 h-full flex justify-center items-center flex-col gap-2'>
                        <h1 className='text-2xl font-bold text-cyan-600'>Reports Generated</h1>
                        <h1 className='text-3xl font-bold text-cyan-800'>
                            {inView ? (
                                <CountUp
                                    start={0}
                                    end={6}
                                    duration={2}
                                    decimals={0}
                                    suffix={""}
                                />
                            ) : (
                                0
                            )}
                        </h1>
                    </div>
                </div>
                <div className='w-full md:w-1/3 h-28 bg-gradient-to-br from-cyan-100 to-cyan-300 shadow-sm shadow-cyan-600 rounded-md flex justify-center items-center flex-row gap-2 md:gap-4'>
                    <div className='flex justify-center items-center rounded-full bg-white shadow-md shadow-cyan-600 '>
                        <BiChat className='text-cyan-600 h-20 w-20 p-4' />
                    </div>
                    <div className='w-2/3 h-full flex justify-center items-center flex-col gap-2'>
                        <h1 className='text-2xl font-bold text-cyan-600'>Chats Analyzed</h1>
                        <h1 className='text-3xl font-bold text-cyan-800'>
                            {inView ? (
                                <CountUp
                                    start={0}
                                    end={6}
                                    duration={2}
                                    decimals={0}
                                    suffix={""}
                                />
                            ) : (
                                0
                            )}
                        </h1>
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex justify-center items-center flex-col md:flex-row gap-2 md:gap-4'>
                <div className='w-full md:w-1/2 bg-gradient-to-br from-cyan-100 to-cyan-300 shadow-sm shadow-cyan-600 rounded-md flex justify-center items-center flex-col gap-2 p-4 md:h-80'>
                    <LineChart chartData={chartData} />
                </div>
                <div className='w-full md:w-1/2 bg-gradient-to-br from-cyan-100 to-cyan-300 shadow-sm shadow-cyan-600 rounded-md flex justify-center items-center flex-col gap-2 p-4 md:h-80'>
                    <LineChart chartData={chartData} />
                </div>
            </div>

            <div className='w-full h-full flex justify-center items-center flex-col md:flex-row gap-2 md:gap-4'>
                <div className='w-full md:w-2/3 h-96 bg-gradient-to-br from-cyan-100 to-cyan-300 shadow-sm shadow-cyan-600 rounded-md flex justify-start items-center flex-col gap-2 p-4'>
                    <div className="w-full">
                        <div className="shadow overflow-hidden rounded border-b border-gray-200">
                            <table className="min-w-full bg-white">
                                <thead className="bg-cyan-800 text-cyan-200">
                                    <tr>
                                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                                            Name
                                        </th>
                                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                                            Last name
                                        </th>
                                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                                            Phone
                                        </th>
                                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                                            Email
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    <tr>
                                        <td className="w-1/3 text-left py-3 px-4">Lian</td>
                                        <td className="w-1/3 text-left py-3 px-4">Smith</td>
                                        <td className="text-left py-3 px-4">
                                            <a className="hover:text-blue-500" href="tel:622322662">
                                                622322662
                                            </a>
                                        </td>
                                        <td className="text-left py-3 px-4">
                                            <a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">
                                                jonsmith@mail.com
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="w-1/3 text-left py-3 px-4">Emma</td>
                                        <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                                        <td className="text-left py-3 px-4">
                                            <a className="hover:text-blue-500" href="tel:622322662">
                                                622322662
                                            </a>
                                        </td>
                                        <td className="text-left py-3 px-4">
                                            <a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">
                                                jonsmith@mail.com
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                                        <td className="w-1/3 text-left py-3 px-4">Williams</td>
                                        <td className="text-left py-3 px-4">
                                            <a className="hover:text-blue-500" href="tel:622322662">
                                                622322662
                                            </a>
                                        </td>
                                        <td className="text-left py-3 px-4">
                                            <a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">
                                                jonsmith@mail.com
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                                        <td className="w-1/3 text-left py-3 px-4">Brown</td>
                                        <td className="text-left py-3 px-4">
                                            <a className="hover:text-blue-500" href="tel:622322662">
                                                622322662
                                            </a>
                                        </td>
                                        <td className="text-left py-3 px-4">
                                            <a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">
                                                jonsmith@mail.com
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                {/* <div className='w-full md:w-1/3 h-96 bg-gradient-to-br from-cyan-100 to-cyan-300 shadow-sm shadow-cyan-600 rounded-md flex justify-center items-center flex-col gap-2 p-4'>
                </div> */}
                <div className='w-full md:w-1/3 h-96 bg-gradient-to-br from-cyan-100 to-cyan-300 shadow-sm shadow-cyan-600 rounded-md flex justify-center items-center flex-col gap-2 p-4'>
                </div>
            </div>
            {/* </div> */}
            {/* </DashLayout> */}
        </div>
    )
}

// Guest
function Guest() {
    return (
        <main className="container mx-auto text-center py-20">
            <h3 className='text-4xl font-bold'>Guest Homepage</h3>

            <div className='flex justify-center'>
                <Link href={'/login'}><a className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Sign In</a></Link>
            </div>
        </main>
    )
}

// Authorize User
function User({ session, handleSignOut }) {
    return (
        <main className="container mx-auto text-center py-20">
            <h3 className='text-4xl font-bold'>Authorize User Homepage</h3>

            <div className='details'>
                <h5>{session.user.name}</h5>
                <h5>{session.user.email}</h5>
            </div>

            <div className="flex justify-center">
                <button onClick={handleSignOut} className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Sign Out</button>
            </div>

            <div className='flex justify-center'>
                <Link href={'/profile'}><a className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Profile Page</a></Link>
            </div>
        </main>
    )
}


export async function getServerSideProps({ req }) {
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: { session }
    }
}

const chartData = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
    datasets: [{
        label: 'Hourly Steps Tracked',
        data: [324, 5643, 664, 756, 864, 4655, 5365, 766, 743, 55, 247, 85],
        backgroundColor: [
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,

    }]
};
