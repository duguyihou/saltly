import useProgressiveImg from '@hooks/useProgressiveImg'

import { BackgroundProps } from '@/typings'

import bgImg from './bg.jpg'
import bgBlur from './bg-blur.jpg'

function Background({ children }: BackgroundProps) {
  const [src, { blur }] = useProgressiveImg(bgBlur, bgImg)
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 bg-black flex justify-center items-center">
      {children}
      <img
        src={src as string}
        className="w-full h-full flex justify-center items-center "
        style={{
          filter: (blur as boolean) ? 'blur(20px)' : 'none',
          transition: (blur as boolean) ? 'none' : 'filter 1s ease-out',
        }}
        alt="background"
      />
    </div>
  )
}

export default Background
