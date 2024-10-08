"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { useRef, useState } from "react"
import threedots from '@/app/_assets/svgs/three-dots.svg'
const MessageCard = () => {
  const isOpened  = useRef(false)
  const [active,setActive] = useState(false)
  const [isHoverd,setIsHoverd] = useState(false)
  const toggleActive = ()=>{
    setActive(!active)
  }
  const hoverOver = ()=>{
    setIsHoverd(true)
  }
  const hoverOut = ()=>{
    setIsHoverd(false)
  }

  return (
    <>
      <div onClick={toggleActive} onMouseOver={hoverOver} onMouseOut={hoverOut} className={`relative font-airbnb flex mx-8 mt-1 mb-0 p-4 pb-7 rounded-xl ${active ? 'bg-[#f7f7f7]' : ''} hover:bg-[#f7f7f7]`}>
        <Avatar className="w-16 h-16 mr-2">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col pt-3 text-[#6a6a73] ps-2 grow">
          <div className="flex justify-between items-baseline">
            <span className="text-base">Mostafa Mowad</span>
            <div className={`${(isHoverd || isOpened)?'hidden':'inline'} text-xs`}>1:13 PM</div>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger onClick={isOpened.current = true} ref={isOpened} className={`${isHoverd || isOpened.current ? '' : 'hidden'} absolute top-3 end-4 p-2 rounded-full hover:border border-[#e7e7e7] hover:bg-white`}>
            <Image className="w-3 h-3" src={threedots} alt="" height="" width=""/>
            </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white p-0 py-2">
            <DropdownMenuItem className="hover:bg-[#e7e7e7]">Mark as read/unread</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#e7e7e7]">Star</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-[#e7e7e7]">Archive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </>
  )
}
export default MessageCard