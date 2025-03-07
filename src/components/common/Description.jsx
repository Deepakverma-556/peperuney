const Description = ({ myClass, text }) => {
  return (
    <p className={`${myClass} text-2xl max-md:text-xl max-md:leading-7 leading-[43.2px] text-black`}>{text}</p>
  )
}

export default Description