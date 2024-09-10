"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import showToast from "@/utils/toast";
import { useRouter } from "next/navigation";

import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function CreateRecipe() {
    const Editor = useMemo(
        () => dynamic(() => import("@/components/Editor"), { ssr: false }),
        []
    );
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [bannerUrl, setBannerUrl] = useState("");
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [content, setContent] = useState<string | undefined>(undefined);

    const router = useRouter();
    const handleEditorChange = (newContent: string) => {
        setContent(newContent);
    };
    // Define motion variants for the animation
    const slideVariants = {
        hidden: { opacity: 0, x: 100, scale: 0.9 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.2,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
        exit: {
            opacity: 0,
            x: -100,
            scale: 0.9,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
            },
        },
    };

    useEffect(() => {
        // Load Cloudinary widget script dynamically
        const script = document.createElement("script");
        script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const openCloudinaryWidget = (setUrl: (url: string) => void) => {
        if (window.cloudinary) {
            const widget = window.cloudinary.createUploadWidget(
                {
                    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
                    uploadPreset: "nusa-foods",
                },
                (error: any, result: any) => {
                    if (!error && result && result.event === "success") {
                        setUrl(result.info.secure_url);
                        showToast({
                            message: "Image uploaded successfully!",
                            type: "success",
                        });
                    }
                }
            );
            widget.open();
        }
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        if (!content)
            return showToast({
                message: "Isi semua kolom yang diperlukan terlebih dahulu.",
            });

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/recipe`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title,
                        description,
                        imgUrl,
                        bannerUrl,
                        guide: content,
                    }),
                    credentials: "include",
                }
            );
            const data = await response.json();

            if (response.ok) {
                showToast({
                    message: "Success post your recipe",
                    type: "success",
                });
                router.push("/discover");
            } else {
                showToast({
                    message: data.message,
                    type: "error",
                });
            }
        } catch (err) {
            console.error("Error during create recipe:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col xl:grid xl:grid-cols-2 justify-center items-center py-10 px-10 md:px-30">
            {/* Static Title */}
            <div className="md:w-full lg:w-full xl:w-1/2 mb-10">
                <h1 className="text-3xl font-bold mb-4 text-center">
                    Create Your Recipe
                </h1>
            </div>

            {/* Form with Animated Steps */}
            <motion.div className="w-full md:w-full lg:w-full xl:w-full">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            variants={slideVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="w-full p-6 bg-white shadow-md rounded-lg"
                        >
                            <h2 className="text-xl font-bold mb-4">
                                Step 1: Title and Description
                            </h2>
                            <div className="mb-4">
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Title
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="text"
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Recipe Title"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Description
                                </label>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type="text"
                                    id="description"
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    placeholder="Recipe Description"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                                />
                            </div>

                            <div className="flex justify-end mt-4">
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                >
                                    Next
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            variants={slideVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="w-full p-6 bg-white shadow-md rounded-lg"
                        >
                            <h2 className="text-xl font-bold mb-4">
                                Step 2: Image & Banner URLs
                            </h2>

                            <div className="flex flex-col justify-center items-center xl:flex-row xl:gap-10">
                                <div className="mb-4">
                                    {imgUrl && (
                                        <img src={imgUrl} className="w-40" />
                                    )}
                                    <label
                                        htmlFor="imgUrl"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Image URL
                                    </label>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            openCloudinaryWidget(setImgUrl)
                                        }
                                        className="px-4 py-2 mt-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                                    >
                                        Upload Image
                                    </button>
                                </div>

                                <div className="mb-4">
                                    {bannerUrl && (
                                        <img src={bannerUrl} className="w-40" />
                                    )}
                                    <label
                                        htmlFor="bannerUrl"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Banner URL
                                    </label>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            openCloudinaryWidget(setBannerUrl)
                                        }
                                        className="px-4 py-2 mt-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                                    >
                                        Upload Banner
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between mt-4">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                                >
                                    Previous
                                </button>
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                >
                                    Next
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            variants={slideVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="w-full p-6 bg-white shadow-md rounded-lg"
                        >
                            <h2 className="text-xl font-bold mb-4">
                                Step 3: Submit Recipe
                            </h2>
                            <Editor
                                onChange={() => {}}
                                initialContent={undefined}
                                editable={true}
                                onGetContent={handleEditorChange} // Pass callback
                            />
                            {/* ini cara save nya jangan ilang plis */}
                            {/* <Editor
                                onChange={() => {}}
                                initialContent={content}
                                editable={false}
                                // onGetContent={handleEditorChange} // Pass callback
                            /> */}

                            <div className="flex justify-between mt-4">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                                >
                                    Previous
                                </button>
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
