import Link from "next/link";

export default function EventCard() {
    return (
        <Link
            href="/events/details"
            className="bg-white p-6 rounded-md shadow-md max-w-sm mx-auto"
        >
            <img
                src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F814170669%2F121703163141%2F1%2Foriginal.20240725-031700?w=400&auto=format%2Ccompress&q=75&sharp=10&s=08cddbcdb871eae838e04da49a670f25"
                alt="Event Image"
                className="w-full h-40 object-cover rounded-md mb-4"
            />

            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">Event Title 3</h3>
            </div>
            <p className="text-gray-600 mb-2 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting,
            </p>
            <p className="text-gray-600 mb-2 text-sm">
                <b>Date:</b> November 20, 2024
            </p>

            <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600 text-sm">
                    <b>Location:</b> Surabaya, Indonesia
                </p>
                <button className="bg-custom-brown-3 text-custom-brown-2 font-medium py-1 px-3 rounded-md text-xs hover:bg-custom-brown-1 hover:text-white focus:outline-none ">
                    See Location
                </button>
            </div>
            <div className="flex justify-between">
                <span className=" p-2 bg-custom-brown-3 text-custom-brown-2 text-sm font-medium rounded-full">
                    <b>Quota:</b> 100 slots
                </span>
                <button className="bg-custom-brown-2 text-white font-medium py-2 px-4 rounded-md text-sm hover:bg-custom-brown-1 focus:outline-none">
                    Join Event
                </button>
            </div>
        </Link>
    );
}
