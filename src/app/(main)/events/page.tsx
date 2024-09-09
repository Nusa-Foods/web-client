"use client";

import EventCard from "@/components/EventCard";
import { EventType } from "@/type";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function EventPage() {
    const [events, setEvents] = useState<EventType[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    // Fetch events function
    async function fetchEvents(reset: boolean = false) {
        try {
            setLoading(true);

            if (reset) {
                setEvents([]);
                setPage(1);
                setHasMore(true);
            }

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/event?page=${reset ? 1 : page}`,
                {
                    cache: "no-store",
                    credentials: "include",
                }
            );

            if (!res.ok) throw await res.json();

            const data: EventType[] = await res.json();
            console.log(data, "data events>>>");

            if (data.length === 0) {
                setHasMore(false);
                console.log(data.length, '>>>')
            } else {
                console.log(data.length, '>>> ke 2')
                setEvents((prev) => (reset ? [...data] : [...prev, ...data]));
                setPage((prev) => prev + 1);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    // Trigger the first fetch on component mount
    useEffect(() => {
        console.log("use effect triggered");
        fetchEvents();
    }, []);

    return (
        <section className="bg-[#F9FAFB] p-5">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <div className="">
                {loading && events.length === 0 ? (
                    <div className="flex text-center justify-center items-center h-screen font-bold text-lg">
                        <div>Loading ...</div>
                    </div>
                ) : (
                    <InfiniteScroll
                        dataLength={events.length}
                        next={() => fetchEvents()}
                        hasMore={hasMore}
                        loader={
                            hasMore && (
                                <div className="flex text-center justify-center items-center h-screen font-bold text-lg">
                                    Loading more events...
                                </div>
                            )
                        }
                        endMessage={
                            !hasMore && (
                                <p style={{ textAlign: "center" }}>
                                    <b>No more events</b>
                                </p>
                            )
                        }
                    >
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                            {events.map((el, index) => (
                                <EventCard key={index} event={el} />
                            ))}
                        </div>
                    </InfiniteScroll>
                )}
            </div>
        </section>
    );
}
