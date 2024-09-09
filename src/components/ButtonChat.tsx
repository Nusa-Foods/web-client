"use client";
import { useChat } from "@/contexts/chat";

export default function ButtonChat({ userId }: { userId: string }) {
    const { toggleChat, setUserId, openChat } = useChat();

    const handleClick = () => {
        console.log(userId);
        setUserId(userId); // Set the userId in the chat context
        setTimeout(() => {
            openChat();
        }, 550);
    };

    return (
        <div
            className="text-center p-2 bg-custom-brown-3 hover:bg-custom-brown-1 text-custom-brown-1 hover:text-custom-brown-3 rounded-md hover:cursor-pointer"
            onClick={handleClick}
        >
            Chat me
        </div>
    );
}
