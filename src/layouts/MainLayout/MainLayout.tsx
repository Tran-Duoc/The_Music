import LeftSide from './Leftside'
import RightSide from './Rightside/index'
import TopSide from './TopSide'

interface Props {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className='  grid grid-cols-1  lg:grid-cols-[240px_auto_300px] min-h-screen relative '>
      <LeftSide className='hidden lg:block' />

      <div
        className='bg-[#170f23]
        relative
        scrollbar-hide
        overflow-y-hidden
        '
      >
        <TopSide />
        {children}
      </div>
      <RightSide className='hidden lg:block' />
    </div>
  )
}

export default MainLayout
