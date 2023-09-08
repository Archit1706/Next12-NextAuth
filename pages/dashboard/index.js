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
import PieChart from '../../components/Charts/PieChart'
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FileUploader } from "react-drag-drop-files";


export default function Dashboard() {
    const fileTypes = ["txt"];
    const { data: session } = useSession()

    function handleSignOut() {
        signOut()
    }

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const [reportData, setReportData] = useState([
        { date: '01/01/2021', time: '12:00', sentimentType: 'Audio', result: 'Good' },
        { date: '01/01/2021', time: '12:00', sentimentType: 'Chat', result: 'Best' },
        { date: '01/01/2021', time: '12:00', sentimentType: 'Chat', result: 'Good' },
        { date: '01/01/2021', time: '12:00', sentimentType: 'Audio', result: 'Bad' },
        { date: '01/01/2021', time: '12:00', sentimentType: 'Audio', result: 'Good' },
        { date: '01/01/2021', time: '12:00', sentimentType: 'Chat', result: 'Not so Bad' },
    ]);

    const handleResult = () => {
        alert("Hello")
    }

    const handleChat = (file) => {
        console.log(file);
    };

    return (
        // <DashLayout>
        <div className='flex flex-col justify-center items-center text-center gap-2 md:gap-4 p-4 bg-cyan-50'>
            {/* <div className={styles.container}> */}
            <Head>
                <title>VoiceSentri | Dashboard</title>
            </Head>

            {/* <Navbar session={session} /> */}
            {/* <section className="w-full min-h-screen"> */}
            {/* <main className="min-h-[calc(100vh - 64px)] md:min-h-[calc(100vh - 80px)] flex flex-col md:flex-row justify-center md:gap-8 lg:gap-12 items-center text-center md:text-center "> */}
            {/* </main> */}
            {/* </section> */}
            {/* {session ? User({ session, handleSignOut }) : Guest()} */}
            <div className="relative bg-gradient-to-br from-cyan-100 to-cyan-300 shadow-sm shadow-cyan-600 w-full h-12 flex justify-center items-center rounded-md">
                <h1 className='text-2xl md:text-3xl font-bold text-cyan-600'>Dashboard</h1>
                <a href='..' className='absolute right-4 md:right-8 text-cyan-600 hover:text-cyan-800 hover:underline'>
                    Back
                </a>
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
                                    end={reportData.filter(data => data.sentimentType === 'Audio').length}
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
                                    end={reportData.filter(data => data.sentimentType === 'Chat').length}
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
                                    end={reportData.length}
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
                <div className='w-full md:w-1/2 bg-gradient-to-br from-cyan-100 to-cyan-300 shadow-sm shadow-cyan-600 rounded-md flex justify-center items-center flex-col gap-2 p-4 md:h-96'>
                    <h1 className='text-cyan-600 font-bold text-2xl'>Sentiment Score of Last Call Analyzed</h1>
                    <LineChart chartData={chartData} />
                </div>
                <div className='w-full md:w-1/2 bg-gradient-to-br from-cyan-100 to-cyan-300 shadow-sm shadow-cyan-600 rounded-md flex justify-center items-center flex-col gap-2 p-4 md:h-96'>
                    <h1 className='text-cyan-600 font-bold text-2xl'>Sentiment Score of Last Chat Analyzed</h1>
                    <PieChart chartData={pieData} />
                </div>
            </div>

            <div className='w-full h-full flex justify-center items-center flex-col md:flex-row gap-2 md:gap-4'>
                <div className='w-full md:w-2/3 h-auto bg-gradient-to-br from-cyan-100 to-cyan-300 shadow-sm shadow-cyan-600 rounded-md flex justify-start items-center flex-col gap-2 p-4'>
                    <div className="w-full">
                        <h1 className='text-cyan-600 font-bold text-2xl'>History</h1>
                        <div className="shadow rounded border-b border-gray-200 overflow-x-scroll md:overflow-hidden">
                            <table className="min-w-full bg-white ">
                                <thead className="bg-cyan-800 text-cyan-100">
                                    <tr>
                                        <th className="w-1/4 text-center py-3 px-4 uppercase font-semibold text-sm">
                                            Date
                                        </th>
                                        <th className="w-1/4 text-center py-3 px-4 uppercase font-semibold text-sm">
                                            Time
                                        </th>
                                        <th className="w-1/4 text-center py-3 px-4 uppercase font-semibold text-sm">
                                            Sentiment Type
                                        </th>
                                        <th className="w-1/4 text-center py-3 px-4 uppercase font-semibold text-sm">
                                            Result
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-cyan-800">
                                    {Array.isArray(reportData) && reportData.length > 0 && reportData.map((data, index) => {
                                        return (
                                            <tr key={index} className={index % 2 == 0 ? "bg-cyan-100" : "bg-cyan-50"}>
                                                <td className="w-1/4 text-center py-3 px-4">{data.date}</td>
                                                <td className="w-1/4 text-center py-3 px-4">{data.time}</td>
                                                <td className="w-1/4 text-center py-3 px-4">
                                                    {data.sentimentType === 'Audio' ? (
                                                        <span className='bg-cyan-800 text-cyan-200 rounded-full px-2 py-1'>{data.sentimentType}</span>
                                                    ) : (
                                                        <span className='bg-cyan-600 text-cyan-50 rounded-full px-2 py-1'>{data.sentimentType}</span>
                                                    )}
                                                </td>
                                                <td className="w-1/4 text-center py-3 px-4">
                                                    <button className='border border-cyan-700 rounded-md p-2 text-cyan-700 font-semibold hover:bg-cyan-700 hover:text-cyan-100 transition duration-300 ease-in-out' onClick={handleResult}>
                                                        View Result
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    {Array.isArray(reportData) && reportData.length === 0 && (
                                        <tr>
                                            <td colSpan={4} className="w-1/4 text-center text-cyan-800 py-3 px-4">No Data Found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                {/* <div className='w-full md:w-1/3 h-96 bg-gradient-to-br from-cyan-100 to-cyan-300 shadow-sm shadow-cyan-600 rounded-md flex justify-center items-center flex-col gap-2 p-4'>
                </div> */}
                <div className='w-full md:w-1/3 h-96 bg-gradient-to-br from-cyan-100 to-cyan-300 shadow-sm shadow-cyan-600 rounded-md flex justify-between items-center md:self-start flex-col gap-2 p-4'>
                    <div className='w-full flex justify-center items-center flex-col gap-2'>
                        <h1 className='text-cyan-600 font-bold text-2xl'>Analyze Chats</h1>
                        <p className='text-gray-500 font-md'>Get Your Chat Sentiment Score!</p>
                    </div>
                    <FileUploader
                        handleChange={handleChat}
                        name="file"
                        types={fileTypes}
                        label="Drag & Drop your Chat files"
                        multiple={false}
                        required={true}
                        className="h-full w-full border-2 border-gray-300 text-cyan-800 border-dashed rounded-md"
                    />
                    <h3 className='text-sm text-gray-500'>Note:  Your chat is not saved but the results are saved for your future reference.</h3>
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

const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};