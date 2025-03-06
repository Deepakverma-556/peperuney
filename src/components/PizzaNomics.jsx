import Image from "next/image"
import CustomButton from "./common/CustomButton"
import Heading from "./common/Heading"

const PizzaNomics = () => {
  return (
      <div className="bg-[url(/assets/images/webp/pizzanomics-bg.webp)] bg-cover bg-no-repeat">
          <div className="pt-[777px] max-w-[1200px] mx-auto flex items-center justify-between">
              <div className="pt-96 pl-20">
                  <Heading text={'BAKE TO EARN'}/>
                  <CustomButton text={"EARN NOW"} myClass={'h-[97px] w-[313px] mx-auto mt-4'} imgClass={"h-[97px] w-[313px]"}/>
              </div>
              <Image src={'/assets/images/webp/peperuney-holding-a-paper.webp'} alt="peperuney" height={851} width={656} className="-mr-16"/>
          </div>
    </div>
  )
}

export default PizzaNomics