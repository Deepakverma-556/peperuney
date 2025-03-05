import Image from "next/image"
import CustomMarquee from "./common/CustomMarquee"

const HowToBuy = () => {
  return (
      <div className="bg-white">
          <CustomMarquee myClass={'!bg-customGreen !pb-16'} />
          <Image src={"/assets/images/png/big-cloud.png"} alt="big-cloud" height={1920} width={195} className="w-full -mt-28 max-md:h-[140px] max-sm:h-28"/>
    </div>
  )
}

export default HowToBuy