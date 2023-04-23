import React, { Fragment } from 'react'
import Logo from '../../../components/Logo'
import MenuItem from '../../../components/MenuItem'
import { primaryMenuConstants, secondaryMenuConstants } from '../../../constants/index'

interface Props {
  className: string
}

const Line = () => {
  return <div className='border-[1px] bg-[#f1f1f1]  w-[90%] mx-auto'></div>
}
// const isActive = (id: string | number, index: string | number): boolean => {
//   return id === index
// }

const LeftSide = ({ className }: Props) => {
  return (
    <div className={className}>
      <div
        className='
        flex
        flex-col
        items-start
        justify-start
        bg-[#231b2e]
        text-[#dbd9dd]
        max-h-screen
        h-full
        pt-4
      '
      >
        <Logo />
        <div
          className='
          w-full
          flex 
          flex-col
          gap-2
          mt-4
        '
        >
          <>
            {primaryMenuConstants.map((item, index) => {
              const { name, icon, path } = item

              return (
                <Fragment key={index}>
                  <MenuItem icon={icon} name={name} path={path} />
                </Fragment>
              )
            })}
          </>
          <Line />
          <div className='max-h-[365px]  overflow-hidden overflow-y-scroll scrollbar-hide'>
            {secondaryMenuConstants.map((item, index) => {
              const { name, icon, path } = item

              return (
                <Fragment key={index}>
                  <MenuItem icon={icon} name={name} path={path} />
                </Fragment>
              )
            })}
            <Line />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSide
