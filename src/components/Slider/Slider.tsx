import { useCallback, useState } from 'react'
import { MdNavigateNext } from 'react-icons/md'
import { GrFormPrevious } from 'react-icons/gr'

import baner_1 from '../../images/baner1.jpg'
import baner_2 from '../../images/baner2.jpg'
import baner_3 from '../../images/baner3.jpg'
import baner_4 from '../../images/banner4.jpg'
import Circle from '../Cricle'

const images = [
  {
    id: 1,
    name: baner_1
  },
  {
    id: 2,
    name: baner_2
  },
  {
    id: 3,
    name: baner_3
  }
]

const Slider = () => {
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events

  const [imageSlide, setImageSlide] = useState(images)
  const handleClickNextSlider = useCallback(() => {
    const newImage = [...imageSlide]
    if (newImage.length > 0 && newImage) {
      const firstImage = newImage[0]
      newImage.shift()
      newImage.push(firstImage)

      setImageSlide(newImage)
    }
  }, [imageSlide])

  return (
    <div
      className='
      max-h-60
      bg-purple-400/10
      w-full
      relative
      group
      h-full
      px-3
      py-3
    '
    >
      <div className='flex flex-row gap-5 h-full '>
        {imageSlide.map((image) => {
          return (
            <div key={image.id} className='flex-shrink  flex-grow  animation duration-200'>
              <img src={image.name} alt='' className='  w-full h-full  bg-cover ' />
            </div>
          )
        })}
      </div>

      <div className='absolute top-1/2 -translate-y-1/2 left-2 hidden group-hover:block'>
        <Circle size='text-3xl' onClick={handleClickNextSlider} bg='bg-slate-500'>
          &#8249;
        </Circle>
      </div>
      <div className='absolute top-1/2 -translate-y-1/2 right-2 hidden group-hover:block'>
        <Circle size='text-3xl' bg='bg-slate-500'>
          &#8250;
        </Circle>
      </div>
    </div>
  )
}

export default Slider
