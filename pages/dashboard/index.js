import Head from 'next/head'
import { useState } from 'react'
import { getSession, useSession, signOut } from "next-auth/react"
import { TbReportSearch } from 'react-icons/tb'
import { BiSolidPhoneCall, BiChat, BiSolidMicrophone } from 'react-icons/bi';
import LineChart from '../../components/Charts/LineChart';
import PieChart from '../../components/Charts/PieChart'
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FileUploader } from "react-drag-drop-files";
import { motion } from "framer-motion";
import { fadeIn } from "../../lib/fadein";
import Upload2 from '../../components/Upload2';
import Image from 'next/image';

export default function Dashboard() {
    const ChatFileTypes = ["txt"];
    const { data: session } = useSession()

    function handleSignOut() {
        signOut()
    }

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const [chatResponse, setChatResponse] = useState(chatResponseSample);

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
        <div className='flex flex-col justify-center items-center text-center gap-2 md:gap-4 p-4 bg-cyan-50'>
            <Head>
                <title>VoiceSentri | Dashboard</title>
            </Head>
            <div className="relative bg-white shadow-sm shadow-cyan-800 w-full h-12 flex justify-center items-center rounded-md">
                <h1 className='text-2xl md:text-3xl font-bold text-cyan-700'>Dashboard</h1>
                <a href='..' className='absolute right-4 md:right-8 text-cyan-400 hover:text-cyan-600 hover:underline'>
                    Back
                </a>
            </div>
            <div className='w-full h-auto flex justify-center items-center flex-col md:flex-row gap-2 md:gap-4' ref={ref}>
                <div className='w-full md:w-1/3 h-28 bg-white shadow-sm shadow-cyan-800 flex justify-center items-center flex-row gap-2 md:gap-4 rounded-md'>
                    <div className='flex justify-center items-center rounded-full bg-white shadow-md shadow-cyan-800 '>
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
                <div className='w-full md:w-1/3 h-28 bg-white shadow-sm shadow-cyan-800 flex justify-center items-center flex-row gap-2 md:gap-4 rounded-md'>
                    <div className='flex justify-center items-center rounded-full bg-white shadow-md shadow-cyan-800 '>
                        <BiChat className='text-cyan-600 h-20 w-20 p-4' />
                    </div>
                    <div className='w-2/3 h-full flex justify-center items-center flex-col gap-2'>
                        <h1 className='text-2xl font-bold text-cyan-600'>Chats Analyzed</h1>
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
                <div className='w-full md:w-1/3 h-28 bg-white shadow-sm shadow-cyan-800 flex justify-center items-center flex-row gap-2 md:gap-4 rounded-md'>
                    <div className='flex justify-center items-center rounded-full bg-white shadow-md shadow-cyan-800 '>
                        <TbReportSearch className='text-cyan-600 h-20 w-20 p-4' />
                    </div>
                    <div className='w-2/3 h-full flex justify-center items-center flex-col gap-2'>
                        <h1 className='text-2xl font-bold text-cyan-600'>Reports Generated</h1>
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

            {/* analyze calls and chats */}
            <div className='w-full h-full flex justify-center items-center flex-col md:flex-row gap-2 md:gap-4'>

                {/* calls */}
                <div className='w-full md:w-2/3 md:h-72 bg-white shadow-sm shadow-cyan-800 flex md:justify-between justify-center items-center flex-col gap-2 p-4 rounded-md'>

                    <div className='w-full flex justify-center items-center flex-col gap-2'>
                        <h1 className='text-cyan-600 font-bold text-2xl'>Analyze Calls</h1>
                        <p className='text-gray-500 font-md'>Get Your Call Sentiment Score!</p>
                    </div>
                    <Upload2 />
                </div>

                {/* chats */}
                <div className='w-full md:w-1/3 h-72 bg-white shadow-sm shadow-cyan-800 flex justify-between items-center md:self-start flex-col gap-2 p-4 rounded-md'>
                    <div className='w-full flex justify-center items-center flex-col gap-2'>
                        <h1 className='text-cyan-600 font-bold text-2xl'>Analyze Chats</h1>
                        <p className='text-gray-500 font-md'>Get Your Chat Sentiment Score!</p>
                    </div>
                    <FileUploader
                        handleChange={handleChat}
                        name="chat"
                        types={ChatFileTypes}
                        label="Drag & Drop your Chat file"
                        multiple={false}
                        required={true}
                        classes="h-full w-full border-2 border-gray-300 text-cyan-600 border-dashed  rounded-md"
                    />
                    <h3 className='text-sm text-gray-500'>Note:  Your chat is not saved but the results are saved for your future reference.</h3>
                </div>
            </div>


            {/* Graphs and Plots */}
            <div className='w-full h-full flex justify-center items-center flex-col md:flex-row gap-2 md:gap-4 '>
                <div className='w-full md:w-1/2 bg-white shadow-sm shadow-cyan-800 flex justify-center items-center flex-col gap-2 p-4 md:h-96 rounded-md'>
                    <h1 className='text-cyan-600 font-bold text-2xl'>Sentiment Score of Last Call Analyzed</h1>
                    <LineChart chartData={chartData} />
                </div>
                <div className='w-full md:w-1/2 bg-white shadow-sm shadow-cyan-800 flex justify-center items-center flex-col gap-2 p-4 md:h-96 rounded-md'>
                    <h1 className='text-cyan-600 font-bold text-2xl md:mt-12'>Sentiment Score of Last Chat Analyzed</h1>
                    <PieChart chartData={pieData} />
                </div>
            </div>

            {/* history and  */}
            <div className='w-full h-full flex justify-center items-center flex-col md:flex-row gap-2 md:gap-4'>

                {/* history */}
                <div className='w-full md:w-2/3 h-auto bg-white shadow-sm shadow-cyan-800 flex justify-start items-center flex-col gap-2 p-4 rounded-md'>
                    <div className="w-full">
                        <h1 className='text-cyan-600 font-bold text-2xl'>History</h1>
                        <div className="shadow rounded border-b border-gray-200 overflow-x-scroll md:overflow-hidden">
                            <table className="min-w-full bg-white ">
                                <thead className="bg-cyan-100 text-cyan-700">
                                    <tr>
                                        <th className="w-1/4 text-center py-3 px-4 uppercase font-semibold text-md">
                                            Date
                                        </th>
                                        <th className="w-1/4 text-center py-3 px-4 uppercase font-semibold text-md">
                                            Time
                                        </th>
                                        <th className="w-1/4 text-center py-3 px-4 uppercase font-semibold text-md">
                                            Sentiment Type
                                        </th>
                                        <th className="w-1/4 text-center py-3 px-4 uppercase font-semibold text-md">
                                            Result
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-cyan-800 font-semibold">
                                    {Array.isArray(reportData) && reportData.length > 0 && reportData.map((data, index) => {
                                        return (
                                            <tr key={index} className={index % 2 == 0 ? "bg-white" : "bg-cyan-50"}>
                                                <td className="w-1/4 text-center py-3 px-4">{data.date}</td>
                                                <td className="w-1/4 text-center py-3 px-4">{data.time}</td>
                                                <td className="w-1/4 text-center py-3 px-4 font-normal">
                                                    {data.sentimentType === 'Audio' ? (
                                                        <span className='bg-cyan-800 text-cyan-400 rounded-full px-2 py-1'>{data.sentimentType}</span>
                                                    ) : (
                                                        <span className='bg-cyan-600 text-cyan-200 rounded-full px-2 py-1'>{data.sentimentType}</span>
                                                    )}
                                                </td>
                                                <td className="w-1/4 text-center py-3 px-4">
                                                    <button className='border border-cyan-700 p-2 text-cyan-600 font-semibold hover:bg-cyan-700 hover:text-cyan-400 transition duration-300 rounded-md ease-in-out' onClick={handleResult}>
                                                        View Result
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    {Array.isArray(reportData) && reportData.length === 0 && (
                                        <tr>
                                            <td colSpan={4} className="w-1/4 text-center text-cyan-600 py-3 px-4">No Data Found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div className='w-full md:w-1/3 h-96 bg-white shadow-sm shadow-cyan-800 justify-between items-center md:self-start flex-col gap-2 p-4 rounded-md hidden md:block'>
                    <motion.div
                        variants={fadeIn("down", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.4 }}
                        className="w-full h-full"
                    >
                        <Image
                            src="/assets/dash.svg"
                            width={510}
                            height={510}
                            alt="Hero Image"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
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
    labels: ['01', '02', '03'],
    datasets: [{
        label: 'Hourly Steps Tracked',
        data: [324, 5643, 664],
        backgroundColor: [
            'rgba(21, 94, 117, 0.2)',
        ],
        borderColor: [
            'rgba(21, 94, 117, 1)',
        ],
        borderWidth: 1,

    }]
};

const pieData = {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [
        {
            label: 'Sentiment Score',
            data: [30, 40, 30],
            backgroundColor: [
                'rgba(56, 189, 248, 0.2)',
                'rgba(187, 37, 37, 0.2)',
                'rgb(16, 185, 129, 0.2)',
            ],
            borderColor: [
                'rgba(56, 189, 248, 1)',
                'rgba(187, 37, 37, 1)',
                'rgb(16, 185, 129, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const chatResponseSample = {
    "openai_response": "The overall sentiment of the conversation is positive and friendly. Speaker Aneesh asks for help from Speaker Aditya, who willingly offers assistance. Both speakers express gratitude and exhibit a light-hearted tone in their conversation. The key topics discussed are a potential group call, searching for teammates for a hackathon, planning for a friend's birthday, and restaurant suggestions. Speaker Aneesh mentions that he has friends who work in Django and can ask them to join Aditya's team. Aditya suggests various ideas for celebrating their friend Gargi's birthday, including going to a bookstore and having lunch at Punjab's Kitchen. They consider Asian and Italian cuisine for Gargi but also mention that good food is the primary consideration. Overall, both speakers engage in a positive and helpful conversation, focusing on assisting each other and planning activities.",
    "sentiment_scores": {
        "positive": "40%",
        "negative": "30%",
        "neutral": "30%"
    },
    "positive_words": [
        "1. free",
        "2. thanks",
        "3. nice",
        "4. good"
    ],
    "negative_words": [
        "1. none",
        "2. far",
        "3. change",
        "4. permission"
    ]
}