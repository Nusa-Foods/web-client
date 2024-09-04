import EventCard from "../components/page";

export default function EventPage() {
    return (
        <>
            <section>
                <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {/* Event Card */}
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />

                </div>
            </section>

        </>
    )
}