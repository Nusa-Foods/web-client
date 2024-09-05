import EventCard from "@/components/EventCard";

export default function EventPage() {
    return (
        <>
            <section className="bg-[#F9FAFB] p-5">
                <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
    );
}
