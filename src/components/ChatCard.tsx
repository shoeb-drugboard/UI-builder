import React from 'react'
import Image from 'next/image'
import { cn } from '@/utils/classes';
import { Button } from '@nextui-org/react';
import { SendIcon } from 'lucide-react';
import img from '@/public/globe.svg'

interface Message {
    id: number;
    text: string;
    sender: string;
    avatar: string;
}
const messages: Message[] = [
    {
        id: 1,
        text: "Hey Joe! I think I found a bug!",
        sender: "Hannah",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d"
    },
    {
        id: 2,
        text: "Oh wow really? Could you show me a screenshot about what happened?lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        sender: "Joe",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d"
    },
    {
        id: 3,
        text: "Sure!! One sec...",
        sender: "Hannah",
        avatar: ""
    },
];

const ChatCard = ({ className }: { className?: string }) => {
    return (
        <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-4 w-full min-h-full', className)}>
            <div className="flex flex-col justify-between items-start h-full bg-white rounded-xl p-4 shadow-sm md:col-span-2">
                <h3 className="font-semibold pt-6 text-black">Chat with Hannah</h3>
                <div className="space-y-4">
                    {messages.map((message) => (
                        <div key={message.id} className="flex gap-3">
                            <Image
                                src={img.src}
                                alt={message.sender}
                                className="w-8 h-8 rounded-full text-xs"
                                width={32}
                                height={32}
                            />
                            <div className="bg-gray-800 text-white rounded-lg p-3 max-w-[80%]">
                                <p className="text-sm">{message.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex gap-2 w-full">
                    <input
                        type="text"
                        placeholder="Send your message..."
                        className="rounded-lg border border-gray-200` text-black px-4 py-2 text-sm w-[80%]"
                    />
                    <Button className="p-2 bg-black text-white rounded-lg">
                        <SendIcon size={24} />
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default ChatCard