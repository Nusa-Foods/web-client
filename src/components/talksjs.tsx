"use client";
import { useChat } from "@/contexts/chat";
import { useEffect, useState } from "react";
import Talk from "talkjs";
import { useCookies } from "next-client-cookies";
import { verifyTokenJose } from "@/helpers/jwt";
import { UserType } from "@/type";

function ChatComponent() {
    const { isChatOpen, toggleChat, userId } = useChat();
    const [currentUser, setCurrentUser] = useState<UserType | null>(null);
    const [chatPartner, setChatPartner] = useState<UserType | null>(null);
    const cookies = useCookies();

    useEffect(() => {
        const getCurrentUser = async () => {
            const token = cookies.get("Authorization")?.split(" ")[1];
            const currentUserId = await verifyTokenJose(token as string);
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/user/${currentUserId}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await response.json();
            setCurrentUser(data);
        };

        getCurrentUser();
    }, []);

    useEffect(() => {
        const getChatPartner = async () => {
            if (!userId) {
                // Set a default user if no userId is passed
                setChatPartner({
                    _id: "default",
                    username: "Support Bot",
                    email: "support@default.com",
                    imageUrl: "/cheff.svg",
                    welcomeMessage: "Hai! Bagaimana saya bisa membantu Anda hari ini??",
                    role: "customer service",
                });
                return;
            }

            // Fetch the specific chat partner if userId exists
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/user/${userId}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await response.json();
            setChatPartner(data);
        };

        getChatPartner();
    }, [userId]);

    useEffect(() => {
        if (!isChatOpen || !currentUser || !chatPartner) return;

        Talk.ready.then(() => {
            const me = new Talk.User({
                id: currentUser._id as string,
                name: currentUser.username as string,
                email: currentUser.email,
                photoUrl: currentUser.imageUrl as string,
                welcomeMessage: "Hai! Bagaimana saya bisa membantu Anda hari ini?",
                role: "user",
            });

            const other = new Talk.User({
                id: chatPartner._id as string,
                name: chatPartner.username as string,
                email: chatPartner.email,
                photoUrl: chatPartner.imageUrl as string,
                welcomeMessage: "Hai! Bagaimana saya bisa membantu Anda hari ini?",
                role: "user",
            });

            const session = new Talk.Session({
                appId: "tlrwYW5F",
                me: me,
            });

            const conversation = session.getOrCreateConversation(
                Talk.oneOnOneId(me, other)
            );
            conversation.setParticipant(me);
            conversation.setParticipant(other);

            const inbox = session.createInbox({
                selected: conversation,
                showChatHeader: true,
            });

            inbox.mount(document.getElementById("talkjs-container"));
        });
    }, [isChatOpen, currentUser, chatPartner]);

    return (
        <>
            {isChatOpen ? (
                <button
                    className="fixed bottom-[500px] right-0 p-3 bg-gray-300 text-gray-700 mr-3 rounded-t-md delay-500"
                    onClick={toggleChat}
                >
                    Tutup Obrolan
                </button>
            ) : (
                <button
                    className="fixed bottom-0 right-0 p-3 bg-gray-700 text-gray-300 rounded-tl-md hidden"
                    onClick={toggleChat}
                >
                    Buka Obrolan
                </button>
            )}

            {isChatOpen && (
                <div
                    id="talkjs-container"
                    className="chat-container fixed bottom-0 right-0 h-[500px] w-[400px] z-[9999]"
                />
            )}
        </>
    );
}

export default ChatComponent;
