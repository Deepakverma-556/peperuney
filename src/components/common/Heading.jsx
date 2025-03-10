const Heading = ({ text, myClass,spanClass }) => {
  return (
    <p className={`${myClass} text-[80px] relative max-lg:text-6xl max-lg:leading-14 max-sm:text-[52px] max-sm:leading-[52px] leading-20 text-black ff-luckiest max-w-max font-outline-2`}>
      {text}
      <span className={`${spanClass} text-[80px] max-lg:text-6xl max-lg:leading-14 max-sm:text-[52px] max-sm:leading-[52px] leading-20 absolute ff-luckiest -top-[3px] -left-[3px] text-white max-sm:-left-0`}>{text}</span>
    </p>
  )
}

export default Heading