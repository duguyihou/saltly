import { BackgroundProps } from '@/typings'

function Background({ children }: BackgroundProps) {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 bg-black backdrop-blur-lg flex justify-center items-center">
      {children}
    </div>
  )
}

export default Background
