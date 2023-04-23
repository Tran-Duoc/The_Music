import { MenuType } from '~/types/menu.type'
import SvgTag from '../SvgTag/index'
import { Link } from 'react-router-dom'

const MenuItem = ({ icon, name, path }: Pick<MenuType, 'icon' | 'name' | 'path'>) => {
  return (
    <Link
      to={path}
      className='
        w-full
        flex
        flex-row
        items-end
        justify-start
        gap-5
        py-4
        pl-3
        hover:bg-slate-200/10
        relative
        group
        duration-150
  '
    >
      <SvgTag svgCode={icon} />
      <p>{name}</p>
      <div className='absolute hidden group-hover:block right-2 top-1/2 -translate-y-1/2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-5 h-5'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z'
          />
        </svg>
      </div>
    </Link>
  )
}

export default MenuItem
