interface Props {
  svgCode: any
}

const SvgTag = ({ svgCode }: Props) => {
  return <div dangerouslySetInnerHTML={{ __html: svgCode }} className='w-5 h-5 fill-current ' />
}

export default SvgTag
