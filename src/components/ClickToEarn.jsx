import Image from "next/image"
import Heading from "./common/Heading"
import Description from "./common/Description"
import CustomButton from "./common/CustomButton"
import { Telegram } from "@/utils/icons"

function ClickToEarn() {
    return (
        <>
            <div className="bg-[url(/assets/images/webp/earn-and-arcade.webp)] bg-cover bg-no-repeat pt-[100px] pb-32 max-sm:pt-[60px] max-sm:pb-0 relative">
                <div className="flex justify-end max-w-[1372px] mx-auto">
                    <div className="max-w-[682px] max-md:mx-auto items-center px-4 flex flex-col justify-center">
                        <Heading spanClass={'max-sm:-mx-1'} text={'CLICK-TO-EARN AND ARCADE'} myClass={'!max-w-[555px] text-center -mb-5 max-sm:-mb-3 max-sm:-mx-1'} />
                        <Image src={'/assets/images/webp/casino.webp'} alt="casino" height={105} width={250} className="-mb-11 z-20 pointer-events-none max-sm:h-[77px] max-sm:w-[195px]" />
                        <div className="relative max-w-[682px] px-[30px] py-[50px] max-sm:px-4 max-sm:pt-13 max-sm:pb-7">
                            <Image src={'/assets/images/png/casino-card.png'} alt="casino-card" height={358} width={682} className="absolute pointer-events-none z-10 top-0 left-0 h-full" />
                            <Description myClass={'relative z-20'} text={'HEY YOU! Yeah, YOU! So you made it this far… Hell yeah I’m impressed! Means you’re serious about pizza, vibes, and big-time wins. Catch me at the slots or the poker table, always *ALL-IN* for that next big score. It’s the thrill, baby—the gamble, the grind—it keeps me fired up to build the ULTIMATE PIZZA EMPIRE! Wanna roll with the best? Smash that button, start stackin’ up, and show me what you got. FEELS GREAT MAN!'} />
                        </div>
                        <div className="flex max-sm:flex-col items-center gap-[30px] pt-10 max-sm:pt-6 max-sm:gap-2">
                            <CustomButton imgClass={'!w-[241px] !h-full !w-full'} myClass={'gap-[15px] !w-[241px] max-lg:!w-[180px] !h-[74px] max-sm:!w-[335px]'} iconClass={'z-20 relative flex'} spanText={<Telegram pathClass={'fill-white'} myClass={'max-sm:!h-8'} />} spanClass={'max-sm:!text-2xl'} text={'PLAY nOW'} />
                            <button className={`relative gap-[15px] flex w-[241px] !h-[75px] max-lg:h-12 max-lg:w-44 max-sm:h-10 hover:scale-105 transition-all duration-300 max-sm:w-[335px] cursor-pointer items-center justify-center`}>
                                <Image className={`absolute pointer-events-none top-0 left-0 !h-full !w-full`} width={241} height={75} src={"/assets/images/png/green-button.png"} alt="green-button" />
                                <span className="relative z-20"><Telegram pathClass={'fill-white'} myClass={'max-sm:!h-8'} /></span><span className={` z-20 ff-luckiest text-[28px] max-lg:text-xl max-sm:text-2xl leading-7 text-white`}>mini APP</span>
                            </button>
                        </div>
                    </div>
                </div>
                <Image className={` pointer-events-none sm:hidden`} width={279} height={618} src={"/assets/images/webp/peperuney-with-machine.webp"} alt="peperuney-with-machine" />
            </div>
            <div className="border-t-4 border-b-4 border-black bg-customGray h-[39px]"></div>
        </>
    )
}

export default ClickToEarn