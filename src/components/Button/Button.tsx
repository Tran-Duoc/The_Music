interface Props {
  children: string
  style: string
}

const Button = ({ children, style }: Props) => {
  return <div className={`px-8 py-2 rounded-full font-semibold  duration-150 ${style}`}>{children}</div>
}

export default Button
