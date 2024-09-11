"use client"

import revalidate from "@/actions";
import { EventType, UserType } from "@/type";
import showToast from "@/utils/toast";
import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";

type EventCardProps = {
    eventDetail: EventType;
    onJoinSuccess: (updatedEvent: EventType) => void;
    user: UserType | null
};

export default function EventCard({ eventDetail, onJoinSuccess, user }: EventCardProps) {
    const [status, setStatus] = useState(false);
    // console.log(eventDetail.title, status, '>>>>')

    const checkInclude = () => {
        if (user?.event && Array.isArray(user.event)) {
            setStatus(user.event.includes(eventDetail._id));
        }
    };

    useEffect(() => {
        checkInclude();
    }, [user]);

    const handleJoinEvent = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/event/${eventDetail.slug}/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );
            const data = await response.json();

            if (response.ok) {
                showToast({
                    message: "Berhasil Daftar Event",
                    type: "success",
                });
                revalidate();


                setStatus(true);
                const updatedEvent = { ...eventDetail, quota: eventDetail.quota - 1 };
                onJoinSuccess(updatedEvent);
            } else {
                showToast({
                    message: data.message,
                    type: "error",
                });
            }
        } catch (err) {
            console.error("Error during join event:", err);
        }
    };

    const handleCancelEvent = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/event/${eventDetail.slug}/cancel`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );
            const data = await response.json();

            if (response.ok) {
                showToast({
                    message: "Berhasil Membatalkan Mengikuti Event",
                    type: "success",
                });
                revalidate();


                setStatus(false);
                const updatedEvent = { ...eventDetail, quota: eventDetail.quota + 1 };
                onJoinSuccess(updatedEvent);
            } else {
                showToast({
                    message: data.message,
                    type: "error",
                });
            }
        } catch (err) {
            console.error("Error during cancel join event:", err);
        }
    };

    return (
        <div className="bg-white p-6 rounded-md shadow-md max-w-sm mx-auto w-full h-auto flex flex-col">
            <img
                src={eventDetail.imageUrl}
                alt={eventDetail.title}
                className="w-full h-40 object-cover rounded-md mb-4"
            />

            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{eventDetail.title}</h3>
            </div>
            <p className="text-gray-600 mb-2 text-sm">
                {eventDetail.description}
            </p>
            <p className="text-gray-600 mb-2 text-sm">
                <b>Tanggal:</b> {eventDetail.date}
            </p>

            <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600 text-sm">
                    <b>Lokasi:</b> {eventDetail.location}
                </p>
                <button className="bg-custom-brown-3 text-custom-brown-2 font-medium py-1 px-3 rounded-md text-xs hover:bg-custom-brown-1 hover:text-white focus:outline-none ">
                    Lihat di maps
                </button>
            </div>
            <div className="flex justify-between">
                <span className=" p-2 bg-custom-brown-3 text-custom-brown-2 text-sm font-medium rounded-full">
                    <b>Kuota:</b> {eventDetail.quota ? eventDetail.quota : 0} {eventDetail.quota > 1 ? "slots" : "slot"}
                </span>

                {user ? (
                    status ? (
                        <button
                            className="bg-red-500 text-white font-medium px-4 py-2 rounded-md"
                            onClick={handleCancelEvent}
                        >
                            Batal Daftar
                        </button>
                    ) : (
                        <button
                            className="bg-custom-brown-1 text-custom-brown-4 font-medium px-4 py-2 rounded-md"
                            onClick={handleJoinEvent}
                        >
                            Daftar Event
                        </button>
                    )
                ) : (
                    <button
                        className="bg-custom-brown-3 text-custom-brown-1 font-medium px-4 py-2 rounded-md" onClick={handleJoinEvent}
                    >
                        Daftar Event
                    </button>
                )}
            </div>
        </div>
    );
}
