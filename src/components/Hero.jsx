import Image from "next/image"
import Header from "./common/Header"
import CustomMarquee from "./common/CustomMarquee"

function Hero() {
    return (
        <div className="bg-[url(/assets/images/webp/hero-bg.webp)] bg-cover bg-no-repeat">
            <Header />
            <Image src={'/assets/images/webp/title.webp'} alt="title" width={777} height={283} className="mx-auto mt-[63px] max-sm:mt-10 max-lg:h-40 max-lg:w-96 max-sm:h-28 max-sm:w-72"/>
            <Image src={'/assets/images/gif/pizza-peperuney.gif'} alt="pizza" width={1920} height={356} className="mx-auto mt-[34px] max-sm:mt-6 max-sm:w-full max-sm:h-28" />
            <CustomMarquee/>
        </div>
    )
}

export default Hero