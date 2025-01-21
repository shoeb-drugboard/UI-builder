import { cn } from '@/utils/classes'
import { Button, User } from '@nextui-org/react'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'
type InfoCardProps = {
    heading?: string,
    task?: string,
    btnDesc?: React.ReactNode,
    className?: string,
    colorPrimaryText?: string,
    colorPrimaryBtn?: string,
    colorSecondary?: string,
}
const InfoCard = ({ className, heading = "Shoeb", task = "46 options", btnDesc = "Go to Task", colorPrimaryText = "", colorPrimaryBtn = '', colorSecondary = '' }: InfoCardProps) => {
    return (
        <div className={cn('bg-white w-[360px] px-4 grid-flow-row space-y-4 content-center', className)}>
            <div className="head row-span-4 w-full ml-8 font-poppins">
                <User
                    avatarProps={{
                        src: "",
                        size: 'lg',
                        className: cn('border-2 border-gray-300', colorSecondary)
                    }}
                    description={task}
                    name={heading}
                    className={`gap-6 font-bold`}
                    classNames={{
                        base: "rounded-lg transition-colors p-2",
                        wrapper: "group",
                        name: cn(`text-lg font-bold uppercase`, colorPrimaryText),
                        description: cn("pl-0.5")
                    }}
                />
            </div>
            <div className="body row-span-4 text-black text-left w-[90%] text-wrap ml-12 font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eaque! Quasi, iste quibusdam eos numquam possimus dolor repellat.</div>
            <div className="w-full flex justify-center items-center">
                <Button className={cn(`btn row-span-4 w-3/4 place-self-center self-center rounded-md text-white font-semibold`, colorPrimaryBtn)}>
                    {btnDesc}
                    <ArrowUpRight size={20} />
                </Button>
            </div>
        </div>
    )
}

export default InfoCard