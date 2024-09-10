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
            className="text-center p-1 bg-custom-brown-1 hover:bg-custom-brown-3 text-custom-brown-3 hover:text-custom-brown- rounded-md hover:cursor-pointer"
            onClick={handleClick}
        >
            Chat with me
        </div>
    );
}
