import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import CommentSection from './Comments'
import { fn } from '@storybook/test'
import { ThreadProps } from './Thread';
import { CommentProps } from './Comments';
const Post = ({
    username,
    avatar,
    content,
    timestamp,
    likes,
    dark,
    Liked,
    Commented
}: ThreadProps & CommentProps) => {
    const [isLiked, setIsLiked] = React.useState(false);
    const [likesCount, setLikesCount] = React.useState(likes);
    const [isCommented, setIsCommented] = React.useState(Commented === 'closed' ? false : true);
    return (
        <div className={`w-full ${isCommented ? "h-full" : "h-screen"} grid space-y-4 place-content-center place-items-center grid-flow-row auto-rows-max  rounded-xl shadow-lg p-3 post ${dark ? "text-white" : ""}`}>
            <Card className={`max-w-xl w-full grid grid-flow-row ${dark ? "bg-gray-900 text-white" : "bg-white"}`}>
                <CardHeader className="grid grid-rows-1 grid-flow-col items-center gap-3">
                    <Avatar src={avatar} size="sm" className={`w-8 h-8 object-contain ${dark ? "bg-white" : "bg-black"}`} />
                    <div className="">
                        <p className={`text-small font-semibold ${dark ? "text-white" : "text-black"}`}>{username}</p>
                        <p className="text-tiny text-default-500">{timestamp}</p>
                    </div>
                </CardHeader>
                <CardBody className={`${dark ? "text-white" : "text-black"}`}>
                    <p>{content}</p>
                </CardBody>
                <CardFooter className=" gap-1 p-1 sm:p-2 grid items-center justify-start sm:grid-flow-col sm:grid-rows-1">
                    <Button size="sm" variant="light" className={`outline-none ${dark ? "text-white" : "text-black"}`} endContent={<Heart className={`w-4 h-4 ${isLiked ? "text-pink-600 fill-pink-600 animate-smooth-bounce" : "text-black"} ${dark ? "text-white" : "text-black"}`} />}
                        onPress={() => {
                            setIsLiked(!isLiked);
                            setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
                            Liked?.(!isLiked)
                        }}>
                        {likesCount}
                    </Button>
                    <Button size="sm" variant="light" className={`outline-none ${dark ? "text-white" : "text-black"}`} endContent={<MessageCircle className={`w-4 h-4 ${dark ? "text-white" : "text-black"}`} />} onPress={() => {
                        setIsCommented(!isCommented);
                        if (Commented === 'open' && isCommented) {
                            Commented = 'closed'
                        } else {
                            Commented = 'open'
                        }
                    }}>
                        Comments
                    </Button>
                    <Button size="sm" variant="light" className={`outline-none ${dark ? "text-white" : "text-black"}`} endContent={<Share2 className={`w-4 h-4 min-w-4 ${dark ? "text-white" : "text-black"}`} />}>
                        Share
                    </Button>
                </CardFooter>
            </Card>
            <CommentSection
                clicked={isCommented}
                comments={[
                    { user: "Shoeb", avatar: avatar, content: "Hi, I am Shoeb", timestamp: "3 hours ago" },
                    { user: "Syed", avatar: avatar, content: "Hi, I am Me", timestamp: "2 hours ago" }
                ]}
                onAddComment={fn()}
            // className={`post ${dark ? "text-white" : "text-black"}`}
            />
        </div>
    )
}

export default Post