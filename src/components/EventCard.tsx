import { EventType } from "@/type";
import Link from "next/link";

export default function EventCard({ event }: { event: EventType }) {
    return (
        <Link
            href="/events/details"
            className="bg-white p-6 rounded-md shadow-md max-w-sm mx-auto flex flex-col justify-between"
        >
            <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-40 object-cover rounded-md mb-4"
            />

            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{event.title}</h3>
            </div>
            <p className="text-gray-600 mb-2 text-sm">
                {event.description}
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
                    <b>Quota:</b> {event.quota ? event.quota : 0} {event.quota > 1 ? "slots" : "slot"}
                </span>
                <button className="bg-custom-brown-2 text-white font-medium py-2 px-4 rounded-md text-sm hover:bg-custom-brown-1 focus:outline-none">
                    Join Event
                </button>
            </div>
        </Link>
    );
}
