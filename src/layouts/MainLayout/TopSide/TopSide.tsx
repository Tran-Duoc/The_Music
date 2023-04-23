import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
import { IoDiamondOutline } from 'react-icons/io5'
import { FiSettings } from 'react-icons/fi'
import Circle from '../../../components/Cricle'
import Button from '../../../components/Button'

const TopSide = () => {
  return (
    <div
      className='
        w-full
        h-auto
        py-5
        text-[#e5e5e5]
        grid
        grid-cols-[100px_auto_500px]
        px-12
        items-center
      '
    >
      <div className='flex flex-row gap-5 items-center  text-2xl'>
        <GrLinkPrevious />
        <GrLinkNext />
      </div>
      <div className='w-1/2'>
        <form>
          <label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only  '>
            Search
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-gray-500 dark:text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
            <input
              type='search'
              id='default-search'
              className='block w-full p-2 pl-10 text-sm text-slate-100 border border-gray-300  bg-[#2f2739]/40 focus:ring-stone-50 focus:border-blue-500 rounded-full '
              placeholder='Tìm kiếm bài hát.....'
              required
            />
          </div>
        </form>
      </div>
      <div className='ml-auto flex flex-row items-center gap-5   '>
        <Button style='bg-slate-300/10  text-[#9f60c2]  hover:text-gray-300'>Tải bản Windows</Button>
        <Circle>
          <IoDiamondOutline />
        </Circle>
        <Circle>
          <FiSettings />
        </Circle>
        <Button style='bg-purple-500 text-gray-50  hover:text-gray-300'>Đăng nhập</Button>
      </div>
    </div>
  )
}

export default TopSide
