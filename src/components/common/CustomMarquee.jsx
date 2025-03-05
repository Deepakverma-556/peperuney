import { MARQUEE_LIST } from "@/utils/helper"
import Marquee from "react-fast-marquee"
const CustomMarquee = () => {
  return (
      <div className="bg-customRed border-t-4 border-b-4 border-black">
          <Marquee direction="left" pauseOnHover={true}>
              <div className="flex gap-10 py-[30px] max-lg:py-3 max-sm:py-6">
                  {MARQUEE_LIST.map((obj, i) => (
                      <p key={i} className={`${i===0 ? "pl-10" : ""} text-[40px] relative max-lg:text-3xl max-sm:text-[28px] max-sm:leading-7 leading-10 text-black ff-luckiest`}>
                          {obj}
                          <span className={`${i === 0 ? " pl-10" : ""} text-[40px] max-lg:text-3xl max-sm:text-[28px] max-sm:leading-7 leading-10 absolute ff-luckiest -top-[3px] -left-[3px] text-white`}>{obj}</span>
                      </p>
                  ))}
              </div>
          </Marquee>
    </div>
  )
}

export default CustomMarquee