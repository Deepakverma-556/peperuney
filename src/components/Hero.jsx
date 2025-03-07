import Image from "next/image"
import Header from "./common/Header"
import CustomMarquee from "./common/CustomMarquee"

function Hero() {
    return (
        <div className="bg-[url(/assets/images/webp/hero-bg.webp)] bg-cover bg-no-repeat">
            <Header />
            <Image src={'/assets/images/webp/title.webp'} alt="title" width={777} height={283} className="mx-auto pointer-events-none mt-[63px] max-sm:mt-[136px] max-lg:h-40 max-lg:w-96 max-sm:h-[135] max-sm:w-[373px]" />
            <div className="relative mt-[158px] max-sm:mt-[206px]">
                <Image src={'/assets/images/webp/hero-pizza.webp'} alt="pizza" width={1920} height={356} className="mx-auto pointer-events-none mt-[34px] max-sm:mt-[95px] object-cover max-sm:w-[896px] max-sm:h-[151px]" />
                <Image src={'/assets/images/webp/hero.webp'} alt="hero" height={317} width={341} className="max-lg:!w-[200px] pointer-events-none max-xl:w-[300px] absolute -top-32 max-lg:-top-16 max-[830px]:-top-24 max-sm:-top-32 left-1/2 -translate-x-1/2 hero max-sm:min-w-[252px]" />
            </div>
            <CustomMarquee />
        </div>
    )
}

export default Hero