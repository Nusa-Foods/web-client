"use client"

import revalidate from "@/actions";
import { EventType } from "@/type";
import showToast from "@/utils/toast";
import Link from "next/link";
import { MouseEvent } from "react";

type EventCardProps = {
    eventDetail: EventType;
    onJoinSuccess: (updatedEvent: EventType) => void;
};

export default function EventCard({ eventDetail, onJoinSuccess }: EventCardProps) {
    const handleJoinEvent = async (
        event: MouseEvent<HTMLButtonElement>,
    ) => {
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
                    message: "Success Join Event",
                    type: "success",
                });
                revalidate();

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

    return (
        <div
            className="bg-white p-6 rounded-md shadow-md max-w-sm mx-auto flex flex-col justify-between"
        >
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
                <b>Date:</b> November 20, 2024
            </p>

            <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600 text-sm">
                    <b>Location:</b> Surabaya, Indonesia
                </p>
                <button className="bg-custom-brown-3 text-custom-brown-2 font-medium py-1 px-3 rounded-md text-xs hover:bg-custom-brown-1 hover:text-white focus:outline-none ">
                    See on Maps
                </button>
            </div>
            <div className="flex justify-between">
                <span className=" p-2 bg-custom-brown-3 text-custom-brown-2 text-sm font-medium rounded-full">
                    <b>Quota:</b> {eventDetail.quota ? eventDetail.quota : 0} {eventDetail.quota > 1 ? "slots" : "slot"}
                </span>
                <button
                    onClick={handleJoinEvent}
                    className="bg-custom-brown-2 text-white font-medium py-2 px-4 rounded-md text-sm hover:bg-custom-brown-1 focus:outline-none">
                    Join Event
                </button>
            </div>
        </div>
    );
}
