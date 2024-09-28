import Image from "next/image"
import Link from "next/link"
import logoWord from "../_assets/svgs/Airbnb-word-Logo.png"
import logo from "../_assets/svgs/airbnb-logo-only.svg"
import globe from "../_assets/svgs/globe.svg"
import avatar from "../_assets/124599.jpg"
import hamburger from "../_assets/svgs/hamburger-menu.svg"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Header = () => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between items-center">
          <div className="lg:basis-1/3 ">
            <Link className="flex h-20 gap-1 items-center" href="#">
              <Image className="w-7 h-full block" src={logo} height={100} width={100} alt="airbnb" />
              <Image className="w-16 h-full lg:block hidden " src={logoWord} height={100} width={100} alt="airbnb" />
            </Link>
          </div>
          <div className="lg:flex justify-center hidden">
            <button className="text-[#737373] hover:bg-[#f7f7f7] p-3 rounded-full">
              Stays
            </button>
            <button className="text-[#737373] hover:bg-[#f7f7f7] p-3 rounded-full">
              Experiences
            </button>
          </div>
          <div className="lg:basis-1/3 flex justify-end">
            <div className="flex items-center mr-1">
              <button className="text-[#222] font-medium  hover:bg-[#f7f7f7] p-3 rounded-full">
                Switch to hosting
              </button>
              <button className="text-[#222] font-medium  hover:bg-[#f7f7f7] p-3 rounded-full">
                <Image className="w-6 h-6" src={globe} width={20} height={20} alt="" />
              </button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="rounded-full">
                <div className="flex w-auto rounded-full px-2 py-1 border gap-2 items-center hover:shadow" >
                  <Image className="w-6 h-6" src={hamburger} height='' width='' alt="" />
                  <Image className="w-9 h-9 rounded-full" src={avatar} width="" height="" alt="" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[15rem] mr-16 bg-white px-0 py-3">
                <Link href='/guest/messages/4564'>
                  <DropdownMenuItem className="hover:bg-[#e7e7e7] cursor-pointer pl-4 font-medium">
                    Messages
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className="hover:bg-[#e7e7e7] cursor-pointer pl-4 font-medium">Notifications</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#e7e7e7] cursor-pointer pl-4 font-medium">Trips</DropdownMenuItem>
                <Link href='/wishlists'>
                  <DropdownMenuItem className="hover:bg-[#e7e7e7] cursor-pointer pl-4 font-medium">
                    Wishlist
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-[#e7e7e7] cursor-pointer pl-4">Manage linsting</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#e7e7e7] cursor-pointer pl-4">Host an experience</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#e7e7e7] cursor-pointer pl-4">Account</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-[#e7e7e7] cursor-pointer pl-4">Gift cards</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#e7e7e7] cursor-pointer pl-4">Help Center</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-[#e7e7e7] cursor-pointer pl-4">Log Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
        </div>
        
      </div>
    </>
  )
}
export default Header