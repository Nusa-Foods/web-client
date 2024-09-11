"use client";

import EventCard from "@/components/EventCard";
import ProfilDropdown from "@/components/ProfilDropdown";
import { verifyTokenJose } from "@/helpers/jwt";
import { EventType, UserType } from "@/type";
import { useCookies } from "next-client-cookies";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function EventPage() {
    const [events, setEvents] = useState<EventType[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const cookies = useCookies();
    const [user, setUser] = useState<UserType | null>(null);
    const [currentUserId, setCurrentUserId] = useState<string>("");

    const getCurrentUserId = async () => {
        const token = cookies.get("Authorization")?.split(" ")[1];
        if (token) {
            const userInfo = await verifyTokenJose(token);
            setCurrentUserId(userInfo);
        }
    };

    const getUser = async (id: string) => {
        if (!id) return;
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/user/${id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.ok) {
                const data = await response.json();
                setUser(data);
            } else {
                console.error("Failed to fetch user data");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            await getCurrentUserId();
        };

        fetchUserData();
    }, []);

    useEffect(() => {
        if (currentUserId) {
            getUser(currentUserId);
        }
    }, [currentUserId]);

    // console.log("ini user", user);

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
                // `${process.env.NEXT_PUBLIC_BASE_URL}/event?page=${page}`,
                {
                    cache: "no-store",
                    credentials: "include",
                }
            );

            if (!res.ok) throw await res.json();

            const data: EventType[] = await res.json();
            // console.log(data, "data events>>>");

            if (data.length === 0) {
                setHasMore(false);
            } else {
                // setEvents((prev) => (reset ? [...data] : [...prev, ...data]));
                setEvents((prev) => ([...data]));
                setPage((prevPage) => prevPage + 1);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    // Trigger the first fetch on component mount
    useEffect(() => {
        fetchEvents(true);
    }, []);

    const handleJoinSuccess = (updatedEvent: EventType) => {
        setEvents((prevEvents) =>
            prevEvents.map((event) =>
                event.slug === updatedEvent.slug ? updatedEvent : event
            )
        );
        fetchEvents();
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row  bg-[#F9FAFB] w-full">
            <div className="w-full">
                <main className="flex flex-col">
                    {/* navbar */}
                    <div className="flex mb-6 pt-8 px-4 justify-between">
                        <div className="flex flex-row items-center gap-4">
                            <img
                                src="https://www.chefgpt.xyz/assets/icons/calendar.webp"
                                alt="Nusa Food Discover"
                                className="w-8 h-8"
                            />
                            <h1 className="text-3xl font-bold">
                                Event
                            </h1>
                        </div>
                        <ProfilDropdown />
                    </div>

                    {/* Banner */}
                    <div className="h-48 sm:h-48 md:h-48 lg:h-64 static relative">
                        <img
                            src="banner8.jpg"
                            alt="banner"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0  flex flex-col justify-center items-center pl-4 pr-4">
                            <p className="text-lg text-black sm:text-sm  md:text-xl lg:text-2xl font-bold capitalize"
                                style={{
                                    textShadow: '4px 4px 4px rgba(0, 0, 0, 0.6)'
                                }}>
                                Ikuti Event menarik Nusa Food!
                            </p>
                            <p className="text-lg text-black sm:text-sm  md:text-xl lg:text-2xl font-bold capitalize"
                                style={{
                                    textShadow: '4px 4px 4px rgba(100, 100, 100, 100)',
                                }}>

                            </p>
                            <p className=" w-4/5 text-sm text-black text-center sm:text-base md:text-sm lg:text-xl text-black"
                                style={{
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'
                                }}>
                                Jangan lewatkan kesempatan untuk mendapatkan inspirasi kuliner yang segar dan bermanfaat untuk kesehatanmu!
                            </p>
                        </div>
                    </div>


                    <div className="container mx-auto px-4 mt-10">
                        <main className="flex flex-col">



                            <div className="container mx-auto px-4">
                                <main className="flex flex-col items-center">
                                    <div className="text-center mb-10 w-full">
                                        <h2 className="flex justify-center text-3xl font-bold mb-8">Event-Event Mendatang</h2>
                                        <p>Ikuti event-event menarik untuk memperdalaman wawasanmu mengenai resep-resep sehat, menarik dan ktivitas event lainnya!</p>
                                    </div>
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
                                                        Loading event lainnya...
                                                    </div>
                                                )
                                            }
                                            endMessage={
                                                !hasMore && (
                                                    <p style={{ textAlign: "center" }}>
                                                        <b>Tidak ada event</b>
                                                    </p>
                                                )
                                            }
                                        >
                                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                                                {events.map((el, index) => (
                                                    <EventCard
                                                        key={index}
                                                        eventDetail={el}
                                                        onJoinSuccess={handleJoinSuccess}
                                                        user={user}
                                                    />
                                                ))}
                                            </div>
                                        </InfiniteScroll>
                                    )}

                                </main>
                            </div>






                        </main>
                    </div>
                </main>
            </div>
        </div>
    );
}
