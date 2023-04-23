interface Props {
  children: React.ReactNode
  size?: string
  onClick?: () => void
  bg?: string
}

const Circle = ({ children, size, bg, onClick }: Props) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={`
        w-10
        h-10
        rounded-full
        flex
        items-center
        justify-center
        ${size}
        ${bg || '  bg-gray-500/10'}
    `}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Circle
