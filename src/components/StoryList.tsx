import { Avatar, ScrollShadow } from "@nextui-org/react";
import { Plus } from "lucide-react";
import React from "react";
import avt from '../../public/vercel.svg'

type StoryListProps = {
  orientation?: "horizontal" | "vertical";
  stories: Array<{ user: string, avatar: string, hasUnseenStory: boolean }>;
}

const StoryList = ({
  stories, orientation
}: StoryListProps) => {
  return (
    <ScrollShadow orientation={orientation} className={`border ${orientation === 'horizontal' ? "w-full h-fit" : "w-fit h-full"} rounded-xl bg-gray-600 shadow-lg grid-flow-col`} role="list">
      <div className={`grid gap-4 p-4 ${orientation === 'horizontal' ? "grid-flow-col auto-cols-max" : "grid-flow-row auto-rows-max"} shadow-lg`}>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="group relative cursor-pointer transition-all duration-300 ease-in-out before:transition-all before:duration-300 before:ease-in-out hover:before:opacity-100 peer-hover:before:opacity-100 before:opacity-0 before:absolute before:inset-0 before:bg-gradient-to-tr before:from-blue-500 before:to-yellow-300 before:rounded-full before:-z-10">
            <Avatar
              src={avt.src}
              className="w-14 h-14 bg-black border-2 transition-transform duration-300 ease-in-out group-hover:scale-105 peer-hover:scale-105"
            />
            <div className="peer absolute bottom-3 right-3.5 p-1 bg-none rounded-full">
              <Plus className="w-5 h-5 text-primary" />
            </div>
          </div>
          <span className="text-tiny">Add Story</span>
        </div>
        {stories.map((story, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <div
              className={`relative cursor-pointer transition-all duration-300 ease-in-out bg-gradient-to-tr hover:scale-105 rounded-full p-[1.5px] hover:p-0.5 ${!story.hasUnseenStory
                ? "bg-gradient-to-tr from-pink-500 to-yellow-500"
                : "bg-black hover:bg-gradient-to-tr hover:from-pink-500/50 hover:to-yellow-500/50"
                }`}
              onClick={() => {
                if (!story.hasUnseenStory) {
                  story.hasUnseenStory = false;
                }
              }}
            >
              <Avatar src={"https://img.freepik.com/free-vector/hand-drawn-nerd-logo-template_23-2149199407.jpg?semt=ais_hybrid"}
                className="w-14 h-14 bg-black" />
            </div>
            <span className="text-tiny shadow-lg">{story.user}</span>
          </div>
        ))}
      </div>
    </ScrollShadow>
  );
};

export default StoryList;
