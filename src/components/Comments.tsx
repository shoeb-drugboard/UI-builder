// components/CommentSection.tsx
import { Input, Avatar, Button } from "@nextui-org/react";
// import { SendHorizonalIcon } from "lucide-react";
import { useState } from "react";

export type CommentProps = {
    comments: Array<{
        user: string;
        avatar: string;
        content: string;
        timestamp: string;
    }>,
    onAddComment: (comment: string) => void | { fn: () => void };
    clicked?: boolean;
    className?: string;
}
const CommentSection = ({
    comments,
    onAddComment,
    clicked,
    className
}: CommentProps) => {
    const [newComment, setNewComment] = useState("");
    const [totalComments, setTotalComments] = useState(comments.length);
    const [commentList, setCommentList] = useState([...comments]);
    return (
        <div className={`space-y-4 ${clicked ? "block" : "hidden"} ${className}`}>
            <div className="flex justify-between items-center">
                <span className="text-sm text-default-500">{totalComments} Comments</span>
            </div>
            <div className="grid gap-2 items-center sm:flex">
                <Avatar src="https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid" size="sm" />
                <Input
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    capture="user"
                    className="flex-grow"
                    onKeyDown={
                        (e) => {
                            if (e.key === "Enter" && newComment.trim() !== "") {
                                onAddComment(newComment);
                                setCommentList((prev) => ([...prev, {
                                    user: "You",
                                    avatar: "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid",
                                    content: newComment,
                                    timestamp: "Just now"
                                }]));
                                setTotalComments(prev => prev + 1);
                                setNewComment("");
                            }
                        }
                    }
                    endContent={
                        <Button size="sm" variant="light" onPress={() => {
                            if (newComment.trim() !== "") {
                                onAddComment(newComment);
                                setCommentList((prev) => ([...prev, {
                                    user: "You",
                                    avatar: "https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid",
                                    content: newComment,
                                    timestamp: "Just now"
                                }]));
                                setTotalComments(prev => prev + 1);
                                setNewComment("");
                            }
                        }}>
                            Post
                        </Button>
                    }
                />
            </div>
            <div className="flex flex-col-reverse text-black">
                {commentList.map((comment, index) => (
                    <div key={index} className={`grid grid-flow-col gap-2 w-fit max-w-full my-2`}>
                        <Avatar src={comment.avatar} size="sm" className="bg-black border" />
                        <div className={`bg-default-100 rounded-lg px-2 py-1 w-fit  ${className}`} id="post" data-testid="post">
                            <p className="text-small font-semibold">{comment.user}</p>
                            <p className="text-small">{comment.content}</p>
                            <p className="text-tiny text-default-500">{comment.timestamp}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentSection;