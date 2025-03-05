const Heading = ({text,myClass}) => {
  return (
      <p className={`${myClass} text-[80px] relative max-lg:text-6xl max-sm:text-[52px] max-sm:leading-[52px] leading-20 text-black ff-luckiest`}>
          {text}
          <span className={`text-[80px] max-lg:text-6xl max-sm:text-[52px] max-sm:leading-[52px] leading-20 absolute ff-luckiest -top-[3px] -left-[3px] text-white`}>{text}</span>
      </p>
  )
}

export default Heading