import Image from "next/image"
import CustomMarquee from "./common/CustomMarquee"
import Heading from "./common/Heading"
import { HOW_TO_BUY_CARDS_LIST } from "@/utils/helper"
import { CopyIcon } from "@/utils/icons"

const HowToBuy = () => {
  return (
    <div className="bg-white">
      <CustomMarquee myClass={'!bg-customGreen !pb-16'} />
      <Image src={"/assets/images/png/big-cloud.png"} alt="big-cloud" height={1920} width={195} className="w-full pointer-events-none -mt-28 max-md:h-[140px] max-sm:h-28" />
      <div className="pt-[50px] max-sm:pt-11 pb-10">
        <Heading text={"HOW TO BUY"} myClass={"mx-auto z-10 relative"} />
        <Image src={"/assets/images/png/peperuney-sticker.png"} alt="peperuney-sticker" height={105} width={365} className="mx-auto pointer-events-none -mt-5 max-sm:-mt-3 z-20 relative max-lg:h-20 max-lg:w-64 max-sm:w-[231px]" />
      </div>
      <div className="bg-[url(/assets/images/webp/pizza-box.webp)] bg-cover bg-center bg-no-repeat">
        <div className="max-w-[1072px] mx-auto pt-[146px] max-lg:pt-10 px-4">
          <div className="flex flex-wrap -mx-[19px] max-lg:-mx-3 items-end justify-center">
            {HOW_TO_BUY_CARDS_LIST.map((obj, i) => (
              <div key={i} className="w-1/3 px-[19px] max-lg:px-3 max-lg:w-1/2 max-sm:w-full max-lg:pt-16">
                <div className="border-4 relative border-black bg-white pt-[50px] pb-[19px] px-5 max-sm:px-3">
                  <div className="h-[74px] w-[85px] max-lg:size-16 max-sm:h-[58px] max-sm:w-[59px] bg-black absolute flex justify-center -rotate-6 left-1/2 -translate-x-1/2 -top-[51px] max-sm:-top-[43px]"><p className="text-[54px] max-lg:text-5xl max-sm:text-[28px] text-white ff-luckiest leading-[100%] pt-2 max-sm:pt-3">0{i + 1}</p></div>
                  <p className="text-[40px] max-lg:text-4xl max-sm:text-[28px] text-black ff-luckiest leading-[100%] text-center">{obj.title}</p>
                  <p className="text-lg text-black leading-[150%] text-center pt-[10px]">{obj.description}</p>
                </div>
                {i === 1 && <div className="border-4 mb-8 max-lg:hidden border-black bg-white flex items-center justify-between p-3 w-[346px] -ml-2 mt-[37px]">
                  <p className="text-lg text-black leading-[150%] text-center pt-[10px]">CA: 0x93jr98fo2ihf89hf0o82hf0ohi9f0</p>
                  <div className="h-8 w-8 flex items-center justify-center bg-black"><CopyIcon/></div>
                </div> }
              </div>
            ))}
          </div>
        </div>
        <Image src={'/assets/images/webp/half-pizza.webp'} alt="pizza" height={495} width={1220} className="max-sm:h-[280px] pointer-events-none max-sm:w-full object-cover max-sm:mt-7 mx-auto"/>
      </div>
      <Image src={"/assets/images/webp/box-pattern.webp"} alt="pattern" width={1920} height={134} className="max-sm:object-cover pointer-events-none max-sm:h-[90px] w-full"/>
    </div>
  )
}

export default HowToBuy