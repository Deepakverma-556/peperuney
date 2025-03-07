import Image from "next/image"
import CustomButton from "./CustomButton"
import { DropdownArrow } from "@/utils/icons"
import { useState } from "react"
import { HEADER_ICONS_LIST } from "@/utils/helper"
import Link from "next/link"

function Header() {
    const [open, setOpen] = useState(false)
    return (
        <div className="max-w-[1332px] mx-auto px-4 flex justify-between items-center pt-[30px] max-sm:pt-5">
            <CustomButton text={"BUY $PEPERUNEY"} />
            <div className="flex gap-8 max-md:gap-2">
                <button onClick={() => setOpen(!open)} className="flex cursor-pointer items-center gap-[14px] max-sm:gap-1 relative">
                    <Image src={'/assets/images/png/flag.png'} alt="flag" height={31} width={41} className="max-sm:h-6 max-sm:w-8 pointer-events-none" />
                    <div className={`absolute flex flex-col gap-2 transition-all duration-200 ${open ? "opacit-100 top-14 max-sm:top-10" : "opacity-0 top-0"}`}>
                        <Image src={'/assets/images/png/indian-flag.png'} alt="indian-flag" height={31} width={41} className="max-sm:h-6 max-sm:w-8 pointer-events-none" />
                        <Image src={'/assets/images/png/flag.png'} alt="flag" height={31} width={41} className="max-sm:h-6 max-sm:w-8 pointer-events-none" />
                    </div>
                    <div><DropdownArrow myClass={`${open ? "rotate-180" : ""} transition-all duration-200`} /></div>
                </button>
                <div className="flex items-center gap-2">
                    {HEADER_ICONS_LIST.map((obj, i) => (
                        <Link href={obj.link} target="blank" key={i} className="relative h-[67px] w-[77px] max-lg:w-12 max-lg:h-10 max-sm:h-8 max-sm:w-9 flex items-center justify-center link">
                            <Image src={'/assets/images/png/icon-bg.png'} alt="icon-bg" height={67} width={77} className="absolute top-0 left-0 pointer-events-none" />
                            <span className="z-20">{obj.icon}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header