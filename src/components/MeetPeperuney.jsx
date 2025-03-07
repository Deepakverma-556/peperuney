import Image from "next/image"
import Description from "./common/Description"
import CustomButton from "./common/CustomButton"
import Heading from "./common/Heading"

function MeetPeperuney() {
    return (
        <div className="bg-[url(/assets/images/webp/meet-peperuney.webp)] bg-cover bg-no-repeat bg-center">
            <Image src={'/assets/images/webp/melting-cheese.webp'} alt="melting-cheese" height={272} width={1920} className="w-full object-cover max-sm:h-[201px] pointer-events-none" />
            <div className="max-w-[1332px] pt-24 max-[404px]:pt-32 mx-auto flex max-lg:flex-wrap-reverse max-sm:pr-2 pb-[1030px] max-lg:pb-[550px]">
                <Image src={'/assets/images/gif/cloud-peperuney.gif'} alt="cloud" width={580} height={530} className="max-lg:mx-auto max-sm:-mt-20 z-20 pointer-events-none" />
                <div className="relative flex items-center flex-col justify-center">
                    <Heading myClass={'-mt-24 text-center max-[404px]:-mt-32'} text={"MEET PEPERUNEY"} />
                    <Image src={'/assets/images/png/pizza-guy.png'} alt="pizza-guy" width={715} height={509} className="absolute pointer-events-none max-[1315px]:h-full z-10 top-0 left-0 max-lg:w-full max-lg:pr-10 max-sm:pr-0 max-sm:w-full" />
                    <Image src={'/assets/images/webp/sticker.webp'} alt="pizza-sticker" width={337} height={102} className="absolute pointer-events-none z-10 -top-10 left-1/2 -translate-x-1/2 max-sm:w-[195px] max-sm:h-[77px]" />
                    <div className="px-16 max-sm:pl-8 max-lg:pl-20 max-sm:pr-4 relative z-20 pt-16 max-lg:pt-20 pb-20 max-sm:pt-20 max-sm:pb-12">
                        <Description myClass={''} text={"The pizza-slingin’, joint-tokin’, all-in degen fresh from the Matt Furie multiverse, here to leave his greasy mark on the memeverse one slice at a time. PepeRuney's the king of high-stakes and low-stress vibin’. Spot the red hat and polo? You know it’s pizza time, baby! Whether he’s hustlin’ for the next big score or chillin’ with the Boys Club, PepeRuney guarantees one thing: the vibes and the dough are always rollin’"} />
                        <div className="border-t border-black mt-1"></div>
                        <div className="flex items-center justify-between pt-3 max-sm:pr-4">
                            <p className="text-[32px] max-xl:text-2xl max-md:leading-8 leading-[44.56px] text-black">FEELS GREAT MAN!</p>
                            <CustomButton text={'MANIFESTO'} myClass={'max-[1330px]:h-14 max-[1330px]:w-[180px] max-sm:w-[127px] max-sm:h-[36px]'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-60 max-sm:pb-48">
                <CustomButton text={'BUY $PEPERUNEY'} myClass={'mx-auto !w-[262px] !h-[74px]'} spanClass={'max-lg:!text-2xl'} />
            </div>
        </div>
    )
}

export default MeetPeperuney