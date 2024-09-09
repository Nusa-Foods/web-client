// contexts/chat.tsx
"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface ChatContextProps {
    isChatOpen: boolean;
    toggleChat: () => void;
    openChat: () => void;
    userId: string | null;
    setUserId: (userId: string | null) => void;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [userId, setUserId] = useState<string | null>(null);

    const toggleChat = () => setIsChatOpen((prev) => !prev);
    const openChat = () => setIsChatOpen(true);

    return (
        <ChatContext.Provider
            value={{ isChatOpen, toggleChat, openChat, userId, setUserId }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => {
    const context = useContext(ChatContext);
    if (context === undefined) {
        throw new Error("useChat must be used within a ChatProvider");
    }
    return context;
};
