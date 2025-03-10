import Image from "next/image"
import Heading from "./common/Heading"
import { useState } from "react";

function PeperuneyToons() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const videoHandler = () => {
        setIsVideoPlaying(true);
    };
    return (
        <div className="bg-[url(/assets/images/webp/peperuney-toons.webp)] earn bg-no-repeat bg-cover max-sm:bg-center">
            <div className="max-w-[1920px] mx-auto relative">
                <div className="max-w-[1172px] mx-auto px-4 flex flex-col justify-end items-end pb-[632px] pt-[110px] max-sm:pb-[482px]">
                    <div className="max-w-[634px] max-md:mx-auto">
                        <Heading text={"$PEPERUNEY"} />
                        <Image src={"/assets/images/webp/toons.webp"} alt="toons" height={105} width={250} className="mx-auto -mt-4 max-md:h-20 max-md:w-52 z-20 relative pointer-events-none max-sm:h-[67px] max-sm:w-[147px] max-sm:-mt-2 max-sm:rotate-3" />
                    </div>
                </div>
                <Image src={"/assets/images/webp/peperuney-front-of-tv.webp"} alt="peperuney-front-of-tv" height={524} width={668} className="absolute pointer-events-none bottom-0 max-md:h-72 max-md:w-[400px] max-lg:h-[350px] max-lg:w-[550px] right-0 lg:z-20 max-sm:h-[304px] max-sm:w-[347px]" />
                <div
                    onClick={videoHandler}
                    className="cursor-pointer w-[477px] h-[339px] 2xl:h-[440px] 2xl:w-[630px] 2xl:bottom-0 absolute bottom-52 left-[30%] max-lg:bottom-48 max-lg:left-[41%] max-md:h-[330px] max-md:w-[300px] max-sm:w-[225px] max-sm:h-[270px] max-md:bottom-[21.5%] max-md:left-[36%] max-sm:left-[13%]"
                >
                    {!isVideoPlaying ? (
                        <Image
                            src="/assets/images/webp/peperuney-thumbnail.webp"
                            alt="Video Thumbnail"
                            width={477}
                            height={339}
                            className="w-full h-full rounded-3xl object-cover pointer-events-none"
                        />
                    ) : (
                        <iframe
                            src="https://www.youtube.com/embed/JzPfMbG1vrE?autoplay=1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-3xl"
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default PeperuneyToons