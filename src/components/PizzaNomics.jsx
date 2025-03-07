import Image from "next/image"
import CustomButton from "./common/CustomButton"
import Heading from "./common/Heading"
import { PIZZANOMICS_ICONS_LIST } from "@/utils/helper"
import Link from "next/link"
import CustomMarquee from "./common/CustomMarquee"

const PizzaNomics = () => {
    return (
        <div>
            <div className="bg-[url(/assets/images/webp/pizzanomics-bg.webp)] bg-cover bg-no-repeat">
                <Image src={'/assets/images/webp/pizzanomics-small.webp'} alt="small" height={900} width={700} className="sm:hidden w-full pointer-events-none max-sm:h-[1000px]" />
                <div className="sm:pt-[777px] max-sm:pt-8 2xl:pt-[1260px] max-w-[1200px] mx-auto flex items-center max-lg:flex-wrap justify-between">
                    <div className="sm:pt-80 lg:pl-20 max-lg:mx-auto max-sm:pb-[13px]">
                        <Heading text={'BAKE TO EARN'} />
                        <CustomButton text={"EARN NOW"} myClass={'!h-[97px] !w-[313px] max-lg:!h-20 max-lg:!w-60 max-sm:!w-[335px] max-sm:!h-[74px] mx-auto mt-4'} imgClass={"!h-[97px] !w-[313px] max-lg:!h-20 max-lg:!w-60 max-sm:!w-[335px] max-sm:!h-[74px]"} />
                    </div>
                    <Image src={'/assets/images/webp/peperuney-holding-a-paper.webp'} alt="peperuney" height={851} width={656} className="xl:-mr-16 pointer-events-none lg:mt-10 max-xl:w-[450px] max-lg:w-[300px] max-sm:h-[300px] max-sm:w-[300px] max-lg:mx-auto" />
                </div>
                <div className="max-w-[1232px] px-4 mx-auto pt-36 pb-10">
                    <div className="flex items-center justify-center gap-4 max-sm:gap-10 flex-wrap">
                        {PIZZANOMICS_ICONS_LIST.map((obj, i) => (
                            <Link key={i} href={"/"} className="group">
                                <Image src={obj.image} alt={obj.imageAlt} height={140} width={360} className="max-sm:h-[92px] pointer-events-none max-sm:w-[236px] transition-all duration-300 group-hover:scale-105" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <CustomMarquee />
        </div>
    )
}

export default PizzaNomics