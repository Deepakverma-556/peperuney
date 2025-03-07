import Image from "next/image"

function CustomButton({ text, myClass, imgClass, spanClass }) {
  return (
    <button className={`${myClass} relative flex w-[262px] h-[75px] max-lg:h-12 max-lg:w-44 max-sm:h-10 hover:scale-105 transition-all duration-300 max-sm:w-36 cursor-pointer items-center justify-center`}>
      <Image className={`absolute pointer-events-none top-0 left-0 ${imgClass}`} width={262} height={75} src={"/assets/images/png/button.png"} alt="button" />
      <span className={`${spanClass} z-20 ff-luckiest text-[28px] max-lg:text-xl max-sm:text-sm leading-7 text-white`}>{text}</span>
    </button>
  )
}

export default CustomButton