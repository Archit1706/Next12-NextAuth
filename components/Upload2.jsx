import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/fadein";
import { BsFillImageFill, BsFiletypeMp3 } from "react-icons/bs";
import { BiSolidMicrophone } from "react-icons/bi";
import { FileUploader } from "react-drag-drop-files";
import { AiOutlineClose } from "react-icons/ai";
import AudioRecord from "./AudioRecord";

const Upload2 = () => {
    const fileTypes = ["wav"];
    const [modal1IsOpen, setIsOpen1] = useState(false);
    const [modal2IsOpen, setIsOpen2] = useState(false);

    const openModal1 = () => {
        setIsOpen1(true);
    };

    const closeModal1 = () => {
        setIsOpen1(false);
    };

    const openModal2 = () => {
        setIsOpen2(true);
    };

    const closeModal2 = () => {
        setIsOpen2(false);
    };

    const handleChange = async (file) => {
        console.log(file);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch(
                "https://sih-node-backend.architrathod1.repl.co/",
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (response.ok) {
                // Assuming the server responds with JSON data
                const data = await response.json();
                setCallResponse(data);
                console.log("Response:", data);
            } else {
                console.error("File upload failed.");
                // Handle error as needed
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            // Handle error as needed
        }
    };

    return (
        <div
            id="upload"
            className={`${styles.container} flex flex-col justify-center items-center w-full gap-4 text-center relative`}
        >
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
                <div
                    className="group w-11/12 md:w-1/2 h-24 md:h-36 bg-white/60 shadow-cyan-100 text-cyan-600 hover:text-cyan-800 shadow-md border border-cyan-200 hover:border-cyan-400  px-2 rounded-md text-center flex justify-center items-center flex-col text-lg tracking-tight font-semibold hover:scale-105 transition-all duration-200 cursor-pointer gap-2"
                    onClick={openModal1}
                >
                    <p className="group-hover:animate-bounce">
                        <BsFiletypeMp3 className="h-6 w-6" />
                    </p>
                    Upload from your device
                </div>

                {/* <div
                    className="group w-11/12 md:w-1/3 h-24 md:h-36 bg-white/60 shadow-cyan-100 text-cyan-600 hover:text-cyan-800 px-2 rounded-md text-center flex justify-center items-center flex-col shadow-md border border-cyan-200 hover:border-cyan-400 text-lg tracking-tight font-semibold hover:scale-105 transition-all duration-200 cursor-pointer gap-2"
                    onClick={openModal2}
                >
                    <p className="group-hover:animate-bounce">
                        <BiSolidMicrophone className="h-6 w-6" />
                    </p>
                    Record from your Mic
                </div> */}
            </div>

            <Modal
                ariaHideApp={false}
                className="aspect-square w-screen md:h-[512px] md:w-[512px] md:mx-auto md:my-auto flex items-center justify-center"
                isOpen={modal1IsOpen}
                onRequestClose={closeModal1}
                contentLabel="Upload or Capture an Image"
            >
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.4 }}
                    id="modal"
                    className="w-full rounded-md bg-cyan-400 p-1 shadow-lg shadow-gray-400 h-40 flex justify-center items-center"
                >
                    <div className=" relative flex flex-col h-full w-full bg-white/50 items-center justify-center">
                        <FileUploader
                            handleChange={handleChange}
                            name="file"
                            types={fileTypes}
                            label="Drag & Drop your files here"
                            multiple={false}
                            required={true}
                            className="h-full w-full border-2 border-gray-300 border-dashed rounded-md"
                        />
                        <div className="absolute top-2 right-2">
                            <button
                                className="border-none w-10/12 bg-white/60 shadow-gray-300 text-gray-600 p-2 rounded-md text-center flex justify-center items-center flex-col hover:shadow-md text-xl tracking-tight font-semibold hover:scale-105 hover:text-black transition-all duration-200"
                                onClick={closeModal1}
                            >
                                <AiOutlineClose className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </Modal>
            {/* <Modal
                ariaHideApp={false}
                className="aspect-square w-screen md:h-[512px] md:w-[512px] md:mx-auto md:my-auto flex items-center justify-center"
                isOpen={modal2IsOpen}
                onRequestClose={closeModal2}
                contentLabel="Capture an Image"
            >
                <motion.div
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.4 }}
                    id="modal"
                    className="w-full rounded-md bg-cyan-400 p-1 shadow-lg shadow-gray-400 h-40 flex justify-center items-center"
                >
                    <div className="relative flex flex-col h-full w-full bg-white/50 items-center justify-center">
                        <AudioRecord />
                        <div className="absolute top-2 right-2">
                            <button
                                className="border-none w-10/12 bg-white/60 shadow-gray-300 text-gray-600 p-2 rounded-md text-center flex justify-center items-center flex-col hover:shadow-md text-xl tracking-tight font-semibold hover:scale-105 hover:text-black transition-all duration-200"
                                onClick={closeModal2}
                            >
                                <AiOutlineClose className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </Modal> */}
        </div>
    );
};

export default Upload2;
