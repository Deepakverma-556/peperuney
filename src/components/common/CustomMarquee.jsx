import { MARQUEE_LIST } from "@/utils/helper"
import Marquee from "react-fast-marquee"
const CustomMarquee = () => {
  return (
      <div className="bg-customRed border-t-4 border-b-4 border-black">
          <Marquee direction="left" pauseOnHover={true}>
              <div className="flex gap-10 py-[30px]">
                  {MARQUEE_LIST.map((obj, i) => (
                      <p key={i} className="text-[40px] leading-10 text-white ff-luckiest">{obj}</p>
                  ))}
              </div>
          </Marquee>
    </div>
  )
}

export default CustomMarquee